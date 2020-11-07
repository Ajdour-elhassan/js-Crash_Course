//Objects

// method 1 :
const Person = {
    name : 'hassan',
    age : 24 ,
    profession : 'web developer',
    languages : ['french' , 'English' , 'Deutsch'],
    address : {
        street : 'N72',
        home : 'Stage B',
        city : 'Sale',
    }
}

console.log(Person.name);
console.log(Person.age , Person.name);
console.log(Person.languages[1]);

// Add data to Object ;
Person.email = 'hassan@gmail.com' ;
console.log(Person.email);