var number = document.getElementById("number")
var userInput = document.getElementById("userInput")
var result = document.getElementById("result")
var start_btn = document.getElementById("start_btn")

var runningNum = 0
var interval;

function start(){
    
if (userInput.value){
    interval = setInterval(function (){
    
     if (runningNum >= 1000){
    clearInterval(interval)
    runningNum=0
    number.innerText = runningNum
    result.innerText = " you are late "
    result.style.left = " 545px "
    result.style.color = " red "
     }else{
        runningNum++
        number.innerText = runningNum
     }
    },1)
    start_btn.disabled = true
}   else{
    alert("number to dalo")
}
}

function stop() {
    if (userInput.value == runningNum){
        result.innerText = "you win"
        result.style.color = "green"
        result.style.left = "590px"
    }else{
        result.innerText = "you loss"
        result.style.color = "Red"
        result.style.left = "590px"
    }
    clearInterval(interval)
    start_btn.disabled = false
    runningNum = 0
    number.innerText = 0

    }
    
