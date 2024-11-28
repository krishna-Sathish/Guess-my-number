     const againBtn=document.getElementById("again-btn")
     const inputBtn=document.getElementById("input");
     const checkBtn=document.getElementById("check");
     const loseBtn=document.getElementById("lose-btn");
     const msgBtn=document.getElementById("msg-btn");
      const scoreBtn=document.querySelector(".score");
      const container=document.getElementById("container");
      const highScrBtn=document.getElementById("high-score");



  
    //  generate random number
        let scretNum=Math.floor(Math.random()*20+1);
        let score=20;
        let highScore=0;
  console.log(scretNum);
        
    // Event to check the hide number
     checkBtn.addEventListener('click',()=>{
          const guess=Number(inputBtn.value);
        if(guess){
          
               if(guess!=scretNum){
                     if(score>1){
                        score--;
                        scoreBtn.textContent=score;
                        msgBtn.textContent=guess>scretNum ? "Too High!" : "Too Low!"
                     }
                     else{
                        msgBtn.textContent="You Lose The Game";
                        scoreBtn.textContent=0;
                        container.style.backgroundColor="red"

                     }
             }
             else{
                msgBtn.textContent=scretNum;
                container.style.backgroundColor="Green";
                msgBtn.textContent="😎 You've Won The Game";
                highScrBtn.textContent=score;
             }
        
        }
       
        else{
           msgBtn.textContent="Plese First Enter the Number"
        }
          
     })
   //   reset the  game
    againBtn.addEventListener('click',()=>{
         score=20;
         scretNum=Math.floor(Math.random()*20+1);
         console.log(scretNum);
         scoreBtn.textContent=score;
         scoreBtn.textContent=score;

         inputBtn.value="";
         container.style.backgroundColor="black"
         msgBtn.textContent="Start Guess......"
    })
   
    