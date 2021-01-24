const obj = {
    name: "shaban",
    age: 24,
    jobless: true,
    marks: {
        english: 24,
        urdu: 17,
        maths: 100
    }
}

console.log(obj)

//destructuring
let { name , age , jobless , marks } = obj;
console.log(name, age, jobless, marks)

//practice on the nested obj
const {english, urdu, maths} = marks
console.log(english+urdu+maths)


//show that the destructured variable doesnt affect the actual obj
// name = "Dude"
// console.log("inside obj",obj.name)
// console.log("destructured",name)

//show that the obj doesnt affect the destructured variable
// obj.name = "Bro"
// console.log("inside obj",obj.name)
// console.log("destructured",name)
