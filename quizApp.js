//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here

var User = function(name, email, pw, totalScore) {
    this.name = name;
    this.email = email;
    this.password = pw;
    this.totalScore = totalScore;    
};


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here

var Question = function(title, answersArray, rightAnswer, difficulty) {
    this.title = title;
    this.answers = answersArray;
    this.rightAnswer = rightAnswer;
    this.difficulty = difficulty;    
};

//Create a users Array which is going to hold all of our users.

  //code here

var users = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here

users.push(new User("Whitney", "Whitney@gmail.com", "whatsup", 20));
users.push(new User("Kyle", "kyle@gmail.com", "sogood", 13));
users.push(new User("Chloe", "chloe@gmail.com", "dogtreats", 4));

//Create a questions Array which is going to hold all of our questions

  //code here

var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here

questions.push(new Question("T/F: Inheritance is achieved in JavaScript through Prototypes?", ["T"], ["T"], "Intermediate"));
questions.push(new Question("T/F: JavaScript is just a scripting version of Java.", ["T"], ["T"], "Beginner"));
questions.push(new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", ["T"], ["T"], "Beginner"));


//Now push all of your instances of Question into the questions Array

  //code here

//--- SEE ABOVE ---

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here

for (var i = 0; i < users.length; i++) {
    for (var key in users[i]) {
        console.log("USER " + i + " " + key + ": " + users[i][key]);
    }
}
console.log(" ");
for (var i = 0; i < questions.length; i++) {
    for (var key in questions[i]) {
        console.log("QUESTION " + i + " " + key + ": " + questions[i][key]);
    }
}