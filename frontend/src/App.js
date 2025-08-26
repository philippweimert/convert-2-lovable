import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import ServiceTeamPage from "./components/ServiceTeamPage";
import ContactPage from "./components/ContactPage";
import PrivacyPage from "./components/PrivacyPage";
import ImprintPage from "./components/ImprintPage";
import EmployerObligationsPage from "./components/EmployerObligationsPage";
import AktuellesPage from "./components/AktuellesPage";
import EmptyTemplatePage from "./components/EmptyTemplatePage";
import DieBavPage from "./components/DieBavPage";
import DieBavPageX from "./components/DieBavPageX";
import DieBavPageY from "./components/DieBavPageY";
import BkvPage from "./components/BkvPage";
import BuvPage from "./components/BuvPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/ueber-uns/service-team" element={<ServiceTeamPage />} />
          <Route path="/bav-rechtliche-grundlagen" element={<EmployerObligationsPage />} />
          <Route path="/die-bav" element={<DieBavPage />} />
          <Route path="/die-bav/x" element={<DieBavPageX />} />
          <Route path="/die-bav/y" element={<DieBavPageY />} />
          <Route path="/die-bav/aktuelles" element={<AktuellesPage />} />
          <Route path="/aktuelles" element={<AktuellesPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/leere-vorlage" element={<EmptyTemplatePage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
          <Route path="/datenschutzerklaerung" element={<PrivacyPage />} />
          <Route path="/impressum" element={<ImprintPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;