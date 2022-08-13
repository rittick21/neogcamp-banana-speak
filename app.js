// let userName=prompt("Give me your name");
// alert("script is working "+userName);
let transLatebtn=document.querySelector('#translate-btn');
let inputText=document.querySelector('#text-ip');
let outputDiv=document.querySelector('#output');
let serverURL="https://api.funtranslations.com/translate/minion.json";

//to call the server as a function
function getTranslationURL(text){
    return serverURL+"?"+"text="+text;
}
//error handle function
function errorHandel(error){
    console.log("error occures",error);
    alert("some thing wrong with server: Try again after some time");
}

//to fetch the server and display the content
function textHandle(){
    const textIP=inputText.value;
    fetch(getTranslationURL(textIP))
    .then(response=>response.json())
    .then(json=>{
        let transLatedText=json.contents.translated;
        outputDiv.innerText=transLatedText;
        // console.log(json.contents.translated))
    }).catch(errorHandel)
};
transLatebtn.addEventListener('click',textHandle);
// transLatebtn.style.backgroundColor="red";