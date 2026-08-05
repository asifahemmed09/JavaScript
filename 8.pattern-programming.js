/**
 * *****
 * *****
 * *****
 * *****
 */

let n = 4;
let row;

for(let i = 1; i <= n; i++){
  row = ""
  for (let j = 1; j <= n ; j++) {
    row = row + "*"
  }
  console.log(row)
}


/**
 * *****
 * *   *
 * *   *
 * *   *
 * *****
 */

n = 6

for (let i = 1; i <= n; i++){
  row = ""
  for(let j = 1; j <= n; j++){
    if(i == 1 || i == n || j == 1 || j == n){
      row += "*"
    }
    else{
      row += " "
    }
  }
  console.log(row)
}

