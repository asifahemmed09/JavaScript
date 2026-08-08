function loadDashboard() {
  setTimeout(() => {
    console.log("Fetching user profile...")
    setTimeout(() => {
        console.log("Fetching user friend list...")
        setTimeout(() => {
          console.log("Fetching user friend list's posts...")
          setTimeout(() => {
            console.log("Fetching user friend list's post's comments...")
          }, 3000);
        }, 3000);
    }, 2000);
  }, 1000);
}

loadDashboard()
