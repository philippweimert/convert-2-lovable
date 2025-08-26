#!/usr/bin/env python3
"""
MongoDB Connection Test
Tests the MongoDB connection and database operations.
"""

import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
ROOT_DIR = Path('/app/backend')
load_dotenv(ROOT_DIR / '.env')

async def test_mongodb_connection():
    """Test MongoDB connection and basic operations"""
    print("=== Testing MongoDB Connection ===")
    
    try:
        # Get MongoDB URL from environment
        mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
        db_name = os.environ.get('DB_NAME', 'test_database')
        
        print(f"MongoDB URL: {mongo_url}")
        print(f"Database Name: {db_name}")
        
        # Create client and connect
        client = AsyncIOMotorClient(mongo_url)
        db = client[db_name]
        
        # Test connection by listing collections
        collections = await db.list_collection_names()
        print(f"Available collections: {collections}")
        
        # Test status_checks collection
        status_count = await db.status_checks.count_documents({})
        print(f"Status checks count: {status_count}")
        
        # Test contact_submissions collection
        contact_count = await db.contact_submissions.count_documents({})
        print(f"Contact submissions count: {contact_count}")
        
        # Test server info
        server_info = await client.server_info()
        print(f"MongoDB version: {server_info.get('version', 'Unknown')}")
        
        client.close()
        print("✅ MongoDB connection test successful")
        return True
        
    except Exception as e:
        print(f"❌ MongoDB connection test failed: {e}")
        return False

if __name__ == "__main__":
    success = asyncio.run(test_mongodb_connection())
    exit(0 if success else 1)