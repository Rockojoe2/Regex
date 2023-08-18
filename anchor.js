const text = "JoeyLee";
const pattern = /^JoeyLee$/;

const matche = text.match(pattern);


if(pattern.test(text)){
    console.log("It's a match! " + matche);
}
else
{
    console.group("No match found :(");
}