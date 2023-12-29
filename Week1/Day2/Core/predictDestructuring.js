//------------probleme 1
//this will not give us a random car but it will always give us the the first car 
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars 
// const [ ,otherRandomCar ] = cars

// console.log(randomCar)
// console.log(otherRandomCar)


//----------probleme 2
//name is not defined we changed with othername 
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //console.log(name); 
// console.log(otherName);


//-------------probleme3
//person doesnt have password that why we can't changed with hashedpassword
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// console.log(password); //12345
// console.log(hashedPassword);//undfined


//--------------probleme4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers; //2
// const [,,,second] = numbers;//5
// const [,,,,,,,,third] = numbers;//undefined
// console.log(first == second); //false
// console.log(first == third);//true 

// ---------probleme5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; 
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey);//[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);//1
console.log(willThisWork);//5









