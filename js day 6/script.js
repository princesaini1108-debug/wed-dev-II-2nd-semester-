// let user={
//     fullname:"prince saini",
//     address:"palwal",
//     mobileno:3838883882,
//     favcolor:["blue","red","black"],
    
// }
// console.log(user)
// console.log(user.fullname,user.mobileno,user.favcolor[2])


let user={
    fullname:"prince saini",
    address:{
        city:"Palwal",
        state:"Haryana"
    },
    mobileno:3838883882,
    favcolor:["blue","red","black"],
    demo:function(){
        return "demo function"
    }
    
}
console.log(user)
// console.log(user.fullname,user.mobileno,user.favcolor[2])
console.log(user.demo(),user.address.city)
console.log(Object.entries(user))



// OBJECT METHOD
// 1)access all keys of an object
// Object.keys

const car={
    make:"mahinder",
    model:"thar"
}
// we cannot add a new key and value pair but we can change or update exisiting vaues

Object.seal(car);

// we cannot add a new key and value pair also cannot change or update existing values

Object.freeze(car);

car.model="XUV700";
car.color="black";
console.log(car);