# Anleitung: Kontaktformular mit Google Sheets verbinden

Damit Ihr Kontaktformular die Daten direkt in Ihr Google Sheet eintragen kann, müssen Sie ein von mir vorbereitetes Google Apps Script in Ihrem Google-Konto einrichten.

Bitte folgen Sie diesen Schritten genau.

---

### Schritt 1: Google Apps Script Code kopieren

1.  Öffnen Sie die Datei `google-apps-script.js`, die sich im Hauptverzeichnis dieses Projekts befindet.
2.  Markieren Sie den gesamten Inhalt der Datei und kopieren Sie ihn in Ihre Zwischenablage (Strg+C oder Cmd+C).

---

### Schritt 2: Google Apps Script in Google Sheets erstellen

1.  Öffnen Sie Ihr Google Sheet, das den Namen **"Kontaktformular"** trägt.
    *   Link: [https://docs.google.com/spreadsheets/d/1aEkg1Kt8d-1hMPgiLMuGyuXjebHEvaGrqSQpwNNoh5g/edit](https://docs.google.com/spreadsheets/d/1aEkg1Kt8d-1hMPgiLMuGyuXjebHEvaGrqSQpwNNoh5g/edit)
2.  Klicken Sie im Menü auf **Erweiterungen** > **Apps Script**. Ein neuer Tab mit dem Apps Script Editor öffnet sich.
3.  Löschen Sie den gesamten Beispielcode, der im Editor angezeigt wird.
4.  Fügen Sie den Code aus Ihrer Zwischenablage (aus Schritt 1) in den leeren Editor ein (Strg+V oder Cmd+V).
5.  Klicken Sie auf das **Speichern-Symbol** (Diskette) oben im Menü.

---

### Schritt 3: Das Skript als Web-App bereitstellen (Deployment)

Dies ist der wichtigste Schritt, um eine URL zu erhalten, die Ihr Frontend aufrufen kann.

1.  Klicken Sie oben rechts im Apps Script Editor auf den blauen Button **"Bereitstellen"** und wählen Sie **"Neue Bereitstellung"**.
2.  Ein neues Fenster öffnet sich. Klicken Sie auf das **Zahnrad-Symbol** neben "Typ auswählen" und wählen Sie **"Web-App"**.
3.  Füllen Sie die Felder wie folgt aus:
    *   **Beschreibung:** `Kontaktformular API` (oder eine Beschreibung Ihrer Wahl)
    *   **Web-App > Ausführen als:** `Ich (`Ihre E-Mail-Adresse`)`
    *   **Web-App > Wer hat Zugriff?:** **Ganz wichtig:** Ändern Sie dies auf **"Jeder (auch anonym)"**. Ansonsten kann das Formular keine Daten senden.
4.  Klicken Sie auf **"Bereitstellen"**.
5.  Google wird Sie möglicherweise um eine **Autorisierung** bitten. Folgen Sie den Schritten, um dem Skript die notwendigen Berechtigungen zu erteilen (Zugriff auf Google Sheets).
    *   Möglicherweise sehen Sie eine Warnung "Google hat diese App nicht überprüft". Klicken Sie auf "Erweitert" und dann auf "Weiter zu (Ihr Projektname)".
6.  Nach erfolgreicher Bereitstellung wird Ihnen eine **Web-App-URL** angezeigt. **Kopieren Sie diese URL.** Sie sieht in etwa so aus: `https://script.google.com/macros/s/.../exec`.

---

### Schritt 4: URL im Frontend-Code einfügen

1.  Öffnen Sie die Datei `frontend/src/components/ContactPage.tsx` in Ihrem Code-Editor.
2.  Suchen Sie nach der folgenden Zeile (ca. Zeile 45):
    ```typescript
    const googleScriptUrl = "IHRE_GOOGLE_APPS_SCRIPT_URL_HIER_EINFUEGEN";
    ```
3.  Ersetzen Sie den Text `"IHRE_GOOGLE_APPS_SCRIPT_URL_HIER_EINFUEGEN"` durch die **Web-App-URL**, die Sie in Schritt 3 kopiert haben.

    **Vorher:**
    `const googleScriptUrl = "IHRE_GOOGLE_APPS_SCRIPT_URL_HIER_EINFUEGEN";`

    **Nachher (Beispiel):**
    `const googleScriptUrl = "https://script.google.com/macros/s/AKfycb.../exec";`

4.  Speichern Sie die Datei.

---

### Fertig!

Wenn Sie diese Schritte abgeschlossen haben, ist Ihr Kontaktformular vollständig konfiguriert. Jede neue Anfrage über das Formular wird nun automatisch als neue Zeile in Ihrem Google Sheet erscheinen.
