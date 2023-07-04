function Student(name, gender, age) { //функция - конструктор
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.marks =[]; // добавить свойства пустой массив
};

Student.prototype.setSubject = function (subjectName) { //метод записывает в subject subjectName
		this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {  //создать метод массива оценок
		if (!this.hasOwnProperty('marks')) { // проверка существования оценок
			return 0;
		} else {
			return this.marks.push(...marks); // заполнить массив оценками
		}
};

Student.prototype.getAverage = function () {
	if (!this.hasOwnProperty('marks') || this.marks === []) { // проверка существования оценок
		return 0;
	} else {
		this.average = 0;
		return this.average = this.marks.reduce ((acc, item, array) => acc + item / array.length, 0); // расчетн среднего значения с помощью редьюс
	}
};

Student.prototype.exclude = function (reason) { // создать метод
		delete this.subject; // удалить свойство объект
		delete this.marks; // удалить свойство  оценки
		this.excluded = reason; //присвоение
};


/*
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
*/