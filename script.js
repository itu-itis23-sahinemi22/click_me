var i;
var score;
var hp;
function eventListener(event){
    var boxDiv = document.getElementById("myBox");
    var object = document.getElementById("object");
    var isClickImg = object.contains(event.target);
    if(isClickImg == true){
        var x = Math.floor(Math.random() * (boxDiv.offsetWidth - object.width));
        var y = Math.floor(Math.random() * (boxDiv.offsetHeight - object.height));
        object.style.position = "absolute";
        object.style.left = x + "px";
        object.style.top = y + "px";
        score += 1;
        document.getElementById("score").textContent = "Score: "+score
    }
    else{
        var x = Math.floor(Math.random() * (boxDiv.offsetWidth - object.width));
        var y = Math.floor(Math.random() * (boxDiv.offsetHeight - object.height));
        object.style.position = "absolute";
        object.style.left = x + "px";
        object.style.top = y + "px";
        hp = hp - 1;
        i += 1;
        document.getElementById("h"+i).style.backgroundColor = "grey";
  
    }
    if(hp==0){
        setTimeout(endGame,10);
    }
}
function startGame(){
    var count = 61;
    const timer = setInterval(function(){
        count -=1;
        seconds = count%60;
        minutes = (count - seconds)/60;
        if(hp == 0){
            alert("You got "+score+" points. Amazing!");
            clearInterval(timer);
        }
        if(count == 0){
            alert("Time is up! You got "+score+" points.");
            clearInterval(timer);
            endGame();
            
        }
        if(seconds.toString().length==2 & hp != 0){
            document.getElementById("time").textContent = "0"+ Math.floor(minutes) +"."+seconds  
        }
        else if(seconds.toString().length==1 & hp != 0){
            document.getElementById("time").textContent = "0"+ Math.floor(minutes) +".0"+seconds
        }
        
    }, 1000);
    i = -1;
    score = 0;
    hp = 4;
    var object = document.createElement("img")
    object.src = "photo.jpeg";
    object.alt = "photo"
    var boxDiv = document.getElementById("myBox")
    boxDiv.appendChild(object);
    var randomLeft = Math.floor(Math.random() * (boxDiv.offsetWidth - object.width));
    var randomTop = Math.floor(Math.random() * (boxDiv.offsetHeight - object.height));
    object.id = "object";
    object.style.position = "absolute";
    object.style.left = randomLeft + "px";
    object.style.top = randomTop + "px";
    document.addEventListener("click",eventListener)
}
function endGame(){
    document.getElementById("h1").style.backgroundColor = "palevioletred";
    document.getElementById("h2").style.backgroundColor = "palevioletred";
    document.getElementById("h3").style.backgroundColor = "palevioletred";
    const buton = document.querySelector("#button")
    buton.disabled = false;
    var boxDiv = document.getElementById("myBox");
    var object = document.getElementById("object");
    boxDiv.removeChild(object);
    document.getElementById("score").textContent = "Score: 0"
    document.removeEventListener("click",eventListener);
    document.getElementById("time").textContent = "00.00"
}
document.addEventListener("DOMContentLoaded", function() {
    const buton = document.querySelector("#button");

    buton.addEventListener("click",function(){
        buton.disabled = true;
        startGame();
    })
})

