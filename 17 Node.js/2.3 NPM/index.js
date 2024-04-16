import generateName from "sillyname"
import superheroes from "superheroes";

var sillyName = generateName();
var hero = superheroes.random();

console.log(`My name is ${sillyName}.`);
console.log(`My superhero is ${hero}.`);