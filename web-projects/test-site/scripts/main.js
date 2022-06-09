let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/picWithYishiRibo.jpg') {
        myImage.setAttribute('src',"images/picWithSimchaLeiner.jpeg");
    } else {
        myImage.setAttribute('src','images/picWithYishiRibo.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function getUserName(){
    let name = prompt('Please enter your name.');
    if(!name){
        getUserName();
    }else{
        myHeading.textContent = 'Hey, ' + name;
    }
}

function startUp() {
    let mySrc = myImage.getAttribute('src');
    let name = prompt('Enter "David" to see a picture of David with Yishi Ribo or "Me" to see a picture of yourself with Yishi Ribo');
    if(name === "David"){
        myImage.setAttribute('src','images/picWithYishiRibo.jpg');
    }else if((name === "ME") || (name === "me") || (name === "Me") || (name === "mE")){
        myImage.setAttribute('src','images/PassiveAgressivePicForWebSite.jpg');
    }else{
        startUp();
    }
}

getUserName();
startUp();

myButton.onclick = function() {
    setUserName();
}
