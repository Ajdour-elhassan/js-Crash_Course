// Arrays ; variable that holds multiples Values!

const numbers = new Array(1,2,3,4,5);
const fruit = ['apple' , 'orange' , 'pears'];

// print each Array
console.log(numbers);
console.log(fruit);

// display certain data
console.log(fruit[1]);

// adda data to array
fruit[3] = 'banana';
console.log(fruit);

// add push to Array at The End
fruit.push('mango');
console.log(fruit);


// add push to Array at The Beginning
fruit.unshift('graps');
console.log(fruit);


// delete latest item(push)
fruit.pop();
console.log(fruit);

// Check Array
console.log(Array.isArray(fruit)); 

// set the index of Data inside an Array
console.log(fruit.indexOf('pears'));