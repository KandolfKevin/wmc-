// plf.js

export class Song {
    constructor(obj) {
        if (arguments.length !== 1 || typeof obj !== "object" || obj === null) {
            throw new Error("Song-Constructor erwartet genau ein Argument vom Typ Objekt");
        }

        const { title, duration } = obj;

        if (typeof title !== "string") {
            throw new Error("Song-Objekt muss eine Property ‚title‘ vom Typ string haben");
        }
        // duration muss eine Zahl sein
        if (typeof duration !== "number") {
            throw new Error("Song-Objekt muss eine Property ‚duration‘ vom Typ number haben");
        }

        this.title = title;
        this.duration = duration;
    }
}

export class Album {
    constructor(obj) {
        // Es muss genau ein Argument übergeben werden und dieses muss ein Objekt sein
        if (arguments.length !== 1 || typeof obj !== "object" || obj === null) {
            throw new Error("Album-Constructor erwartet genau ein Argument vom Typ Objekt");
        }

        const { genre, year, artist, album, songs } = obj;

        // genre, artist, album müssen Strings sein
        if (typeof genre !== "string") {
            throw new Error("Album-Objekt muss eine Property ‚genre‘ vom Typ string haben");
        }
        if (typeof artist !== "string") {
            throw new Error("Album-Objekt muss eine Property ‚artist‘ vom Typ string haben");
        }
        if (typeof album !== "string") {
            throw new Error("Album-Objekt muss eine Property ‚album‘ vom Typ string haben");
        }
        // year muss eine Zahl sein
        if (typeof year !== "number") {
            throw new Error("Album-Objekt muss eine Property ‚year‘ vom Typ number haben");
        }
        // songs muss ein nicht-leeres Array sein
        if (!Array.isArray(songs) || songs.length === 0) {
            throw new Error("Album-Objekt muss eine nicht-leere Property ‚songs‘ vom Typ Array enthalten");
        }
        // jedes Element in songs muss eine Instanz von Song sein
        if (!songs.every((s) => s instanceof Song)) {
            throw new Error("Album-Objekt ‚songs‘ muss ein Array von Song-Instanzen sein");
        }

        this.genre = genre;
        this.year = year;
        this.artist = artist;
        this.album = album;
        // wir übernehmen das Array direkt (bereits mit Song-Instanzen gefüllt)
        this.songs = songs;
    }

    /**
     * Gibt die Gesamtdauer aller Songs in diesem Album zurück.
     * @returns {number}
     */
    getTotalDuration() {
        // Summiere duration aller Song-Instanzen
        return this.songs.reduce((sum, song) => sum + song.duration, 0);
    }

    /**
     * Gibt die Song-Instanz mit der längsten Dauer zurück.
     * @returns {Song}
     */
    getLongestSong() {
        if (this.songs.length === 0) return null;
        return this.songs.reduce((maxSong, current) =>
            current.duration > maxSong.duration ? current : maxSong
        );
    }

    /**
     * Gibt die Song-Instanz mit der kürzesten Dauer zurück.
     * @returns {Song}
     */
    getShortestSong() {
        if (this.songs.length === 0) return null;
        return this.songs.reduce((minSong, current) =>
            current.duration < minSong.duration ? current : minSong
        );
    }

    /**
     * Gibt ein neues Array aller Song-Instanzen zurück, sortiert nach Dauer (aufsteigend).
     * @returns {Song[]}
     */
    getSongsSortedByDuration() {
        // Kopiere das Array, damit das Original nicht verändert wird
        return [...this.songs].sort((a, b) => a.duration - b.duration);
    }

    /**
     * Gibt alle Songs zurück, deren Titel (case-insensitive) den Such-Begriff enthält.
     * @param {string} searchString
     * @returns {Song[]}
     */
    getSongsByTitleCaseInsensitive(searchString) {
        if (typeof searchString !== "string") {
            throw new Error("Suchbegriff muss vom Typ string sein");
        }
        const needle = searchString.toLowerCase();
        return this.songs.filter((song) =>
            song.title.toLowerCase().includes(needle)
        );
    }
}

