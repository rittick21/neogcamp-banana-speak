// let userName=prompt("Give me your name");
// alert("script is working "+userName);
let transLatebtn=document.querySelector('#translate-btn');
let inputText=document.querySelector('#text-ip');
let outputDiv=document.querySelector('#output');
function textHandle(){
    outputDiv.innerText="Written input: "+inputText.value;
};
transLatebtn.addEventListener('click',textHandle);
// transLatebtn.style.backgroundColor="red";