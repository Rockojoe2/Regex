const text = "a aa aaa aaaa aaaaa";
//Set the /g at the end to get the whole string
const patternAsterisk = /a*/g;
const patternPlus = /a+/g;
const patternQuestionMark = /a?/g;
const patternNSpecific = /a{4}/;
const patternBetween = /a{2,4}/g;

const match1 = text.match(patternAsterisk);
const match2 = text.match(patternPlus);
const match3 = text.match(patternQuestionMark);
const match4 = text.match(patternNSpecific);
const match5 = text.match(patternBetween);

if (match1 !== null) {
    console.log("This is the quantifier with asterisk! " + match1.join(', '));
}
if (match2 !== null) {
    console.log("This is the quantifier with plus! " + match2.join(', '));
}
if (match3 !== null) {
    console.log("This is the quantifier with question mark! " + match3.join(', '));
}
if (match4 !== null) {
    console.log("This is the quantifier with a specific number! " + match4.join(', '));
}
if (match5 !== null) {
    console.log("This is the quantifier with a pattern between! " + match5.join(', '));
} else {
    console.log("No match found :(");
}