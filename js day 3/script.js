// let fruit=["apple","banana","cherry"]
// let newlength=fruit.push("mango");
// console.log(newlength)

// let fruits=["apple","banana"];
// let removed=fruits.pop();
// console.log(removed);
// console.log(fruits)

// reverse the array using push and pop method.
// let arr2=[1,2,3,4,5]
// let newarr=[]
// while (newarr>0){
//     reverse.push(arr2.pop())
// }
// console.log(reverse);


// // remove the all negetive nummers from an array.

// let arr=[5,-3,16,-11,-7,8]
// arr3=[5,-3,16,-11,-7,8]
// let newarr=[]
// for(let i=0;i<arr3.length;i++){
//     if(arr3[i]>=0){
//         newarr.push(arr3[i]);

        
//     }
// }
// console.log(newarr);

let arr=[5,-3,16,-11,-7,8]
let res=[]
while(arr.length>0){
    let val=arr.shift();
    if (val>0){
        res.push(val);
    }
}
console.log(res);

// check if arramy is palindrome or not
