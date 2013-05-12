/// <reference path="../../collections.ts" />
///////////////////////////////////Dictionary
console.log("------");
console.log("Dictionary demo");
var Person = (function () {
    function Person(name, yearOfBirth, city) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.city = city;
    }
    Person.prototype.toString = function () {
        return this.name + "-" + this.yearOfBirth;
    };
    return Person;
})();
var Car = (function () {
    function Car(company, type, year) {
        this.company = company;
        this.type = type;
        this.year = year;
    }
    Car.prototype.toString = function () {
        return collections.toString(this);
    };
    return Car;
})();
var dict = new collections.Dictionary();
dict.setValue(new Person("john", 1970, "melbourne"), new Car("honda", "city", 2002));
dict.setValue(new Person("gavin", 1984), new Car("ferrari", "F50", 2006));
console.log("Orig");
console.log(dict);
dict.setValue(new Person("john", 1970, "sydney"), new Car("honda", "accord", 2006));
dict.setValue(new Person("john", 1971), new Car("nissan", "micra", 2010));
console.log("Updated");
console.log(dict);
console.log("Single Item");
var person = new Person("john", 1970);
console.log("-Person:");
console.log(person);
var car = dict.getValue(person);
console.log("-Car:");
console.log(car.toString());
///////////////////////////////////Set
console.log("------");
console.log("Set Demo");
var x = new collections.Set();
x.add(123);
x.add(123);
var y = new collections.Set();
y.add(456);
x.union(y);
console.log(x.toString());
///////////////////////////////////Linked list
console.log("------");
console.log("Linked List demo");
var ll = new collections.LinkedList();
ll.add(123);
ll.add(456);
console.log(ll);
//@ sourceMappingURL=app.js.map