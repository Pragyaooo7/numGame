var N = 0;
var click = 0;
document.getElementById("New").onclick = function() {
  Newgame()
};

function Newgame() {
  click = 0;
  stopwatch.reset();
  for(let i=1;i<=20;i++){
    document.getElementById(i.toString()).innerHTML = i;
  }
  // document.getElementById("1").innerHTML = 1;
  // document.getElementById("2").innerHTML = 2;
  // document.getElementById("3").innerHTML = 3;
  // document.getElementById("4").innerHTML = 4;
  // document.getElementById("5").innerHTML = 5;
  // document.getElementById("6").innerHTML = 6;
  // document.getElementById("7").innerHTML = 7;
  // document.getElementById("8").innerHTML = 8;
  // document.getElementById("9").innerHTML = 9;
  // document.getElementById("10").innerHTML = 10;
  // document.getElementById("11").innerHTML = 11;
  // document.getElementById("12").innerHTML = 12;
  // document.getElementById("13").innerHTML = 13;
  // document.getElementById("14").innerHTML = 14;
  // document.getElementById("15").innerHTML = 15;
  // document.getElementById("16").innerHTML = 16;
  // document.getElementById("17").innerHTML = 17;
  // document.getElementById("18").innerHTML = 18;
  // document.getElementById("19").innerHTML = 19;
  // document.getElementById("20").innerHTML = 20;

  if (N > 0) {
    document.getElementById("tom").innerHTML = "<h2>your last score was </h2>";

  }
  st.yac.value = "pause";
  st.yac.removeEventListener("click", st.start);
  st.yac.addEventListener("click", st.stop);

}

var stopwatch = {
  /* [INIT] */
  etime: null, // holds HTML time display
  erst: null, // holds HTML reset button
  ego: null, // holds HTML start/stop button
  timer: null, // timer object
  now: 0, // current timer
  estop: null,
  init: function() {
    // Get HTML elements
    stopwatch.etime = document.getElementById("stopwatch");
    stopwatch.erst = document.getElementById("New");
    stopwatch.ego = document.getElementById("1");
    stopwatch.estop = document.getElementById("20");
    // Attach listeners
    stopwatch.erst.addEventListener("click", stopwatch.reset);

    stopwatch.ego.addEventListener("click", stopwatch.start);

    stopwatch.estop.addEventListener("click", stopwatch.stop);
  },

  /* [ACTIONS] */
  tick: function() {
    // tick() : update display if stopwatch running

    // Calculate hours, mins, seconds
    stopwatch.now++;
    var remain = stopwatch.now;
    var hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    var mins = Math.floor(remain / 60);
    remain -= mins * 60;
    var secs = remain;

    // Update the display timer
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }
    stopwatch.etime.innerHTML = hours + ":" + mins + ":" + secs;
  },

  start: function() {
    // start() : start the stopwatch


    stopwatch.timer = setInterval(stopwatch.tick, 1000);

    stopwatch.ego.removeEventListener("click", stopwatch.start);


  },

  stop: function() {
    // stop() : stop the stopwatch
    clearInterval(stopwatch.timer);
    stopwatch.timer = null;

  },

  reset: function() {
    // reset() : reset the stopwatch

    // Stop if running
    if (stopwatch.timer != null) {
      clearInterval(stopwatch.timer);
      stopwatch.timer = null;
      stopwatch.ego.addEventListener("click", stopwatch.start);
    }

    // Reset time
    stopwatch.now = -1;
    stopwatch.tick();

  }
};

window.addEventListener("load", stopwatch.init);




var st = {
  yac: null,
  init: function() {
    st.yac = document.getElementById("stp");
    st.yac.addEventListener("click", st.stop);

  },
  stop: function() {
    var num = document.getElementById("stopwatch").innerHTML;
    var string = num.toString();
    if (string !== "00:00:00") {
      stopwatch.stop();
      st.yac.value = "resume";
      st.yac.removeEventListener("click", st.stop);
      st.yac.addEventListener("click", st.start);
    }
  },
  start: function() {
    var num = document.getElementById("stopwatch").innerHTML;
    var string = num.toString();
    if (string !== "00:00:00") {
      stopwatch.start();
      st.yac.value = "pause";
      st.yac.removeEventListener("click", st.start);
      st.yac.addEventListener("click", st.stop);
    }
  }
};

