//getting this so we can change the innerHTML at the end, at the start it will be blank.
// getElementsByClass wasn't working, so I swapped it out for querySelector!
const displayResult = document.querySelector('.display-result');
console.log(displayResult.innerHTML);

//storing the innerHTML of each option in the HTML.
const optionOne = document.getElementById('option-one');
const optionTwo = document.getElementById('option-two');
const optionThree = document.getElementById('option-three');
const optionFour = document.getElementById('option-four');

//creating arrays of each of the different types of names to generate
const hippyNames = ["Brosef", "Min", "Flo", "Atlas", "Burkenstocks"];
const rapperNames = ["Eff Tupe", "Li'l G", "Big Bux", "Nas-T"];
const fairyNames = ["Galadriel", "Lilith", "Tinkerbell", "Delilah"];
const wrestlerNames = ["The Overgiver", "Quadriple H", "Gunther Cena"];

//create arrays for roles, things, places
const roles = ['queen', 'king', 'emperor','president','grand enchantress','master'];
const things = ['chess', 'trainspotting', 'rap battles'];
const places = ['Compton', 'Dubbo', 'all the galaxy'];

//need to create function here that returns a random name from the array.
const random = (array) => {
    //return random value in that array
    //eg random(places) could return 'all the galaxy'
    const id = Math.floor(Math.random() * array.length);
    return array[id];

}



optionOne.addEventListener('click', () => {
    let name = random(hippyNames)
    displayResult.innerHTML = `Your name is <span id="hippy-name">${name}</span>. You are <span id="underline">${random(roles)} of ${random(things)} in ${random(places)}</span>.`
})

optionTwo.addEventListener('click', () => {
    let name = random(rapperNames)
    displayResult.innerHTML = `Your name is <span id="rapper-name">${name}</span>. You are <span id="underline">${random(roles)} of ${random(things)} in ${random(places)}</span>.`
})

optionThree.addEventListener('click', () => {
    let name = random(fairyNames)
    displayResult.innerHTML = `Your name is <span id="fairy-name">${name}</span>. You are <span id="underline">${random(roles)} of ${random(things)} in ${random(places)}</span>.`
})

optionFour.addEventListener('click', () => {
    let name = random(wrestlerNames)
    displayResult.innerHTML = `Your name is <span id="wrestler-name">${name}</span>. You are <span id="underline">${random(roles)} of ${random(things)} in ${random(places)}</span>.`
})
