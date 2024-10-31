//&& - AND o Conjunción lógica

const check = 4 > 3 && 10 > 5 //True
const check1 = 4 > 3 && 10 < 5 // True && False --> False
const check2 = 4 < 3 && 10 < 5 //False && false --> False
// || - OR o Disyunción lógica

const check4 = 4 > 3 || 10 > 5 //True
const check5 = 4 > 3 || 10 < 5 //True
const check6 = 4 < 3 || 10 < 5 //False


// ! - NOT, el operador niega verdadero a falso y falso a verdadero 
let check7 = 4 > 3 // True
let check8 = !(4>3) //False
let insLigthOn = true
let isLigthOff = !insLigthOn
let isMarried = !false

//INCREMENT OPERATORS
//PRe-incremento

let count = 0
console.log(++count)
console.log(count) // 1

//Post incremento
let count1 = 0
console.log(count++)
console.log(count) //1

//Predecremento --
let count2 = 0
console.log(--count2)
console.log(count2)

//Post decremento 
let count3 = 0
console.log(count3--)
console.log(count3)


//Ternary operators
let firstCheck = false,
secondCheck = false,
access = firstCheck
? "Acceso Denegado"
:secondCheck
? "Acceso Denegado"
: "Acceso Permitido";
console.log(access)

let isRaining = true
isRaining
? console.log('You need a rain coat')
: console.log('No need for a rain coat');

isRaining = false
? console.log('You need a rain coat')
: console.log('No need for a rain coat');
