let hr= document.getElementById("hour");
let min= document.getElementById("min");
let sec= document.getElementById("sec");

function displayTime() {
   
    let date = new Date();

   /*console.log(date);*/

   // getting hours,mins,sec  from date

   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();

   let hrrotation = 30*hh + mm/2;
   let mrrotation = 6*mm;
   let srrotation = 6*ss;

   hr.style.transform = `rotate(${hrrotation}deg)`;
  
   min.style.transform = `rotate(${mrrotation}deg)`;
   sec.style.transform = `rotate(${srrotation}deg)`;




}
setInterval(displayTime,1000);






