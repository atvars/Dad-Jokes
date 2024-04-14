// getting my joke div and button
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// adding a event listener to button to call a function when button is pressed
jokeBtn.addEventListener('click', generateJoke);

// function to fetch a joke from API and setting response to be in JSON format
// calling a functionon page load
generateJoke();

async function generateJoke() {
  //storing response to be in JSON format in a variable by setting headers
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  // fetch
  const response = await fetch('https://icanhazdadjoke.com', config);

  // to JSON
  const data = await response.json();

  // display joke
  jokeEl.innerHTML = data.joke;
}
