import fruits from "./foods";
import {choice, remove} from "./helpers";

let selectFruit = choice(fruits);
console.log(`I would like one ${selectFruit}, please`);
console.log(`Here you go, ${selectFruit}`);
console.log('Delicious, may I have another?');
remove(fruits, selectFruit);
console.log(`I am sorry, we are all out. We have ${fruits} left.`)