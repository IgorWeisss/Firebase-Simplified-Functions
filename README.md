# Firebase-Simplified-Functions
During the Full Stack Course by ProgBR, I learned about Firebase and how to use firestore and auth in a project. The idea of this repository is to provide an easier way to use the code of the most used functions within firestore and auth.

I created two objects to facilitate the access to firestore and auth functionalities.

## firestoreSimplified.js:

The first step to use this functions is to set the collection name in the dbCollection variable. For example, "let dbCollection = 'MyCollection'"

Then, you can use the following methods:

* db.getAllData - Gets all documents's data from the collection and stores it in db.allData. It also returns the data when the promise is resolved.
* db.getDocData(docId) - Returns specific document's data
* db.getFilteredData(field, operator, value) - Returns an array with the filtered data
* db.addDoc(object) - Adds a document with the data specified in the object passed within the function
* db.setDoc(docId, object) - Sets the document based on informed Document id and object
* db.updateDoc(docId, object) - Updates the document with informed id with data contained in the object
* db.addToArray(docId, field, itemToAdd) - Adds specified item to an array field within the Document
* db.removeFromArray(docId, field, itemToRemove) - Removes specified item of an array field within the Document
* db.incrementField(docId, field, increment_decrement) - Increments the specified field within the document
* db.collectionOnSnapshot(callbackFunction) - Creates an "observer" that executes the callback function, everytime the collection is updated
* db.docOnSnapshot(docId, callbackFunction) - Creates an "observer" that executes the callback function, everytime the document is updated
* db.deleteField(docId, field) - Deletes specific fild within the document
* db.deleteDoc(docId) - Deletes specified document

## authSimplified.js:

This methods are ment to be used with the simple email/password authentication in Firebase:

* auth.createUser(email, password) - Creates a new user with provided email and password
* auth.logIn(email, password) - Logs the user with provided email and password. The Auth State Persistence is defined by default to SESSION, but can be defined as LOCAL or NONE as well.
* auth.logOut() - If logged in, logs out the current user
* auth.startUserObserver() - Starts the observer that runs everytime the auth State changes (when user logs in or out)
