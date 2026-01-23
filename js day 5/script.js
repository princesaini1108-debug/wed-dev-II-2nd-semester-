let sentence="I am a comma separated sentence";
let words=sentence.split("a");
console.log(words);


let sentence1="I am a comma separated sentence";
let word2=sentence1.split(" ");
console.log(word2);

// find out the occurence of "r" in the given text

let str="tu meri me tera me tera tu meri"
let word=str.split("r")
let count=word.length-1
console.log(count);


// types of function

// 1.regular function

function demo(){
    console.log()
}
demo()

// 2. callback finction

function sample(callback){
    console.log("sample")
    callback()
}
function demo(){
    console.log("demo")
}
sample(demo)

// 3. Arrow function

const demo2=()=>"demo2";
console.log(demo2)

//  4. first class function

// 1. we can treat a variable as a function.
// 2. we can pmass afunction as an argument inside another function.
// 3. we can return a function from a function.

function test(){
    return function test2(){
        console.log("test2");
        return function test3(){
            console.log("test3")
        }
    }
}
// test()()()
let value = test()
let value2=value()
value2()

// 5. higher order function

// map, filter, reduce

// 6. anonmomous function: the function whhich does not have any name
// for example:
// 

//  7. self invoking functionm: to obtain data privacy and to call a function imediately after the function scope.

 let test5=(function(){
    return "sample5";
 })()
 console.log(test5)
