/**
 * Created by HUANGYE2 on 7/12/2017.
 */

/**
 * Sample for prototype inheritance
 * @param age
 * @constructor
 */

function Animal(age) {
    this.age = age;
}
Animal.prototype.getAge = function() {
    console.log('Age: %s', this.age);
};
Animal.prototype.toString = function() {
    return "I am Animal: age " + this.age;
};

function Human(age, name) {
    Animal.call(this, age);
    this.name = name;
}
Human.prototype = Object.create(Animal.prototype);  // Link Animal as Human's parent
Human.prototype.getAgeAndName = function () {
    this.getAge();  // call parent's function
    console.log('Name: %s', this.name);
};

var tom = new Human(20, 'Tom');
tom.getAgeAndName();
tom.getAge();

console.log(tom.toString());
