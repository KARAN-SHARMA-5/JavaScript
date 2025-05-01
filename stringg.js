const name="karan"
const number=50
console.log(name + number + "value")
console.log(`helllo my name is ${name} and my age is ${number}`)

console.log(name[0])
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('t'));


const newname = name.substring(0,4)
console.log(newname);


const anotherString=name.slice(-8,4)
console.log(anotherString);



const newString="   hitesh  "
console.log(newString);
console.log(newString.trim());


const url ="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'));

