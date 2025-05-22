export class Frage {
    constructor(frage, optionen, antwort) {
        if (arguments.length !== 3) {
            throw new Error('3 args');
        }
        if (typeof arguments[2] != "string") {
            throw new Error('3. arg must be string');
        }
        assert(Array.isArray(arguments[1]));
        assertEquals(typeof arguments[0], "string");
        assert(arguments[1].includes(arguments[2]));
        this.frage = arguments[0];
        this.optionen = optionen;
        this.antwort = antwort;
    }
}

export class Quiz {
    constructor(arg) {
        assertEquals(arguments.length, 1);
        this.fragen = arg.map(pojo => new Frage(
            pojo.frage,
            pojo.optionen,
            pojo.antwort,
        ));
    }
    getFragenbyLength(l) {
        return this.fragen.filter(frage => frage.frage.length >= l);
    }
    getFragenSortedByLength() {
        return this.fragen.sort((a, b) => a.frage.length - b.frage.length);
    }
    getFragenWitchOption(o) {
        return this.fragen.filter(frage => frage.optionen.includes(o));
    }
    getAverageOptions() {
        let count = 0;
        count = this.fragen.reduce((acc, frage) => {
            return acc + frage.optionen.length;
        }, 0);
    }
    getAllOptions() {
        const s = new Set();
        this.fragen.forEach(f => {
            f.optionen.forEach(o => {
                s.add(o);
            });
        });
        return Array.from(s);
    }
}