let name1 = 'Miche';
let lastName = 'Carrau';
let country = 'México';
let city = 'Chalco';
let age = 18;
isMarried = false;
let year = '2024';
let space = ' ';


let fullName = name1 + space + lastName + space + country + space + city + space + age + space + "Is Married?" + isMarried + space + year;

console.log(fullName);
console.log(typeof name1);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false

//9.8 is equalto 10?
console.log(parseInt('9.8') === 10); // false

//Values true
console.log(!!'Hello');     // true
console.log(!!42);          // true
console.log(!!{});          // true

//Values false
console.log(!!0);           // false
console.log(!!null);        // false
console.log(!!undefined);   // false

// Comparación
console.log(4 > 3);          // true
console.log(4 >= 3);         // true
console.log(4 < 3);          // false
console.log(4 <= 3);         // false
console.log(4 == 4);         // true
console.log(4 === 4);        // true
console.log(4 != 4);         // false
console.log(4 !== 4);        // false
console.log(4 != '4');       // false
console.log(4 == '4');       // true
console.log(4 === '4');      // false

let now = new Date();
console.log("Year:", now.getFullYear());           
console.log("Month:", now.getMonth() + 1);         
console.log("Date:", now.getDate());               
console.log("Day:", now.getDay());                 // 0 = Sunday
console.log("Hours:", now.getHours());             
console.log("Minutes:", now.getMinutes());        
console.log("Seconds since Jan 1, 1970:", Math.floor(now.getTime() / 1000)); 

//Area de un triángulo 
let base = prompt("Enter base of the triangle:");
let height = prompt("Enter height of the triangle:");
let area = 0.5 * parseFloat(base) * parseFloat(height);
console.log(`The area of the triangle is ${area}`);

//Perimetro triángulo
let sideA = prompt("Enter side a of the triangle:");
let sideB = prompt("Enter side b of the triangle:");
let sideC = prompt("Enter side c of the triangle:");
let perimeter = Number(sideA) + Number(sideB) + Number(sideC);
console.log(`The perimeter of the triangle is ${perimeter}`);
