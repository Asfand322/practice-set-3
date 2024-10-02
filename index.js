alert('hello')
let marks = {
    asfand: 90,
    noni: 30,
    haras: 44,
    amaan:56
}
for (let i=0;i<Object.keys(marks).lenth;i++) {
    document.write(" the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// result will be 
// the marks of asfand are 90
// the marks of noni are 30
// the marks of haras are 44
// the marks of amaan are 56

/// same situation in for in loop

for(let i in marks){
    console.log(" the marks of " + i + " are " + (marks)[i])
}

// result will be same

// while loop
let cn = 6
let n
while (n != cn){
    n = prompt("enter a number")
    console.log("try again")
}
console.log("you have entered a correct number")

// it will repeat the process until user enter a number 6

// question 4

const mean = (q,w,e,r)=> {
    return (q + w + e + r)
}

console.log(mean(1,4,6,9))

// result will be 20