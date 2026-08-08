// 2-D Array
let arr = [[1,2],[3,4]]

// Loop through 2-D array
for(let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr.length; j++) {
    let element = arr[i][j];
    console.log(element)
  }
}

// 3-D Array
let arr1 = [[[1,2],[3,4]],[[5,6],[7,8]],[[9,10],[0,0]]]

// Loop through 3-D array
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1[i].length; j++) {
   for (let k = 0; k < arr1[i][j].length; k ++){
    console.log(arr1[i][j][k])
   }
  }
}
