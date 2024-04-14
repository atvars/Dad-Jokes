// getting my joke id div and button
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// function to fetch a joke from API and setting response to be in JSON format

generateJoke()

function generateJoke() {
    //storing response to be in JSON format in a variable by setting headers
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config)
        .then((response) => response.json())
        .then((data) => console.log(data))
}