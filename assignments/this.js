/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding: When a function which uses "this" inside of it is invoked,
 look at what is directly left of the dot and that is the implicit binding.
* 2. Explicit Binding: When a function explicitly uses .call, .apply or .bind to determine what the this keyword will reference.
* 3. New Binding: When a function is invoked with the "new" keyword, the "this" keyword inside that function is bound to the new object being constructed.
* 4. Window Binding: When you invoke a function with "this" in it, and it doesn't have anything it's
referencing to the left of the dot, then it will default to the window object and will be undefined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayAge(){
    console.log(this.age)
}
sayAge();

// Principle 2

// code example for Implicit Binding
let dog = {
    legs: 4,
    skin: "furry",
    noise: "bark",
    sayNoise: function (){
        console.log(this.noise)
    }
};
dog.sayNoise();

// Principle 3

// code example for New Binding
let Fruit = function(color, name, taste){
    this.color = color;
    this.name = name;
    this.taste = taste;
}
let apple = new Fruit('green', 'Green Crunch', 'Sweet and slightly tart');

// Principle 4

// code example for Explicit Binding

let greeting = function(){
    console.log(`Greetings ${this.name}!`);
}

let alien = {
    name: "Ronald"
}

greeting.call(alien);