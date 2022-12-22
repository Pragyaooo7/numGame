var cnt = 0;
let hour = 0;
let min = 0;
let sec = 0;
bool running=0;
let displaySeconds=00;
let displayMinutes=00;
let displayHours=0;
let req=1;
let status =0;
// document.getElementById("New").onclick = function() {
//   Newgame()
// };
//
// function Newgame() {
//   click = 0;
//   cnt = 0;
//   document.getElementById("stopwatch").innerHTML = "00:00:00";
//   for (let i = 1; i <= 20; i++) {
//     document.getElementById(i.toString()).innerHTML = i;
//   }
// }

function stopwatch(){
  sec++;

  if(sec/60===1){
    sec=0;
    min++;

    if(min/60===1){
      min=0;
      hour++;
    }
  }
  if(sec<10){
    displaySeconds = "0" + sec.toString();
  }
  else{
    displaySeconds = sec;
  }
  if(min<10){
    displayMinutes = "0" + min.toString();
  }
  else{
    displayMinutes = min;
  }
  if(hour<10){
    displayHours = "0" + hour.toString();
  }
  else{
    displayHours = hour;
  }
  document.getElementById("stopwatch").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

window.setInterval(stopwatch(),1);
// for (let i = 1; i <= 20; i++) {
//   document.getElementById(i.toString()).onclick = function() {
//     if(status===0){
//       status=1;
//     }
//     if(document.getElementById(i.toString()).innerHTML==req){
//       if(i<=20){
//         document.getElementById(i.toString()).innerHTML=i+20;
//       }
//       else{
//         document.getElementById(i.toString()).innerHTML=0;
//       }
//       req++;
//
//       if(req>40){
//         // stop the stopwatch and show the score
//       }
//     }
//     else{
//       alert("Wrong  Click");
//     }
//
//   }
// }
