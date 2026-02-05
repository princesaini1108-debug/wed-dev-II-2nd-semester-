// const para=document.getElementsByTagName("p");
// for (let i=0;i<para.length;i++){
//     if(i%2===0){
//         para[i].style.color="blue";
//     }
//     else if (i%2!==0){
//         para[i].style.color="green";
//     }
// }


// const para=document.getElementsByTagName("p");
// console.log(para);
// para.forEach((para,index)=>{
//     if(index%2===0){
//         para.style.color="blue";
//     }
//     else{
//         para.style.color="green";
//     }
// })

// para[5].style.fontWeight="bold";
// para[para.length-1].style.fontWeight="bold";

const newpara =document.createElement("p");
newpara.textContent="this is a dynamically created paragraph";
console.log(newpara)
document.getElementById("content").append(newpara);

// const image=document.createElement("img");
// image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Fkrmuniversity.webp&w=1200&q=75")

// image.setAttribute("alt","K.R Mangalam");

// document.getElementById("gallery").append(image);

setInterval(() => {
    let date = new Date()
    console.log(date);

    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    document.getElementById("digi-clock").textContent = hour + ":" + min + ":" + second;

}, 1000)