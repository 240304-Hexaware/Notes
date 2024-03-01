//this is above and outside the scope
var a = 'a';
{
    var b = 'b';
    //this is a block with block scope
    {
        var c = 'c';
        //this is nested within the block scope, and has its own block scope
    }
    var d = 'd';
}
var e = 'e';
//this is below and outside the scope

console.log(a, b, c, d, e)//var doesn't have block scoping.

function testVarScope() {//IIFE or self-invoking function
    var x = 5;
}

testVarScope();
//console.log(x)

while(true) {
    y = 5;//implicitly declared y as though we used the "var" keyword
    break;
}
console.log(y);


//hoisting
console.log(f)
// console.log(g)
// console.log(h)
{
    // console.log(g)
    // console.log(h)
    var f = 5;
    let g = 5;
    const h = 5;
}


function func1(){
    var animal1 = "Lion";   //exist in Lexical scope

    function func2(){    //Inner Function

        var animal2 = "Tiger"; //exist in function scope
        console.log(animal1);
        console.log(animal2);

    }
    //func2();
    //console.log(animal2); // results error - due to it exist in function scope
    return func2;
}

func2 = func1();

func2();

const Book = function(t, a) {
    let title = t; 
    let author = a; 
    
    return {
       summary : function() { 
         console.log(`${title} written by ${author}.`);
       } 
    }
 }
 const book1 = new Book('Hippie', 'Paulo Coelho');
 book1.summary(); // Returns Hippie written by Paulo Coelho.

 console.log(book1.title);


 //no overloading in JS, interpreter can't unambiguously tell which method we want to call
function ol(a, b) {
    console.log("overload 1")
}

function ol(a, b, c, d) {
    console.log(a, b, c, d)
}

ol(1, 2)


//
console.log(this);//What does "this" refer to in current context - the global object, the Window

"use strict";
function myFunction() {
    "use strict";
    return this;
}
console.log(myFunction())//also the Window object

