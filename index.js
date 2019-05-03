const superagent = require('superagent')
const fetch = require('node-fetch')

// fetch('https://swapi.co/api/people/2')
//     .then(response => {
//         console.log(response)
//     })

superagent.get('https://swapi.co/ap/people/2')
    .then(response => {
        return superagent.get(response.body.homeworld)
    })
    .then(response => {
        console.log(response.body)
    })
    .catch(error => {
        console.log('NOT CALLED?')
        console.log(error)
    })