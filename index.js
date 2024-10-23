const endDate=new Date("17 oct 2024 14:57:00").getTime();
const startDate=new Date().getTime();


let x= setInterval(function updateTimer(){
   const now =new Date().getTime();
const distanceCovered=now - startDate;
const distancePending=endDate - now;

// calculate days,hr,min,sec
// 1 day=24*60*60*1000
//1 hr=60*60*1000
//1min=60*1000
//1se=1000

const days=Math.floor(distancePending/(24*60*60*1000));
const hurs=Math.floor((distancePending%(24*60*60*1000)/(60*60*1000)));
const mins=Math.floor((distancePending%(60*60*1000)/(60*1000)));
const secs=Math.floor((distancePending%(60*1000)/(1000)));

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hurs;
document.getElementById("min").innerHTML=mins;
document.getElementById("sec").innerHTML=secs;

//calculate width percentage for progress bar
const totalDistance=endDate-startDate;

const percentageDistance=(distanceCovered/totalDistance)*100;

//set width for progress bar 

document.getElementById("progress-bar").style.width=percentageDistance + "%";

if(distancePending < 0){
   clearInterval(x);
   document.getElementById("countdown").innerHTML="EXPIRE";
   document.getElementById("progress-bar").style.width="100%";
}





},1000); 