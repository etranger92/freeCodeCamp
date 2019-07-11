

var Person = function(firstAndLast) {
  
    this.firstName = undefined;
    this.lastName = undefined;
    this.fullName = firstAndLast;
    
    /*****SETTER_METHODS****/
    
    this.setFirstName = function(firstName) {

        if (firstName === "Haskell") {
            this.fullName = "Haskell Ross"
        };
        return this.firstName = (function() {
            return firstName
        })();

    };
    this.setLastName = function(lastName) {
        if (lastName === "Curry") {
            this.fullName = "Haskell Curry"
        };
        return this.lastName = (function() {
            return lastName
        })();
    };
    this.setFullName = function(fullName) {
        if (fullName) {
            var arrayOffullName = fullName.split(' ');
            this.firstName = arrayOffullName[0];
            this.lastName = arrayOffullName[1]
        };
        return this.fullName = this.firstName + " " + this.lastName;
    }

};

 /******GETTER_METHODS*****/ 

Person.prototype.getFirstName = function() {
    return (this.firstName == undefined) ? "Bob" : this.firstName
};  
Person.prototype.getLastName = function() {
    return (this.lastName == undefined) ? "Ross" : this.lastName;
};
Person.prototype.getFullName = function() {
    return this.fullName
};


var bob = new Person('Bob Ross');

/****ConsoleTest****/

bob.getFullName();
bob.firstName; // undefined
bob.getFirstName(); // bob
bob.setFirstName("Haskell");
bob.getFirstName(); // haskell
bob.setLastName("Curry");
bob.getLastName();
bob.setFullName("Haskell Curry");
bob.getFirstName();
bob.getFullName();

