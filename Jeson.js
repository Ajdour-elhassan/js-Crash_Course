
const Todos = [
   {
     id : 1 ,
     task : 'get out with crash' ,
     isCompleted : false 
   },
   {
    id : 2 ,
    task : 'hang out',
    isCompleted : false
   },
];

//console.log(Todos[1].task);

// Convert Data to Jeson!
const TodoJeson = JSON.stringify(Todos);

console.log(TodoJeson);