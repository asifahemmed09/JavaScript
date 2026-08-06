const car = {
  brand: "Toyota",
  model: "Land Cruiser",
  color: "Black",
  start: function(){
    console.log("Car is starting...")
  },
  accelerate: function(){
    console.log("Car is accelerating...")
  },
  stop: function(){
    console.log("Car has stopped")
  }
}

console.log(car)

// Accessing object property
console.log(car.brand)
console.log(car.model)
console.log(car.color)

// Accessing object method
car.start()
car.accelerate()
car.stop()


// Changing object property
car.model = "Mitsubishi"
console.log(car.model)

