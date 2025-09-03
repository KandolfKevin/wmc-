export class Frage {
    constructor(frage, optionen, antwort) {
        // Prüfe, dass genau drei Argumente übergeben wurden
        if (arguments.length !== 3) {
            throw new Error("Constructor benötigt genau 3 Argumente");
        }

        // Prüfe, dass erstes und drittes Argument Strings sind
        if (typeof frage !== "string" || typeof antwort !== "string") {
            throw new Error("Erstes und drittes Argument müssen Strings sein");
        }

        // Prüfe, dass das zweite Argument ein nicht-leeres Array ist
        if (!Array.isArray(optionen) || optionen.length === 0) {
            throw new Error("Zweites Argument muss ein nicht-leeres Array sein");
        }

        // Prüfe, dass die Antwort in den Optionen enthalten ist
        if (!optionen.includes(antwort)) {
            throw new Error("Die Antwort muss in den Optionen enthalten sein");
        }

        this.frage = frage;
        this.optionen = optionen;
        this.antwort = antwort;
    }
}

export class Quiz {
    constructor(fragenListe) {
        // Prüfe, dass genau ein Argument übergeben wurde
        if (arguments.length !== 1) {
            throw new Error("Constructor benötigt genau 1 Argument");
        }

        // Optional: Prüfe, dass das Argument ein Array ist
        if (!Array.isArray(fragenListe)) {
            throw new Error("Argument muss ein Array von POJOs sein");
        }

        // Erzeuge aus jedem POJO ein Frage-Objekt
        this.fragen = fragenListe.map(obj => {
            // Jedes Objekt muss die Keys "frage", "optionen" und "antwort" haben
            return new Frage(obj.frage, obj.optionen, obj.antwort);
        });
    }

    /**
     * Gibt alle Fragen zurück, deren Text mindestens minLength Zeichen hat.
     * @param {number} minLength
     * @returns {Frage[]}
     */
    getFragenByLength(minLength) {
        return this.fragen.filter(f => f.frage.length >= minLength);
    }

    /**
     * Gibt eine neue, nach Länge sortierte Liste aller Fragen zurück.
     * Aufsteigend nach frage.length.
     * @returns {Frage[]}
     */
    getFragenSortedByLength() {
        return [...this.fragen].sort((a, b) => a.frage.length - b.frage.length);
    }

    /**
     * Gibt alle Fragen zurück, in deren Optionen die übergebene Option vorkommt.
     * @param {string} option
     * @returns {Frage[]}
     */
    getFragenWithOption(option) {
        return this.fragen.filter(f => f.optionen.includes(option));
    }

    /**
     * Berechnet die durchschnittliche Anzahl an Optionen über alle Fragen.
     * @returns {number}
     */
    getAverageOptions() {
        if (this.fragen.length === 0) return 0;
        const gesamt = this.fragen.reduce((sum, f) => sum + f.optionen.length, 0);
        return gesamt / this.fragen.length;
    }

    /**
     * Gibt ein Array aller eindeutigen Optionen (String) zurück,
     * über alle Fragen hinweg, ohne Duplikate.
     * @returns {string[]}
     */
    getAllOptions() {
        const menge = new Set();
        this.fragen.forEach(f => {
            f.optionen.forEach(opt => menge.add(opt));
        });
        return Array.from(menge);
    }
}
