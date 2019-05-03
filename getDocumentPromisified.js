const documents = {
    1: {content: "I am a document", authorId: 1},
    2: {content: "I am also a document", authorId: 2},
    3: {content: "You guessed it!", authorId: 2}
}
const authors = {
    1: {name: "Adam"},
    2: {name: "Dave"}
}

// documentId: number, callback: function
function getDocument(documentId) {
    return new Promise((resolve, reject) => {
        function loadComplete() {
            if(documents[documentId] === undefined){
                reject(new Error('404 DOCUMENT NOT FOUND!'))
            }
            resolve(documents[documentId])
        }
        setTimeout(loadComplete, 1000)        
    })
}

function getAuthor(authorId, callback) {
    function loadComplete() {
        callback(authors[authorId])
    }
    setTimeout(loadComplete, 1000)
}

function wrapGetAuthor(authorId){
    return new Promise((resolve, reject) => {
        getAuthor(authorId, resolve)
    })
}

wrapGetAuthor(1)
    .then(author => console.log(author))

getDocument(999)
    .then(document => console.log(document))
    .catch(error => console.log(error))