window.addEventListener("load", st.init);

document.getElementById("pot").onclick = function() {
  quitpage()
};

function quitpage() {
  document.getElementById("tat").innerHTML = "<h1>THANK YOU!! for playing....</h1>" + "</br>" + "<h3>refresh page to restart the game</h3>";
  document.getElementById("tat").id = "tit";
}


// for (let i = 1; i <= 20; i++) {
//   document.getElementById(i.toString()).onclick = function() {
//     if (st.yac.value == "pause") {
//       if (document.getElementById(i.toString()).innerHTML == click + 1) {
//         stopwatch.start();
//         click = click + 1;
//         if (document.getElementById(i.toString()).innerHTML == i) {
//           document.getElementById(i.toString()).innerHTML = i + 20;
//         } else {
//           if (i == 20) {
//             stopwatch.stop();
//             document.getElementById("20").innerHTML = 0;
//             var num = document.getElementById("stopwatch").innerHTML;
//             var string = num.toString();
//             topscores.push(string);
//
//             document.getElementById("mat").innerHTML = document.getElementById("stopwatch").innerHTML + "<h2> time</h2>";
//             document.getElementById("tom").innerHTML = "<h2>your current score is </h2>"
//             N = N + 1;
//           } else {
//             document.getElementById(i.toString()).innerHTML = 0;
//           }
//         }
//       } else {
//         alert("wrong click");
//       }
//     }
//   }
// }

