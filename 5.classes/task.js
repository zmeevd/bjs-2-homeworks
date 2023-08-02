//Задача 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name; //название
		this.releaseDate = releaseDate; //Год выпуска
		this.pagesCount = pagesCount; //число страниц
		this._state = 100; //состояние
		this.type = null; // тип
	}

	//метод для восстановления книги
	fix() {
		this.state = this._state * 1.5;
		if (this._state > 100) {
			this._state = 100;
		}
	}

	//сетттер для установки состояния кники
	set state(value) { //если книга старая
		if (value < 0) {
			this._state = 0;
			return;
		};
		if (value > 100) { //книга новая
			this._state = 100;
			return;
		};
		this._state = value; //в обратном случае
	}

	//геттер для получения состояния
	get state() {
		return this._state;
	}
};

// Класс Магазин
class Magazine extends PrintEditionItem { //наследование
	constructor(name, releaseDate, pagesCount, type) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine"; // тип Магазин новый
	}
};

// Класс book
class Book extends PrintEditionItem { //наследование
	constructor(author, name, releaseDate, pagesCount, type) {
		super(name, releaseDate, pagesCount);
		this.type = 'book'; // тип book новый текст
		this.author = author;
	}
};

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, type) {
		super(author, name, releaseDate, pagesCount, type);
		this.type = "novel"; // тип новый текст
	}
};

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, type) {
		super(author, name, releaseDate, pagesCount, type);
		this.type = "fantastic"; // тип новый текст
	}
};

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, type) {
		super(author, name, releaseDate, pagesCount, type);
		this.type = "detective"; // тип новый, текмт
	}
};


// Задача 2. Библиотека

class Library {
	constructor(name) {
		this.name = name; // Название библиотеки
		this.books = []; // массив книг пустой
	};

	// Метод добавления книг
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	};

	// Поиск книг   
	findBookBy(type, value) {
		const result = this.books.find((item) => { //стрелочная функция с методом find
			return item[type] === value;
		})

		if (result === undefined) {
			return null;
		} else {
			return result;
		};
	};

	// Метод взятия и возвращения книг
	giveBookByName(name) {
		const bookIndex = this.books.findIndex((item) => {
			return item.name === name;
		});
		if (bookIndex < 0) {
			return null; // если книга не найдем вовзращает ноль
		}
		const book = this.books[bookIndex];
		this.books.splice(bookIndex, 1)
		return book;
	};
};