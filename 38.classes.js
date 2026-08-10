class Vehicle{
  constructor(name,brand){
    console.log("Object get created")
    this.name = name
    this.brand = brand
  }
  start(){
    console.log("Start")
  }
  stop(){
    console.log("Stop")
  }
}

let car = new Vehicle("Land Cruiser","Toyota")
console.log(car)
car.start()
car.stop()
console.log(car.name)
console.log(car.brand)

// Inheritance
class Car extends Vehicle{
  constructor(engine,model,brand){
    super(model,brand)
    this.engine = engine
  }
  // method overriding
  start(){
    console.log("Car Start")
  }
  stop(){
    console.log("Car Stop")
  }
}

let audi = new Car("Hybrid","A5","Audi")
console.log(audi)
audi.start()
audi.stop()
console.log(audi.engine)
console.log(audi.name)
console.log(audi.brand)
