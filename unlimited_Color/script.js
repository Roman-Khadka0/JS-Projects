const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let colorLit = '#';
    for(let i = 0; i < 6; i++){
       colorLit += hex[Math.floor(Math.random() * 16)]
    }
    return colorLit;
}
let intervalId;

const bgColor = function(){
    document.body.style.backgroundColor = randomColor()
}


const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(bgColor,1000)
    }
   
}
const stopChangingColor = function(){
clearInterval(intervalId)
intervalId = null;
}


document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);


