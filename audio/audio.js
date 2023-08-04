
        let prev = document.getElementById("prev");
        let progress = document.getElementById("progress");
        let play = document.getElementById("play");
        let playIcons = document.getElementsByClassName("fa-play")[0];
        let mugicImage = document.getElementsByClassName("mugicImage")[0];
        let next = document.getElementById("next");
        let mugic = document.getElementById("mugic");
         let endTimeInMin = document.getElementById('min');


        let ctrl = true;

        play.addEventListener("click",()=>{
            if(ctrl){
                mugic.play();
                ctrl = false;
                playIcons.classList.replace('fa-play','fa-pause')
                mugicImage.classList.add("anim")
               
                
            }else{
                mugic.pause()
                playIcons.classList.replace('fa-pause','fa-play')
                mugicImage.classList.remove("anim")

                ctrl = true;
            }

        })

        
        mugic.onloadedmetadata = function(){
            progress.max = mugic.duration;
            progress.value = mugic.currentTime;

            


            if(mugic.duration < 60){
                document.getElementById("endTime").innerHTML = "0:" + mugic.duration.toFixed(0);
            }else{
                let tt =  (mugic.duration/60).toFixed(2);

                let t = tt.replace(".",":")
                console.log(t)
                document.getElementById("endTime").innerHTML = t ;
            }

   


            // tTime.inner = ( mugic.currentTime < 10)? `0${mugic.currentTime}` :  mugic.currentTime;

        }
       
       
       
                if(mugic.play()){
                 setInterval(()=>{
                 progress.value = mugic.currentTime;
                    
                // console.log(mugic.currentTime);
                // console.log((mugic.currentTime/60).toFixed(2))
                document.getElementById("startTime").innerHTML = (mugic.currentTime).toFixed(0)


        
          
            },1000);
        }

          

    //   console.log(status)


        // next.addEventListener("click",()=>{
        //     mugic.currentTime =  mugic.currentTime + 3;
        // })
        // prev.addEventListener("click",()=>{
        //     mugic.currentTime =  mugic.currentTime - 3;
        // })

        progress.addEventListener("change",()=>{
            mugic.play();
            mugic.currentTime = progress.value;
            playIcons.classList.replace('fa-play','fa-pause')
            mugicImage.classList.add("anim")
                ctrl = false;



    
        })


        let down = document.getElementById("down");
        let audioUi = document.getElementsByClassName('mugicUI')[0];
        let clickDis = document.querySelectorAll(".clickDis");
        let statusButton = true;
       down.addEventListener("click",()=>{
        audioUi.classList.toggle('heightDown')

        if(statusButton){
                for(let i = 0; i < clickDis.length; i++){
                clickDis[i].style.display = "none"
                statusButton = false;}
                document.getElementsByTagName('nav')[0].style.width = "50px"
                

     
       }else{
        for(let i = 0; i < clickDis.length; i++){
            clickDis[i].style.display = "flex"
            statusButton = true};
            document.getElementsByTagName('nav')[0].style.width = "100%"

       }


  


       });



      
  

 