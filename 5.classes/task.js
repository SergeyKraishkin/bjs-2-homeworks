class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
        this.stateStatus = this.state;
    }
    set state(value) {
        this._state = value;
        if (value < 0) {
            this._state = 0;
        }
        if (value > 100) {
            this._state = 100;
        }
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'novel';
        this.author = author;
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'fantastic';
        this.author = author;
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'detective';
        this.author = author;
    }
}
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30)
            this.books.push(book);
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].hasOwnProperty(type) && this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        let returnitem;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                returnitem = this.books[i];
                this.books.splice(i, 1);
                return returnitem;
            }
        }
        return null;
    }
}