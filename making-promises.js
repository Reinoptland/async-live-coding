// const request = new Promise((resolve, reject) => {
//     function loadComplete(){
//         console.log('AM I STILL CALLED THOUGH?')
//         resolve('I AM RESOLVED')
//     }

    
//     setTimeout(loadComplete, 1000)
    
//     reject(new Error('NOPE!'))
// })

// request
//     .then(result => console.log(result.toUpperCase()))
//     .catch(error => console.log(error))

function getSomething(name){
    return new Promise((resolve, reject) => {
        if(name === 'Mimi'){
            resolve('HELLO MIMI!')
        }

        if(name === 'Wouter'){
            resolve('Hello Boss!')
        }

        reject('We have not met, sorry')
    })
}

getSomething('Wouter')
    .then(result => console.log(result))
    .catch(error => console.log(error.toUpperCase()))