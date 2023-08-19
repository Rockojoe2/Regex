const regex = /apple|banana/g;
const fruit = "I like apples.";

const matches = fruit.match(regex);
console.log("These are the matches " + matches); 

const fruits2 = "I like apples and bananas.";

const matches2 = fruits2.match(regex);
console.log("These are the matches " + matches2);