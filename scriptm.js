let [milliseconds, second, minute,] = [0,0,0];
// console.log(milliseconds);
let timeRef = document.querySelector('.stopwatch');
let int = null;

document.getElementById('start').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(timer, 10);
});
document.getElementById('stop').addEventListener('click', () => {
    clearInterval(int);
});
document.getElementById('reset').addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0];
    timeRef.innerHTML = '00 : 00 : 00';
});


function timer() {
    milliseconds+=10;
    if (milliseconds==1000) {
        milliseconds=0;
        second++;
        if (second==60) {
            second=0;
            minute++
            if (minute==60) {
                minute=0;
            }
        }
    }
}


// function start() {
//     if (int !== null) {
//         clearInterval(int);
//     }
//     int = setInterval(timer, 10);
//     console.log('hi from start');
// }
// function stop() {
//     clearInterval(int);
//     console.log('hi from stop');
// }
// function reset() {
//     clearInterval(int);
//     [milliseconds, second, minute] = [0,0,0];
//     time.innerHTML= '00 : 00 : 00';
//     console.log('hi from reset');
// }

let m = minute < 10 ? '0' + minute : minute;
let s = second < 10 ? "0" + second : second;
let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

timeRef.innerHTML= `${m} : ${s} : ${ms}`;




// let s1 = document.getElementById("start");
// s1.addEventListener('click', () => {
//     int = setInterval(timer, 10);
// })

// let s2 = document.getElementById('stop');
// s2.addEventListener('click', () => {
// clearInterval(int);
// })

// let r1 = document.getElementById('reset');
// r1.addEventListener('click', ()=> {
//     clearInterval(int);
//     [milliseconds, second, minute] = [0,0,0];
//     time.innerHTML= '00 :00 : 00';

// })