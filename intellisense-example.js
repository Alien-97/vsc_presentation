function Person(firstName, lastName, idCard) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";

    this.IdCard = idCard;
}

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName + " " + this.idCard;
    
}

var psn = new Person("Juan", "Perez", 1111);

console.log(psn.getFullName());

// Trying git