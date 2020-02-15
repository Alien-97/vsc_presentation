// (1) For example: rename multiple variables. Select first occurrence + ctrl  + d
// (2) Other ways: multiple selectors, select first occurrence and then left click + alt for add more occurrences.

function Person(firstName, lastName) {
  this.FirstName = firstName || "unknown";
  this.LastName = lastName || "unknown";
}

Person.prototype.getFullName = function() {
  return this.FirstName + " " + this.LastName;
};

var psn = new Person("Juan", "Perez");

console.log(psn.getFullName()); //ll
