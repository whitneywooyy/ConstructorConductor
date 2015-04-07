//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here

  var Person = function(name, age) {
  	this.name = name;
  	this.age = age;
  };


//Now create three instances of Person with data you make up

  //code here

var homosapien1 = new Person("Whitney", 25);
var homosapien2 = new Person("Kyle", 26);
var homosapien3 = new Person("Chloe is not a person", 6);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

Person.prototype.sayName = function() {
	alert("Hey " + this.name);
};
homosapien3.sayName();