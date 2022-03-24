let auth = {
  auth: firebase.auth(),

  //Creates a new user with provided email and password
  createUser: function (email, password) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user)
      })
      .catch(err => {
        console.error(err)
      })
  },

  //Logs the user with provided email and password
  //The Auth State Persistence is defined by default to SESSION, but can be defined as LOCAL or NONE
  logIn: function (email, password) {
    this.auth
      //Change Persistence below if needed
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        this.auth
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            this.currentUser = this.auth.currentUser
            console.log(`User logged in`)
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.error(err)
      })
  },

  //If logged in, logs out the current user
  logOut: function () {
    this.auth
      .signOut()
      .then(() => {
        console.log('User logged Out!')
      })
      .catch(err => {
        console.error(err)
      })
  },

  //Starts the observer that runs everytime the auth State changes (when user logs in or out)
  startUserObserver: function () {
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user
        console.log(`Current User:`, user)
      } else {
        console.log('No user logged in')
      }
    })
  }
}
