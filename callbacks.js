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
function getDocument(documentId, callback) {
    function loadComplete() {
        callback(null, documents[documentId])
    }
    setTimeout(loadComplete, 1000)
}

function getAuthor(authorId, callback) {
    function loadComplete() {
        callback(null, authors[authorId])
    }
    setTimeout(loadComplete, 1000)
}

getDocument(1, (error, document) => {
    if(error !== null) return 

    getAuthor(document.authorId, (error, author) => {
        if(error !== null) return 
        
        console.log(author)
    })
})