document.getElementById("1").onclick = function() {
  myFunction1()
};
var i=1;
function myFunction1() {
  if (st.yac.value == "pause") {
    if (document.getElementById(i.toString()).innerHTML == click + 1) {
      stopwatch.start();
      click = click + 1;
      if (document.getElementById(i.toString()).innerHTML == i) {
        document.getElementById(i.toString()).innerHTML = 20+i;
      } else {
        document.getElementById(i.toString()).innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}



document.getElementById("2").onclick = function() {
  myFunction2()
};

function myFunction2() {
  if (st.yac.value == "pause") {
    if (document.getElementById("2").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("2").innerHTML == 02) {
        document.getElementById("2").innerHTML = 22;
      } else {
        document.getElementById("2").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}


document.getElementById("3").onclick = function() {
  myFunction3()
};

function myFunction3() {
  if (st.yac.value == "pause") {
    if (document.getElementById("3").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("3").innerHTML == 03) {
        document.getElementById("3").innerHTML = 23;
      } else {
        document.getElementById("3").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}

document.getElementById("4").onclick = function() {
  myFunction4()
};

function myFunction4() {
  if (st.yac.value == "pause") {
    if (document.getElementById("4").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("4").innerHTML == 04) {
        document.getElementById("4").innerHTML = 24;
      } else {
        document.getElementById("4").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}


document.getElementById("5").onclick = function() {
  myFunction5()
};

function myFunction5() {
  if (st.yac.value == "pause") {
    if (document.getElementById("5").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("5").innerHTML == 05) {
        document.getElementById("5").innerHTML = 25;
      } else {
        document.getElementById("5").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}

document.getElementById("6").onclick = function() {
  myFunction6()
};

function myFunction6() {
  if (st.yac.value == "pause") {
    if (document.getElementById("6").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("6").innerHTML == 06) {
        document.getElementById("6").innerHTML = 26;
      } else {
        document.getElementById("6").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}

document.getElementById("7").onclick = function() {
  myFunction7()
};

function myFunction7() {
  if (st.yac.value == "pause") {
    if (document.getElementById("7").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("7").innerHTML == 07) {
        document.getElementById("7").innerHTML = 27;
      } else {
        document.getElementById("7").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}

document.getElementById("8").onclick = function() {
  myFunction8()
};

function myFunction8() {
  if (st.yac.value == "pause") {
    if (document.getElementById("8").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("8").innerHTML == 08) {
        document.getElementById("8").innerHTML = 28;
      } else {
        document.getElementById("8").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}



document.getElementById("9").onclick = function() {
  myFunction9()
};

function myFunction9() {
  if (st.yac.value == "pause") {
    if (document.getElementById("9").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("9").innerHTML == 09) {
        document.getElementById("9").innerHTML = 29;
      } else {
        document.getElementById("9").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}
document.getElementById("10").onclick = function() {
  myFunction10()
};

function myFunction10() {
  if (st.yac.value == "pause") {
    if (document.getElementById("10").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("10").innerHTML == 10) {
        document.getElementById("10").innerHTML = 30;
      } else {
        document.getElementById("10").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}
document.getElementById("11").onclick = function() {
  myFunction11()
};

function myFunction11() {
  if (st.yac.value == "pause") {
    if (document.getElementById("11").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("11").innerHTML == 11) {
        document.getElementById("11").innerHTML = 31;
      } else {
        document.getElementById("11").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}
document.getElementById("12").onclick = function() {
  myFunction12()
};

function myFunction12() {
  if (st.yac.value == "pause") {
    if (document.getElementById("12").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("12").innerHTML == 12) {
        document.getElementById("12").innerHTML = 32;
      } else {
        document.getElementById("12").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}
document.getElementById("13").onclick = function() {
  myFunction13()
};

function myFunction13() {
  if (st.yac.value == "pause") {
    if (document.getElementById("13").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("13").innerHTML == 13) {
        document.getElementById("13").innerHTML = 33;
      } else {
        document.getElementById("13").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}
document.getElementById("14").onclick = function() {
  myFunction14()
};

function myFunction14() {
  if (st.yac.value == "pause") {
    if (document.getElementById("14").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("14").innerHTML == 14) {
        document.getElementById("14").innerHTML = 34;
      } else {
        document.getElementById("14").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}
document.getElementById("15").onclick = function() {
  myFunction15()
};

function myFunction15() {
  if (st.yac.value == "pause") {
    if (document.getElementById("15").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("15").innerHTML == 15) {
        document.getElementById("15").innerHTML = 35;
      } else {
        document.getElementById("15").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}
document.getElementById("16").onclick = function() {
  myFunction16()
};

function myFunction16() {
  if (st.yac.value == "pause") {
    if (document.getElementById("16").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("16").innerHTML == 16) {
        document.getElementById("16").innerHTML = 36;
      } else {
        document.getElementById("16").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}
document.getElementById("17").onclick = function() {
  myFunction17()
};

function myFunction17() {
  if (st.yac.value == "pause") {
    if (document.getElementById("17").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("17").innerHTML == 17) {
        document.getElementById("17").innerHTML = 37;
      } else {
        document.getElementById("17").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}
document.getElementById("18").onclick = function() {
  myFunction18()
};

function myFunction18() {
  if (st.yac.value == "pause") {
    if (document.getElementById("18").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("18").innerHTML == 18) {
        document.getElementById("18").innerHTML = 38;
      } else {
        document.getElementById("18").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}
document.getElementById("19").onclick = function() {
  myFunction19()
};

function myFunction19() {
  if (st.yac.value == "pause") {
    if (document.getElementById("19").innerHTML == click + 1) {
      click = click + 1;
      if (document.getElementById("19").innerHTML == 19) {
        document.getElementById("19").innerHTML = 39;
      } else {
        document.getElementById("19").innerHTML = 0
      }
    } else {
      alert("wrong click");
    }
  }
}

document.getElementById("20").onclick = function() {
  myFunction20()
};

function myFunction20() {
  if (st.yac.value == "pause") {
    if (document.getElementById("20").innerHTML == click + 1) {

      click = click + 1;
      if (document.getElementById("20").innerHTML == 20) {
        document.getElementById("20").innerHTML = 40;
      } else {
        stopwatch.stop();
        document.getElementById("20").innerHTML = 0;
        var num = document.getElementById("stopwatch").innerHTML;
        var string = num.toString();
        topscores.push(string);

        document.getElementById("mat").innerHTML = document.getElementById("stopwatch").innerHTML + "<h2> time</h2>";
        document.getElementById("tom").innerHTML = "<h2>your current score is </h2>"
        N = N + 1;
      }
    } else {
      alert("wrong click");
    }
  }
}

var topscores = [];


function myFunction() {
  topscores.sort();
  var text, fLen, i;
  fLen = topscores.length;

  text = "<ul>";
  for (i = 0; i < fLen; i++) {
    text += "<li>" + topscores[i] + "</li>";
  }
  text += "</ul>";
  document.getElementById("demo").innerHTML = "<h3>best scores in ascending order:<h3>" + topscores;
}