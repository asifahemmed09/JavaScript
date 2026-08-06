/**
 * * Reference Types
 * *   - Object
 * *   - Function
 * *   - Array
 */

let car = {
  brand: "Toyota",
  model: "Land Cruiser",
  color: "Black"
}

let newCar;
//* Pass by reference
newCar = car

console.log(car.brand) // Toyota
console.log(newCar.brand) // Toyota

newCar.brand = "Mitsubishi"

console.log(car.brand) // Mitsubishi
console.log(newCar.brand) // Mitsubishi
