
let images=document.querySelector('img');

images.onclick=function () {
    let mySrc=images.getAttribute('src');
    if (mySrc=='images/horse.png'){

        images.setAttribute('src','images/Tup2.png')
    }
    else {
        images.setAttribute('src','images/horse.png')
    }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName=prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name',myName);
    myHeading.textContent='云飞扬牛逼：'+myName;

}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '云飞扬牛逼:' + storedName;
}

myButton.onclick=function () {
    setUserName();

}
