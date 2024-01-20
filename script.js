let h = document.getElementById("hours");
let m = document.getElementById("minutes");
let s = document.getElementById("seconds");
let mi = document.getElementById("milli");

let startTime;
let running = false;
let ho=0
let min=0
let se=0
let mil=0
function startStopwatch() {
    startTime = Date.now();
    running = true;

    function update() {
        if (running) {
            let elapsedMilliseconds = Date.now() - startTime;
           

            let hours = Math.floor(elapsedMilliseconds / 3600000);
            ho=hours;
            let minutes = Math.floor((elapsedMilliseconds % 3600000) / 60000);
            min=minutes
            let seconds = Math.floor((elapsedMilliseconds % 60000) / 1000);
            se=seconds
           

            let milliseconds = elapsedMilliseconds % 1000;
            mil=milliseconds

            h.innerHTML = hours;
            m.innerHTML = minutes;
            s.innerHTML = seconds;
            mi.innerHTML = milliseconds;

            requestAnimationFrame(update);
        }
    }

    update();
}
let lapss=0
function resetStopwatch() {
    running = false;
    h.innerHTML = "00";
    m.innerHTML = "00";
    s.innerHTML = "00";
    mi.innerHTML = '00';
    btn.textContent= `Laps`;
    lapss=0;
    total.innerHTML=' ';


}
let btn=document.getElementById("lap");
let ins=document.getElementById("total");
let tru=false;
function laps(){
if(running==true){

    lapss=lapss+1;
    btn.textContent= `Laps ${lapss}`;
    ins.insertAdjacentHTML('afterbegin',`<div class="nw" id="laps${lapss}"></div>`)
    let idd=`laps${lapss}`
    let intop=document.getElementById(idd);
   intop.innerHTML=`Lap ${lapss}= ${ho}:${min}:${se}:${mil}`;






}else{
    btn=disabled;
}
}


function stopWatch() {

    running = false;

}