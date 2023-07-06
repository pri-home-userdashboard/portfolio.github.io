let bars = document.getElementById("threeBars");
let menu = document.getElementsByClassName('menu')[0];

bars.onclick =()=>{
   menu.classList.toggle('collpse');
};


let c = document.querySelector('.content');

c.onclick =()=>{
let test = menu.getAttribute('class');
if(test == "menu collpse"){
    menu.classList.toggle('collpse')
}
    
}

let formValidation = document.getElementById('form');

formValidation.addEventListener('submit',(e)=>{


e.preventDefault()
})