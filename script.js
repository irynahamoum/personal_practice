// button.addEventListener("mousemove", (e) => {
//   const rect = button.getBoundingclientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;
//   button.style.setProperty("--mouseX", `${x}px`);
//   button.style.setProperty("--mouseY", `${y}px`);
// });

const dom = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const getTime = () => {
  const lsTime = localStorage.getItem("time");
  if (lsTime) {
    return lsTime;
  }
  const addTime = 1000 * 60 * 60 * 24 * 1;
  const finishedTime = Date.now() + addTime;
  localStorage.setItem("time", finishedTime);
  return finishedTime;
};

setInterval(() => {
  const timeNow = Date.now();
  const timer = getTime() - timeNow;
  const formattedTime = getFormattedTime(timer);
  renderTime(formattedTime, dom);
}, 1000);

// Time formatting function
function getFormattedTime(time) {
  const formattedTime = {
    days: Math.floor(time / (1000 * 60 * 60 * 24)),
    hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((time % (1000 * 60)) / 1000),
  };
  return formattedTime;
}

function renderTime(timeData, dom) {
  Object.keys(timeData).forEach((key) => {
    if (!dom[key]) return;
    dom[key].querySelector(".timer__num").innerHTML = timeData[key];
    console.log({ key, dom: dom[key] });
  });
}
