let stringA = "This is a string literal"
let stringB = 'This is also a string literal'
let stringC = `This is not quite the same, this is a template literal - ${2+2}`

let math = `2 + 2 = ${2+2}`

let array = [1,2,3,4,5]


function myFunc(...array) {
    sum = 0;
    for(let i in array) {
        sum += i;
    }
    console.log("sum: ", sum)
}

function myFunc2(a,b,c,d,e) {
    console.log("sum: ", a+b+c+d+e)
}


myFunc2(...array);