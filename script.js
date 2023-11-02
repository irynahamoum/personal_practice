const dom = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const addTime = 1000 * 60 * 60 * 24 * 1;
const finishedTime = Date.now() + addTime;

setInterval(() => {
  const timeNow = Date.now();
  const timer = finishedTime - timeNow;
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
    dom[key].guerySelector(".timer__num").innerHTML = timeData;
  });
}
