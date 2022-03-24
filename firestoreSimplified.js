let dbCollection = ''

let db = {
  firestore: firebase.firestore(),

  collection: dbCollection,

  // Gets all documents's data from the collection and stores it in db.allData. It also returns the data when the promise is resolved.
  getAllData: function () {
    return new Promise(resolve => {
      this.firestore
        .collection(this.collection)
        .get()
        .then(snapshot => {
          this.allData = {}
          snapshot.forEach(doc => {
            this.allData[doc.id] = doc.data()
          })
          resolve(this.allData)
        })
        .catch(error => {
          console.error(error)
        })
    })
  },

  // Returns specific document's data
  getDocData: function (docId) {
    try {
      this.firestore
        .collection(this.collection)
        .doc(docId)
        .get()
        .then(doc => {
          return doc.data()
        })
    } catch (error) {
      console.error(error)
    }
  },

  // Returns an array with the filtered data
  getFilteredData: function (field, operator, value) {
    try {
      this.firestore
        .collection(this.collection)
        .where(field, operator, value)
        .get()
        .then(snapshot => {
          if (snapshot.docs.length == 0) {
            console.error('No matches found for this search')
          } else {
            let arr = []
            snapshot.forEach(doc => {
              arr.push(doc.data())
            })
            return arr
          }
        })
    } catch (error) {
      console.error(error)
    }
  },

  // Adds a document with the data specified in the object passed within the function
  addDoc: function (object) {
    this.firestore
      .collection(this.collection)
      .add(object)
      .then(doc => {
        console.log('Document added successfully, with the ID:', doc.id)
      })
      .catch(err => {
        console.error(err)
      })
  },

  // Sets the document based on informed Document id and object
  setDoc: function (docId, object) {
    this.firestore
      .collection(this.collection)
      .doc(docId)
      .set(object, { merge: true })
      .then(() => {
        console.log('Document set successfully')
      })
      .catch(err => {
        console.error(err)
      })
  },

  // Updates the document with informed id with data cantained in the object
  updateDoc: function (docId, object) {
    this.firestore
      .collection(this.collection)
      .doc(docId)
      .update(object)
      .then(() => {
        console.log('Document updated successfully')
      })
      .catch(err => {
        console.error(err)
      })
  },

  // Adds specified item to an array field within the Document
  addToArray: function (docId, field, itemToAdd) {
    let add = {}
    add[field] = firebase.firestore.FieldValue.arrayUnion(itemToAdd)
    try {
      this.firestore
        .collection(this.collection)
        .doc(docId)
        .update(add)
        .then(() => {
          console.log(
            `The item "${itemToAdd}" was successfully added to the array`
          )
        })
    } catch (error) {
      console.error(error)
    }
  },

  // Removes specified item of an array field within the Document
  removeFromArray: function (docId, field, itemToRemove) {
    let rem = {}
    rem[field] = firebase.firestore.FieldValue.arrayRemove(itemToRemove)
    try {
      this.firestore
        .collection(this.collection)
        .doc(docId)
        .update(rem)
        .then(() => {
          console.log(
            `The item "${itemToRemove}" was successfully removed from the array`
          )
        })
    } catch (error) {
      console.error(error)
    }
  },

  //Increments the specified field within the document
  incrementField: function (docId, field, increment_decrement) {
    let inc = {}
    inc[field] = firebase.firestore.FieldValue.increment(increment_decrement)
    try {
      this.firestore
        .collection(this.collection)
        .doc(docId)
        .update(inc)
        .then(() => {
          console.log(
            `The field "${field}" was successfully incremented by "${increment_decrement}"`
          )
        })
    } catch (error) {
      console.error(error)
    }
  },

  //Creates an "observer" that executes the callback function, everytime the collection is updated
  collectionOnSnapshot: function (callbackFunction) {
    this.firestore.collection(this.collection).onSnapshot(callbackFunction)
  },

  //Creates an "observer" that executes the callback function, everytime the document is updated
  docOnSnapshot: function (docId, callbackFunction) {
    this.firestore
      .collection(this.collection)
      .doc(docId)
      .onSnapshot(callbackFunction)
  },

  //Deletes specific fild within the document
  deleteField: function (docId, field) {
    let delField = {}
    delField[field] = firebase.firestore.FieldValue.delete()
    try {
      this.firestore
        .collection(this.collection)
        .doc(docId)
        .update(delField)
        .then(() => {
          console.log(`The field "${field}" was successfully deleted.`)
        })
    } catch (error) {
      console.error(error)
    }
  },

  //Deletes specified document
  deleteDoc: function (docId) {
    this.firestore
      .collection(this.collection)
      .doc(docId)
      .delete()
      .then(() => {
        console.log(`The document "${docId}" was successfully deleted.`)
      })
      .catch(err => {
        console.error(err)
      })
  }
}

// Exemple callback for collectionOnSnapshot function
let collectionSnapshot = snapshot => {
  snapshot.forEach(doc => {
    console.log(doc.data())
  })
}

//Example callback for docOnSnapshot function
let documentSnapshot = doc => {
  console.log(doc.data())
}
