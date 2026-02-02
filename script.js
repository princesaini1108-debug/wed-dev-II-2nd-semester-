const profile1=document.getElementById("profile");
console.log(profile1)
profile1.style.backgroundColor="#f5f5f5";
profile1.style.textAlign="center";
profile1.style.padding="15px";

const important1=document.getElementsByClassName("important")
console.log("important1")
for(let i=0;i<important1.length;i++){
    important1[i].style.color="red";
    important1[i].style.fontSize="34px";

}
console.log(important1.length);
