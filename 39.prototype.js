function Car(model,year,color){
  this.model = model
  this.year = year
  this.color = color
}

let bmw = new Car("BMW",2023,"Red")
console.log(bmw)
console.log(Car.prototype)
Car.prototype.wheelNumber = function() {
  return 4
}

let wheelNumber = bmw.wheelNumber()
console.log(wheelNumber) // 4


