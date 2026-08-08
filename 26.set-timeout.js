function fun1() {
  console.log("fun1 is starting...")
  console.log("fun1 is executing...")
  console.log("fun1 has stopped")
}
function fun2() {
  console.log("fun2 is starting...")
  console.log("fun2 is executing...")
  console.log("fun2 has stopped")
}
function fun3() {
  console.log("fun3 is starting...")
  console.log("fun3 is executing...")
  console.log("fun3 has stopped")
}

fun1()
setTimeout(() => {
  fun2()
}, 3000);
fun3()

