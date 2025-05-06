
// here is declare the variable
let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let laps = document.getElementById("laps");
let timer = null;
 
// timer

function updateTime() {
seconds++;
if (seconds === 60) {
seconds = 0;
minutes++;
if (minutes === 60) {
minutes = 0;
hours++;
}
}

let h = hours < 10 ? "0" + hours : hours;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;

display.innerText = `${h}:${m}:${s}`;
}


function clickPlay(){
    var getPush=document.getElementById("push");
    var msg=document.getElementById("msg")
    msg.style.display="block";
    msg.innerHTML="Your stopwatch start";
    msg.style.color="green"
    getPush.style.display="block";

    // here timmer

    if (timer !== null) return;  // agar timer start ho to use stop na kre sidha use bahar kar de function se

    timer = setInterval(updateTime, 1000);

}
function clickPush(){
    var getPush=document.getElementById("push");
    var getPlay=document.getElementById("play");
    var msg=document.getElementById("msg")
   
    msg.innerHTML="Your stopwatch stop";
    msg.style.color="red"
 


    // here stop
    clearInterval(timer);
     timer = null;

}
function clickReset(){
           var getReset=document.getElementById("reset");
           var msg=document.getElementById("msg");
            
           msg.innerHTML="Your stopwatch Reset";
           msg.style.color="blue";


        stop();
        [seconds, minutes, hours] = [0, 0, 0];
        display.innerText = "00:00:00";
}


    function lap() {
        document.getElementById("list-container").style.display="block";
    let li = document.createElement("li");
    li.innerText = display.innerText;
    li.style.textAlign="center";
    
    
    laps.appendChild(li);
    msg.innerHTML="Your stopwatch lapping";
    
    }
