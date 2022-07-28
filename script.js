let [milliseconds, second, minute,] = [0,0,0];
// console.log(milliseconds);
let min = document.querySelector('.mn');
let sec = document.querySelector('.sc');
let mili = document.querySelector('.msc');
let counter = false;
let myMs = 0;
let mySc = 0;
let myMin = 0;




function start() {
    counter = true;
    startTimer();
}

function stop() {
    counter=false;
    // console.log('hi from stop');
    console.log(counter);

}
function reset() {
    counter=false;
    myMs = 0;
    mySc = 0;
    myMin = 0;
    min.innerHTML = myMin;
    sec.innerHTML = mySc;
    mili.innerHTML = myMs;
    // console.log('hi from reset');

}

function startTimer(){
    if (counter == true) {
        setInterval(setIntervalFunction, 10);
    }
}

function setIntervalFunction() {
    if (counter) {
        myMs ++;
        if (myMs==100) {
            myMs=0;
            mySc++;
            if (mySc==60) {
                mySc=0;
                myMin++;
            }
        }
    }
    
   
    
    let m = myMin < 10 ? '0' + myMin : myMin;
    let s = mySc < 10 ? '0' + mySc : mySc;
    let milsec = myMs < 10 ? '0' + myMs : myMs;
    
    mili.innerHTML = milsec;
    sec.innerHTML = s;
    min.innerHTML = m;
}




