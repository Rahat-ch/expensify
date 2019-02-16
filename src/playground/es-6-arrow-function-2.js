//arguments object is no longer bound with arrow funcitons

const add = (a,b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55,1));



//this keyword is no longer bound

//do not use arrow functions for methods - you can just drop the colon and the function like below - that shit is magic
//never need to write the word function ever again

const user = {
    name: "Rahat",
    cities: ["New York", "Sylhet (lol)", "Orlandoish"],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());


//challenge


const multiplier = {
    //array of numbers
    numbers: [1, 2, 3],
    //multiply by single number
    multiplyby: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyby);
    }
    //multiply - return a new array where the number has multiplied
}

console.log(multiplier.multiply(5)); // [1,2,3] 2 [2,4,6]
