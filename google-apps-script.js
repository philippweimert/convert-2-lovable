/******************************************************************************
 * Dieser Code ist für Google Apps Script bestimmt.
 *
 * ANLEITUNG:
 * 1. Öffnen Sie Ihr Google Sheet "Kontaktformular".
 * 2. Gehen Sie zu "Erweiterungen" > "Apps Script".
 * 3. Kopieren Sie den gesamten Inhalt dieser Datei und fügen Sie ihn in
 *    den Code-Editor in Apps Script ein (überschreiben Sie den
 *    vorhandenen Code).
 * 4. Speichern Sie das Projekt (Diskettensymbol).
 * 5. Klicken Sie auf "Bereitstellen" > "Neue Bereitstellung".
 * 6. Wählen Sie als Typ "Web-App" aus.
 * 7. Bei "Wer hat Zugriff?" wählen Sie "Jeder (auch anonym)". DIES IST WICHTIG!
 * 8. Klicken Sie auf "Bereitstellen".
 * 9. Kopieren Sie die angezeigte "Web-App-URL". Diese benötigen Sie für
 *    den Frontend-Code.
 ******************************************************************************/

function doPost(e) {
  var response;

  if (e.postData) {
    try {
      var data = JSON.parse(e.postData.contents);

      // Den Namen des Google Sheets hier angeben
      var sheetName = "Kontaktformular";
      var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = spreadSheet.getSheetByName(sheetName);

      // Wenn das Sheet nicht gefunden wird, versuche das erste Sheet zu nehmen.
      if (!sheet) {
        sheet = spreadSheet.getSheets()[0];
      }

      // Die Reihenfolge der Spalten muss mit der im Sheet übereinstimmen
      var rowData = [
        data.name,
        data.email,
        data.company,
        data.phone,
        data.message
      ];

      sheet.appendRow(rowData);

      response = {
        status: "success",
        message: "Daten erfolgreich gespeichert."
      };

    } catch (error) {
      response = {
        status: "error",
        message: "Fehler beim Verarbeiten der Daten: " + error.message
      };
    }
  } else {
    response = {
      status: "error",
      message: "Keine Daten empfangen."
    };
  }

  // JSON-Antwort an das Frontend senden
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

// Hilfsfunktion zum Testen aus dem Apps Script Editor
function testDoPost() {
  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        name: "Test Name",
        email: "test@example.com",
        company: "Test Corp",
        phone: "123456789",
        message: "Dies ist eine Testnachricht."
      })
    }
  };
  doPost(mockEvent);
}
