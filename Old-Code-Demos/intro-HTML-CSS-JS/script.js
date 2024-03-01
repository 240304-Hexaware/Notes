//data types in JS
a = 5;//number includes negative and positive whole numbers as well as decimals, a floating data type
b = '5';//strings and chars, chars are just a string of length 1
c = 'c';
d = 2.2;//decimal value, would be a float or double in Java, in JS all numbers are floats, and typeof number
e = "this is a long string"
f = [1,2,3,4,5]//arrays in JS, not fixed in length and not contiguous in memory
g = {};//this is an empty object with no properties, classes not required to build objects in JS
h = false;//boolean false
i = {
    a: 1,
    b: 2,
    c: {
        a: "1",
        b:[
            {},{},{},{}
        ]
    }
}//this is i, an more complex object than g above, containing nested properties with values which can be more objects

//use typeof to see what the type of data is. Remember, in JS variables don't have assigned types, but the values themselves do
console.log(
    typeof(a), 
    typeof(b), 
    typeof(c), 
    typeof(d), 
    typeof(e), 
    typeof(f), 
    typeof(g),
    typeof(h),
)

console.log(typeof(a) === typeof(""));
console.log(i);

//while we can't really view the value of a symbol we can tell they are unique and can be tested for equality.
//symbols are sort of like UUIDs, they gurtantee uniqueness each time one is initialized
const symbol1 = Symbol("foo");
const symbol2 = Symbol("foo");

console.log("symbol: ", symbol1 == symbol2)

console.log((10/0)*-1)//negative infinity is typeof number
nan1 = "dsklfjng"/"2dfgs"
nan2 = "dsklfjng"/"2dfgs"

console.log("nan equal?", nan1 == nan2)//NaN cannot be tested for equality! It is a valueless number


person = new Object(); //equivalent to person = {}
console.log(person.firstName); // returns undefined
person.firstName = "kyle"
if(person.hasOwnProperty("firstName")){
           console.log("has property")
} else {
    console.log("lacks property")
}
console.log(person.firstName);//we see that if we assign a value to an object property which doesn't exist, the property is added to the object



//Truthy Falsy - with type coercion some values will evaluate to true and some to false, these are truthy and falsey values
/*
These are the falsey values, every other value is truthy and would evaluate to boolean true.
Obviously boolean false is false.
Any empty string will be evaluated to false.
Any undefined variable will be equal to false.
Any null variable will be equal to false.
Any numerical expression with result in NaN (not a number) will be equal to false.
Any numerical expression with result in zero will be equal to false.
*/

if(!false) {//note the ! reversing the logic here, this says if the predicate is true, then the tested value is falsey.
    console.log("false is falsey")
}

if(!"") {
    console.log("empty string is falsey")
}
let noValue;
if(!noValue) {
    console.log("undefined is falsey")
}

if(!null) {
    console.log("null is falsey")
}
let nan = "sdf"/"sdf"
console.log(nan)
if(!nan) {
    console.log("NaN is falsey")
}

if(!0) {
    console.log("0 is falsey")
}

if(null == null) {
    console.log("null equals null")
}

if(1){
    console.log("1 is truthy")
}
if(-1){
    console.log("-1 is truthy")
}

if({}) {
    console.log("empty object is truthy")
}

if([]) {
    console.log("empty array is truthy")
}
