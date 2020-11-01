
const name='hello'
let hh=20

console.log(typeof(name))
console.log(typeof(hh))

//template concatination using ``

document.write(`this is concatination ${name} and age${hh}`)

// strings
const s = 'this is a test string'
    
console.log(s.length)
console.log(s.substring(0,4))
console.log(s.substring(0,4).toUpperCase)
console.log(s.split(' '))

//arrays

const arr = new Array('1','2')
const arr1 = ['1','2',3,true,null]
console.log(arr)
console.log(arr1)

arr1.push('3')

console.log(arr1)
arr1.unshift('first')
console.log(arr1.indexOf(null))

console.log(arr1)
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}

// jsons 

const person = {
    firstname:'dheerj',
    lastname:'kondakindi',
    age:10,
    hobbies:['hhh','dddd'],
    address:{
        city:'ngkl',
        pincode:'509999'
    }
}

console.log(person)
console.log(person.firstname)
console.log(person.hobbies[1])
console.log(person.address.city)

var {firstname,lastname,address:{city,pincode}}=person
person.email = 'dd@gmail.com'
console.log(firstname)
console.log(pincode)

const jn = JSON.stringify(person)
console.log(jn)

//FOR

for(let i of arr1){
    console.log(i) 
}
//for loop using forEach

arr1.forEach(function(i){
    console.log(`printing using forEach ${i}`)
})

const json = [
    {
        id:1,
        name:'dheeraj',
        password:'hhhcccbbdh'
    },
    {
        id:2,
        name:'dhej',
        password:'hccccchhh'
    },
    {
        id:3,
        name:'eraj',
        password:'hhhhdd'
    },
    {
        id:4,
        name:'eraj',
        password:'hccchhh'
    },
]

// map

const jsn = json.map(function(i){
    return i.name
})

console.log(`printing using map ${jsn}`)

//filterz

const jsnmap = json.filter(function(t){
    return t.id == 1
}).map(function(j){
    return j.name
})

console.log(`printing filter ${jsnmap}`)

// ?(if) :(else)

var x = 12

const color = x >10 ?'red':'blue'//if x>10 color = red else blue
const colr = x >13 ?'red':'blue'//if x>10 color = red else blue
const cor = x >13 ?x=15:x=12//if x>10 color = red else blue
console.log(`printing using ? and : ${color}`)
console.log(`printing using ? and : ${cor}`)

// es6 replacement for function 

function addNum(num1,num2){
    return num1 + num2
}

addNu = (num1,num2) => num1+num2

console.log(addNu(1,66))

// using this
function User(firstnam,dob,lastname){
    this.firstnam = firstnam;
    this.dob =new Date(dob);
    this.lastname = lastname;
    this.fullname = function(){
        return `${this.firstnam}  ${this.lastname}`;
    }
}

user1 =new User('dheeraj','12-05-2001','kondakindi');

console.log(user1.fullname())

// using prototypes

function student(firstnam,dob,lastname){
    this.firstnam = firstnam;
    this.dob =new Date(dob);
    this.lastname = lastname;
}

student.prototype.fullname = function(){
    return `${this.firstnam}  ${this.lastname}`;
}

user1 =new student('dheeraj','12-05-2001','kondakindi');

console.log(user1.fullname())

//Classes

class Student{
    constructor(firstnam,dob,lastname){
        this.firstnam = firstnam;
        this.dob =new Date(dob);
        this.lastname = lastname;
    }
    fullname(){
        return `${this.firstnam}  ${this.lastname}`;
    }
}

user =new Student('dheeraj','12-05-2001','kondakindi');

console.log(user.fullname())
