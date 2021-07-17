const countDays = document.querySelector(".countDays")
const countHours = document.querySelector(".countHours")
const countMins = document.querySelector(".countMins")
const countSec = document.querySelector(".countSec")
const countDownDate = new Date("Aug 23, 2021 15:00:00").getTime();

setInterval(()=>{
    let day = Math.floor((countDownDate-Date.now())/1000/60/60/24)
    let hour = Math.floor((countDownDate-Date.now())/1000/60/60%24)
    let min = Math.floor((countDownDate-Date.now())/1000/60%60)
    let sec =Math.floor((countDownDate-Date.now())/1000%60)
    let dayText = ''
    let hourText = ''
    let minText = ''
    let secText = ''
    if (day%10===1 && day!==11){
        dayText='День'
    }else if (day%10===2 || day%10===3 || day%10===4 && day!==13 && day!==12 && day!==14){
        dayText='Дня'
    } else {
        dayText='Дней'
    }
    
    if (hour%10===1 && hour!==11){
        hourText='Час'
    }else if (hour%10===2 || hour%10===3 || hour%10===4 && hour!==13 && hour!==12 && hour!==14){
        hourText='Часа'
    } else {
        hourText='Часов'
    }
    
    if (min%10===1 && min!==11){
        minText='Минута'
    }else if (min%10===2 || min%10===3 || min%10===4 && min!==13 && min!==12 && min!==14){
        minText='Минуты'
    } else {
        minText='Минут'
    }
    
    if (sec%10===1 && sec!==11){
        secText='Секунда'
    }else if (sec%10===2 || sec%10===3 || sec%10===4 && sec!==13 && sec!==12 && sec!==14){
        secText='Секунды'
    } else {
        secText='Секунд'
    }
    
    
    
    
    if (day<10){
        countDays.textContent='0'+day+' '+dayText
    }else{
        countDays.textContent=day+' '+dayText
    }
    if (hour<10){
        countHours.textContent='0'+hour+' '
        +hourText
    }else{
        countHours.textContent=hour+' '+hourText
    }
    if (min<10){
        countMins.textContent='0'+min+' '+minText
    }else{
        countMins.textContent=min+' '+minText
    }
    if (sec<10){
        countSec.textContent='0'+sec+' '+secText
    }else{
        countSec.textContent=sec+' '+secText
    }
    
},1000)


var styleElem = document.head.appendChild(document.createElement("style"));
let i = 2
let str =''
setInterval(()=>{
    i++
    if(i === 4){i=1}
    if(i===3){str='3.jpg); background-position: center'}
    else if(i===2){str = '2.jpg)'}
    else if(i===1){str = '1.jpg)'}
    styleElem.innerHTML = `.slides::before {background-image: url(./${str}};}`;
},5000)