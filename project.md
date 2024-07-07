# project 1
## Code
``` javaScript 
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id==='black'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.tardet.id==='red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.tardet.id==='green'){
            body.style.backgroundColor = e.target.id;
        }
    })
})```



# Project 2
## code
```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const result = document.querySelector('#results')

   if (height==='' || height<0 || isNaN(height)) {
    result.innerHTML= "Enter valid height"
   }
   else if (weight==='' || weight<0 || isNaN(weight)) {
    result.innerHTML= "Enter valid weight"
   }
   else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    result.innerHTML =`<span>${bmi}</span>`
   }
})
```

# project 3
## code
```javascript

const clock = document.getElementById('clock')

setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
},1000)
```
