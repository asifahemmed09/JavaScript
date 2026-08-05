let userRole = "Student"

switch (userRole) {
  case "Admin":
    console.log("Accessing as a admin")
    break
  case "Author":
    console.log("Accessing as a author")
    break
  case "Editor":
    console.log("Accessing as a editor")
    break
  case "Student":
    console.log("Accessing as a student")
    break
  default:
    console.log("Access Denied!")
}


// Grouping
let day = 4

switch (day) {
  case 0:
  case 6:
    console.log("It is a weekend")
    break
  case 1:
    console.log("Start working day")
    break
  case 2:
  case 3:
  case 4:
    console.log("It is mid week day")
    break
  case 5:
    console.log("Hurrah! It is Friday")
    break
  default:
    break;
}
