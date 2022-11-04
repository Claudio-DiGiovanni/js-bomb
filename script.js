const eleButton = document.querySelector("button");
const eleTimer = document.querySelector(".timer")
const eleImg = document.querySelector(".terrorist")
const boom = document.querySelector(".boom")
let periodTimer = 10;


eleButton.addEventListener("click", function () {
    eleButton.classList.add("hidden");
    setInterval(timer, 1000)
    eleTimer.classList.remove("hidden");
    eleImg.classList.remove("hidden");
})

function timer () {
    if (periodTimer === 0) {
    eleTimer.classList.add("hidden");
    eleImg.classList.add("hidden");
    boom.classList.remove("hidden")
    } else {
        eleTimer.innerHTML = periodTimer
        periodTimer --;
    }
}