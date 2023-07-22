let bars = document.getElementsByClassName("fa-bars")[0];
let rightArrow = document.getElementsByClassName("fa-arrow-left")[0];
let images = document.getElementById("images");
let date1 = document.getElementById("date1");
let username1 = document.getElementById("userName");
let tearnings = document.getElementById("tearnings");
let searnings = document.getElementById("searnings");
let thearnings = document.getElementById("thearnings");
let ttearnings = document.getElementById("ttearnings");
let setBox = document.getElementsByClassName('setBox')[0];
let setData = document.getElementById("setData")




let slide =  bars.onclick = ()=>{
setBox.classList.toggle('toggle')

}
setData.onclick = ()=>{
    let date = document.getElementById("date").value;
    let username = document.getElementById("username").value;
    let today = document.getElementById("today").value;
    let sday = document.getElementById("sday").value;
    let thday = document.getElementById("thday").value;
    let tt = document.getElementById("tt").value;

    date1.innerHTML = `${date}`;
    username1.innerHTML = `${username}`;
    tearnings.innerHTML = `${today} /-`;
    searnings.innerHTML = `${sday} /-`
    thearnings.innerHTML = `${thday} /-`;
    ttearnings.innerHTML = `${tt} /-`;
    slide()
    

}

let img = document.querySelectorAll('.userPhoto');
let pics = document.querySelectorAll('.pic1');

// for(let i = 0 ; i < img.length; i++){
//     img[i].onclick = () =>{
//        for(let a =0; a < img.length; a++){
//           let name = pics.getAttribute('src');
//           console.log(name)
//        }
    

//     alert()
//     }
// }

// img.forEach((img)=>{
//     img.onclick = ()=>{
//         pics.forEach((pics,index)=>{
//            let picss =  pics.getAttribute('src');
//         //    images.setAttribute('src',picss) 
//         console.log(picss)
//         })
//         img.style.border = '2px solid green'
//     }
// })


img.forEach((img)=>{
    img.addEventListener('click',(e)=>{ 
        images.src =  e.target.src;
        console.log(e.target.innerHTML)
        img.style.border = '2px solid green'

       
    })
})


