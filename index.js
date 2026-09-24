const displayel = document.getElementById("display");
const startel = document.getElementById("start");
const pauseel = document.getElementById("pause");
const resetel = document.getElementById("reset");

let startTime = 0;
let elapseTime = 0;
let isRuning = false;
let timeInterval = null;
function update() {
  const currentRuning = isRuning ? Date.now() - startTime : 0;
  const tatalMs = elapseTime + currentRuning;

  const totalSeconds = Math.floor(tatalMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const second = totalSeconds % 60;
  displayel.innerHTML = `${addzero(minutes)} <span class = "colen">:</span> ${addzero(second)} `;
}
function addzero(num) {
  return num < 10 ? "0" + num : num;
}

startel.addEventListener("click", () => {
  if (isRuning) return;
  isRuning = true;
  startTime = Date.now();
  timeInterval = setInterval(update, 1000);
});
pauseel.addEventListener("click", () => {
  if (!isRuning) return;
  isRuning = false;
  elapseTime += Date.now() - startTime;
  clearInterval(timeInterval);
});
resetel.addEventListener("click", () => {
  isRuning = false;
  clearInterval(timeInterval);
  elapseTime = 0;
  update();
});
