class Person {
    constructor(name, gender, groesseM, gewichtKG) {
        this.name = name;
        this.gender = gender;
        this.groesseM = groesseM;
        this.gewichtKG = gewichtKG;
        if (this.gender != `m` && this.gender != `f`) {
            throw new Error('wrong gender')
        }


    }
    groesseCM() {
        return (this.groesseM * 100);

    }
    vorName() {
        return (this.name.split(" ")[0]);
    }
    nachName() {
        return (this.name.split(" ")[1]);
    }
    toString() {
        return `${this.vorName()} ${this.nachName()} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
    }

    getBmi() {
        return (this.gewichtKG / (this.groesseM * this.groesseM));
    }

    getGewichtType() {
        if (this.gender == `f` && this.getBmi() >= 19 && this.getBmi() <= 24) {
            return 'Normalgewicht'
        }
        if (this.gender == `m` && this.getBmi() >= 20 && this.getBmi() <= 25) {
            return 'Normalgewicht'
        }

        if (this.gender == `f` && this.getBmi() < 19) {
            return 'Untergewicht'
        }
        if (this.gender == `m` && this.getBmi() < 20) {
            return 'Untergewicht'
        }
        if (this.gender == `f` && this.getBmi() > 24) {
            return 'Übergewicht'
        }
        if (this.gender == `f` && this.getBmi() > 25) {
            return 'Übergewicht'
        }

    }
}
export { Person };

