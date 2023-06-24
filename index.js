var li=document.querySelectorAll("button");
for(let i =0;i<(li.length);i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",myfunc);

    
    
}
function myfunc()
{
   var t = this.innerHTML;
   //anime(t);
   makesound(t);
   //
  
}

document.addEventListener("keypress",function(event){
    console.log(event.key);
    //anime(event.key);
    document.querySelector("."+event.key).style.color="white";
    makesound(event.key);
    //
    
    
    

})

function makesound(t){
    switch(t)
    {
     case "w":
         var g = new Audio("DRUM/sounds/tom-1.mp3");
         g.play();
         break;

            
    case "a":
         var g = new Audio("DRUM/sounds/tom-2.mp3");
         g.play();
         break;
    case "d":
         var g = new Audio("DRUM/sounds/tom-3.mp3");
         g.play();
         break;
    case "s":
         var g = new Audio("DRUM/sounds/tom-4.mp3");
         g.play();
         break;
    case "j":
        var g = new Audio("DRUM/sounds/tom-5.mp3");
        g.play();
        break;
    case "k":
        var g = new Audio("DRUM/sounds/tom-6.mp3");
        g.play();
        break;
                
    case "j":
        var g = new Audio("DRUM/sounds/tom-7.mp3");
        g.play();
        break;
    
    
 
    }

}


