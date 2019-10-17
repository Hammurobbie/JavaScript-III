/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window bound "this" uses are bound to the global or entire web page's prototype
* 2. Implicitly bound "this" elements are created using when dot notation is used to invoke a function
* 3. New Binding is used when creating a new constructor
* 4. explicit binding is using call, bind or apply functions to pass in data from another contructor
*
* write out a code example of each explanation above
*/

// Principle 1

function giveMeTheWindowDeets() {
    return console.log(this)};

console.log(giveMeTheWindowDeets());

// Principle 2

function ImplicitConstructor(info) {
    this.name = info.name;
    this.number = info.number;
}

console.log(ImplicitConstructor);

// Principle 3

const newConstructor = new ImplicitConstructor({
    name: 'New Guy',
    number: 100
})

console.log(newConstructor);

// Principle 4

function ExplicitEx (info2) {
    ImplicitConstructor.call(ExplicitEx, info2); 
}

console.log(ExplicitEx);