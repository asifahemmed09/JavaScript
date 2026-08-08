let promise = new Promise((resolve,reject) => {
  resolve({message:"Successful"})
})

promise
.then((data) => console.log(data.message))
.catch((error) => console.log(error))

let newPromise = new Promise((resolve,reject) => {
  reject({message:"failed"})
})

newPromise
.then((data) => console.log(data.message))
.catch((error) => console.log(error.message))



