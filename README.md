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



# Firebase-Simplified-Functions
Durante o Curso Full Stack do ProgBR, aprendi sobre o Firebase e como usar o firestore e o auth em um projeto. A ideia deste repositório é fornecer uma maneira mais fácil de usar o código das funções mais usadas dentro do firestore e auth.

Criei dois objetos para facilitar o acesso às funcionalidades do firestore e do auth.

## firestoreSimplified.js:

O primeiro passo para usar essas funções é definir o nome da coleção na variável dbCollection. Por exemplo, "let dbCollection = 'MyCollection'"

Então, você pode usar os seguintes métodos:

* db.getAllData - Obtém os dados de todos os documentos da coleção e os armazena em db.allData. Ele também retorna os dados quando a Promise é resolvida.
* db.getDocData(docId) - Retorna os dados do documento específico
* db.getFilteredData(campo, operador, valor) - Retorna um array com os dados filtrados
* db.addDoc(object) - Adiciona um documento com os dados especificados no objeto passado dentro da função
* db.setDoc(docId, object) - "Seta" o documento com base no id do documento informado e no objeto
* db.updateDoc(docId, object) - Atualiza o documento com id informado com os dados contidos no objeto
* db.addToArray(docId, field, itemToAdd) - Adiciona o item especificado a um campo de array no Documento
* db.removeFromArray(docId, field, itemToRemove) - Remove o item especificado de um campo de array dentro do Documento
* db.incrementField(docId, field, increment_decrement) - Incrementa o campo especificado dentro do documento
* db.collectionOnSnapshot(callbackFunction) - Cria um "observador" que executa a função callback, toda vez que a coleção é atualizada
* db.docOnSnapshot(docId, callbackFunction) - Cria um "observador" que executa a função callback, toda vez que o documento é atualizado
* db.deleteField(docId, field) - Exclui um campo específico dentro do documento
* db.deleteDoc(docId) - Exclui o documento especificado

## authSimplified.js:

Esses métodos devem ser usados com a autenticação simples de e-mail/senha no Firebase:

* auth.createUser(email, password) - Cria um novo usuário com e-mail e senha fornecidos
* auth.logIn(email, password) - Loga o usuário com e-mail e senha fornecidos. A Persistência do Estado de Autenticação é definida por padrão como SESSION, mas também pode ser definida como LOCAL ou NONE.
* auth.logOut() - Se logado, desloga o usuário atual
* auth.startUserObserver() - Inicia o observador que é executado sempre que o estado de autenticação é alterado (quando o usuário efetua login ou logout)
