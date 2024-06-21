function getTime(){
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const currTime = document.querySelector("#current-time")
     currTime.innerText = time;
}

let interval = setInterval(getTime, 1000);

const btn = document.querySelector("#button");

btn.addEventListener("click", () => {
    clearInterval(interval);
})