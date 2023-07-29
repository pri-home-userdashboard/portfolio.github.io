// let body = document.getElementsByClassName("body")[0];
// let loader = document.getElementsByClassName("loader")[0];
// body.onload = () =>{
//    loader.style.display = 'none';
// }

let bars = document.getElementsByClassName('fa-bars')[0];

bars.addEventListener("click",()=>{
   document.getElementsByClassName("menus")[0].classList.toggle('collapse')
   // bars.removeAttribute("class")
   let cla = bars.classList;
 
   
   if(cla == "fa-solid fa-bars displayNone"){
      bars.className ='fa-solid fa-xmark'
   }else{
      bars.className ='fa-solid fa-bars displayNone'
   }
   
  
})

// my skills level by graph
/* background-image: conic-gradient(red 250deg,transparent 0deg) ; */

// let level = document.getElementsByClassName("htmlSkill")[0];
let level = document.querySelectorAll('.htmlSkill');
let a = 90;
let c = 77;
let j = 88;
let jq = 86;
let p = 15;
let b = 0;
document.getElementsByClassName('percentage')[0].innerHTML = `${a}%`
document.getElementsByClassName('percentage')[1].innerHTML = `${c}%`
document.getElementsByClassName('percentage')[2].innerHTML = `${j}%`
document.getElementsByClassName('percentage')[3].innerHTML = `${jq}%`
document.getElementsByClassName('percentage')[4].innerHTML = `${p}%`

   skillsInPer = `conic-gradient(red ${a}%, transparent ${b}%)`;
  level[0].style.backgroundImage = skillsInPer;
  skillsInPer = `conic-gradient(blue ${c}%, transparent ${b}%)`;
  level[1].style.backgroundImage = skillsInPer;
  skillsInPer = `conic-gradient(yellow ${j}%, transparent ${b}%)`;
  level[2].style.backgroundImage = skillsInPer;
  skillsInPer = `conic-gradient(lightblue ${jq}%, transparent ${b}%)`;
  level[3].style.backgroundImage = skillsInPer;
  skillsInPer = `conic-gradient(purple ${p}%, transparent ${b}%)`;
  level[4].style.backgroundImage = skillsInPer;


  let topImage = document.getElementsByClassName('scrollToTop')[0];

  window.addEventListener("scroll",()=>{
   if(scrollY > 222){
      topImage.style.display = "block";
   }else{
      topImage.style.display = "none";
      topImage.onclick = ()=>{
      scroll(0,0)
      }
   }

   if(scrollY > 100){
   //  let hb = ;

      document.getElementsByClassName("header")[0].style.boxShadow = `0px 0px 10px #00000034`

   }else{
      document.getElementsByClassName("header")[0].style.boxShadow = "none"
   }
  })

