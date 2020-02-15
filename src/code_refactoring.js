name = "Bob";

age = 20;
console.log("My name is ${name}.I am ${age} years old.");

for (i in name) {
  console.log(i);
}

function function_1() {
  //pass;
}

function function_add() {
  let ExtractedVariable = age + 10;

  return ExtractedVariable;
}

function_1();
function_add();
