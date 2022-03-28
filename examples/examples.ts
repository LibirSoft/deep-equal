import {equal} from "../mod.ts";

enum KindOfAnimals {
    BIRD, DOG, CAT
}

interface Pet {
    name: string;
    kind: KindOfAnimals;
}

interface Human {
    name: string;
    age: number;
    money: number;
    pet: Pet;
}

const a: Human = {name: "josh", age: 23, money: 0, pet: {name: "Rocky", kind: KindOfAnimals.BIRD}};
const copyOfa: Human = {name: "josh", age: 23, money: 0, pet: {name: "Rocky", kind: KindOfAnimals.BIRD}};
const b: Human = {name: "joshua", age: 22, money: 1000,pet: {name: "Bob", kind: KindOfAnimals.CAT}};
// Object compare
console.log(equal(a, b));
console.log(equal(a,copyOfa));

const number = 5;
const number2 = 2;

console.log(equal(number, number2));

const nanObject1 = NaN;
const nanObject2 = NaN;

console.log(equal(nanObject1, nanObject2));