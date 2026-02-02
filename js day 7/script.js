const heading =document.getElementById("myheading");
console.log(heading);

heading.style.color="tomato";
heading.style.backgroundColor="yellow";
heading.textContent="hello students";

const subheading=document.getElementsByClassName("sub-heading");
console.log(subheading);

for(let i=0;i<subheading.length;i++){
    subheading[i].style.color="cyan";
}

const content=document.querySelector("#content p");
console.log(content);
content.style.fontSize="40px";