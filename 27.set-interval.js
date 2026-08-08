function fun() {
  console.log("Fetching data...")
}

let intervalID = setInterval(() => {
  fun()
}, 2000);

setTimeout(() => {
  clearInterval(intervalID)
}, 10000);
