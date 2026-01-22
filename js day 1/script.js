function sample(a){
    console.log(a,"sample");
}
sample(5)

function sample(){
    return "sample";

}
console.log(sample())

// arrow function
// it doesnot need return 

const sample=()=>"sample"
console.log(sample())

const sample=(a,b)=>a+b;
console.log(sample(5,10))

const sample=(a,b)=>{
    return a+b;
}
console.log(sample(5,10))

// callback function
// if we pass a callback function as an argument inside another function
function sample(callback){
    console.log("sample");
    callback();
}
function demo(){
    console.log("demo");

}
sample(demo);
