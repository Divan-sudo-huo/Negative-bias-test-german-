const fragen = [
    "Bemerkst du Kritik stärker als Lob?",
    "Erwartest du oft, dass etwas schiefgeht?",
    "Denkst du lange über deine Fehler nach?",
    "Erwartest du meistens das schlechteste Ergebnis?",
    "Bleiben negative Ereignisse lange in deinem Kopf?",
    "Suchst du nach Problemen, auch wenn alles gut läuft?",
    "Denkst du bei einer unklaren Nachricht oft, dass jemand sauer auf dich ist?",
    "Machst du dir Sorgen, wenn jemand dir nicht antwortet?",
    "Denkst du oft, dass andere etwas Negatives meinen?",
    "Konzentrierst du dich eher darauf, was schiefgelaufen ist?",
    "Nimmst du Kritik schnell persönlich?",
    "Unterstellst du anderen manchmal schlechte Absichten, ohne viele Beweise zu haben?",
    "Erwartest du vor wichtigen Ereignissen, dass etwas schiefgeht?",
    "Denkst du vor neuen Dingen zuerst über mögliche Fehler nach?",
    "Erwartest du, dass schlechte Dinge wieder passieren?",
    "Machst du dir mehr Gedanken über schlechte als über gute Ergebnisse?",
    "Machst du dir Sorgen, wenn gerade alles gut läuft?",
    "Erwartest du bei unsicheren Situationen eher das Schlimmste?",
    "Bleiben peinliche Momente lange in deinem Kopf?",
    "Spielst du Fehler immer wieder in Gedanken durch?",
    "Kommen dir negative Erinnerungen schnell wieder in den Kopf?",
    "Denkst du viel über schlechte Erfahrungen nach?",
    "Erinnerst du dich stärker an die negativen Teile eines Ereignisses?",
    "Fällt es dir schwer, nicht mehr über etwas Schlechtes nachzudenken?",
    "Gibst du dir selbst Anerkennung, wenn etwas gut läuft?",
    "Fühlen sich positive Erfahrungen genauso wichtig an wie negative?",
    "Kannst du Komplimente leicht annehmen?",
    "Erkennst du, wenn etwas besser läuft als erwartet?",
    "Erinnerst du dich genauso deutlich an positive wie an negative Erfahrungen?",
    "Wenn etwas schiefgeht, bemerkst du trotzdem, was gut gelaufen ist?"
];

let aktuelleFrage = 0;
let punktzahl = 0;

function frageAnzeigen() {
    document.getElementById("quiz").innerHTML = `
        <p>Frage ${aktuelleFrage + 1} von ${fragen.length}</p>

        <div class="question">
            ${fragen[aktuelleFrage]}
        </div>

        <select id="antwort">
            <option value="">Antwort auswählen</option>
            <option value="1">1 - Nie</option>
            <option value="2">2 - Selten</option>
            <option value="3">3 - Manchmal</option>
            <option value="4">4 - Oft</option>
            <option value="5">5 - Sehr oft</option>
        </select>
    `;
}

function nextQuestion() {
    const antwort = document.getElementById("antwort").value;

    if (antwort === "") {
        alert("Bitte wähle eine Antwort aus.");
        return;
    }

    let zahl = Number(antwort);

    // Die letzten 6 Fragen werden umgekehrt gewertet.
    if (aktuelleFrage >= 24) {
        zahl = 6 - zahl;
    }

    punktzahl += zahl;
    aktuelleFrage++;

    if (aktuelleFrage < fragen.length) {
        frageAnzeigen();
    } else {
        ergebnisAnzeigen();
    }
}

function ergebnisAnzeigen() {
    const prozent = ((punktzahl - 30) / 120) * 100;

    document.getElementById("quiz").innerHTML = "";
    document.querySelector("button").style.display = "none";

    document.getElementById("result").innerHTML =
        "Dein experimenteller Wert: " +
        prozent.toFixed(1) +
        "%";
}

frageAnzeigen();
