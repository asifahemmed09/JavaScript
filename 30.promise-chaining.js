function step1() {
  return new Promise((resolve, reject) => {
    console.log('Step1 Started');
    setTimeout(() => resolve({message:"Step1 Successful"}), 2000);
  });
}
function step2() {
  return new Promise((resolve, reject) => {
    console.log('Step2 Started');
    setTimeout(() => resolve({message:"Step2 Successful"}), 2000);
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    console.log('Step3 Started');
    setTimeout(() => resolve({message:"Step3 Successful"}), 2000);
  });
}

step1()
.then((data) => {
  console.log(data.message)
  return step2()
})
.then((data) => {
  console.log(data.message)
  return step3()
})
.then((data) => {
  console.log(data.message)
})
.catch((error)=>console.log(error))

