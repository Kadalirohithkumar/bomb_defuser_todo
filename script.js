let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");
let countDown = 10;

let intervalId = setInterval(function() {
    countDown = countDown - 1;
    timerEl.textContent = countDown;
    if (countDown === 0) {
        timerEl.textContent = "BOOM";
        clearInterval(intervalId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && defuserEl.value === "defuse" && countDown !== 0) {
        timerEl.textContent = "Yow did it!";
        clearInterval(intervalId);
    }

});