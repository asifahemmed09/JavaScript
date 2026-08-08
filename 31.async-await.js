function fetchData() {
  return new Promise((resolve, reject) => {
    console.log('Fetching Data...');
    setTimeout(() => {
      resolve({ data: 'Data get Successfully' });
    }, 3000);
  });
}

async function getData() {
  try {
    let res = await fetchData();
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

getData();

function step1() {
  return new Promise((resolve, reject) => {
    console.log('Step1 Started');
    setTimeout(() => resolve({ message: 'Step1 Successful' }), 2000);
  });
}
function step2() {
  return new Promise((resolve, reject) => {
    console.log('Step2 Started');
    setTimeout(() => resolve({ message: 'Step2 Successful' }), 2000);
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    console.log('Step3 Started');
    setTimeout(() => resolve({ message: 'Step3 Successful' }), 2000);
  });
}

async function getSteps() {
  try {
    let res1 = await step1();
    console.log(res1.message);
    let res2 = await step2();
    console.log(res2.message);
    let res3 = await step3();
    console.log(res3.message);
  } catch (error) {
    console.log(error);
  }
}

getSteps();
