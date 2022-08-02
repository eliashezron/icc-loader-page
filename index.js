const progressBar = document.querySelector(".progressbar")
const span = document.querySelector("#mm")
let k = 0
let int = setInterval(() => {
  k += 1
  if (k == 100) {
    clearInterval(int)
  }
  span.textContent = `${k}%`
  // progressBar.style.setProperty("--width", k)
}, 50)
