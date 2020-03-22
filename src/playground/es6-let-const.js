var nameVar = 'williams';
var nameVar = 'mike';
console.log('nameVar', nameVar);

let nameLet = 'Hen';
nameLet = 'julie';
console.log('nameLet', nameLet);

const nameConst = 'frank';
const ameConst = 'bube';
console.log('nameConst', nameConst);

//Block scoping 

var fullName = 'williams chuddy';

if (fullName) {
    let firstname = fullName.split(' ')[0];
    console.log(firstname);
}

console.log(firstname);