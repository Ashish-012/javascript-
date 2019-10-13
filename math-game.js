var play= false; 
var score;
var time;
var z;
var rightanswer;
document.getElementById("start-reset").onclick= function(){
    if(play==true)                        //If we are not playing
    {
        location.reload();    
    }
    else                                   //If we are playing
    {
        play=true;                         //this change th mode to playing 
        score=0;
        time=60;
        document.getElementById("score-value").innerHTML= score; 
        document.getElementById("time-counter").style.display= "block";
        document.getElementById("game-over").style.display="none";
        document.getElementById("start-reset").innerHTML="Reset Game";
        document.getElementById("count").innerHTML=time;
        startcounting();
        questions();
    }
} 
for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
        if(play==true)
        {
            if(this.innerHTML==z)
            {
                score++;
                document.getElementById("score-value").innerHTML=score;
                document.getElementById("wrong").style.display="none";
                document.getElementById("correct").style.display="block";
                setTimeout(function(){
                    document.getElementById("correct").style.display="none";
                },1000);
                questions();
            }
            else
            {
                score--;
                document.getElementById("correct").style.display="none";
                document.getElementById("wrong").style.display="block";
                setTimeout(function(){
                    document.getElementById("wrong").style.display="none";
                },1000);
                document.getElementById("score-value").innerHTML=score;
                questions();
            }
        }
    }
        
}
function startcounting(){
    count = setInterval(function() {
        time -= 1;
        document.getElementById("count").innerHTML=time;
        if(time==0){
            clearInterval(count);
            document.getElementById("game-over").style.display = "block";  
            document.getElementById("time-counter").style.display="none";
            document.getElementById("points").innerHTML= score;
            document.getElementById("correct").style.display="none";
            document.getElementById("wrong").style.display="none";
            play=false;     
            document.getElementById("start-reset").innerHTML="Start Game"
        }
    }, 1000);
}
function questions(){
    var x=Math.round(Math.random()*20);
    var y=Math.round(Math.random()*20);
     z = x*y;
     document.getElementById("game-box").innerHTML=x + "x" + y;
    rightanswer =1+ Math.round(Math.random()*3);
    document.getElementById("box"+rightanswer).innerHTML=z;
    var allchoices=[rightanswer];
    for(i=1;i<5;i++){
        if(i !=rightanswer)
        {
            var wronganswer;
            do{
                wronganswer= (Math.round(Math.random()*20))*(Math.round(Math.random()*20));
            }while(allchoices.indexOf(wronganswer)>-1);
            document.getElementById("box"+i).innerHTML=wronganswer;
                allchoices.push;
        }
    }
}