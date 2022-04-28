//getting this so we can change the innerHTML at the end, at the start it will be blank.
const displayResult = document.getElementsByClassName('.display-result');

//storing the innerHTML of each option in the HTML.
const optionOne = document.getElementById('option-one');
const optionTwo = document.getElementById('option-two');
const optionThree = document.getElementById('option-three');
const optionFour = document.getElementById('option-four');

//creating arrays of each of the different types of names to generate
const hippyNames = [];
const rapperNames = [];
const fairyNames = [];
const wrestlerNames = [];

//create arrays for roles, things, places
const roles = ['queen', 'king', 'emperor','president','grand enchantress','master'];
const things = ['chess', 'trainspotting', 'rap battles'];
const places = ['Compton', 'Dubbo', 'all the galaxy'];

//need to create function here that returns a random name form the array.
const random = (array) => {
    //return random value in that array
    //eg random(places) could return 'all the galaxy'
}



optionOne.addEventListener('click', () => {
    let name = random(hippyNames)
    displayResult.innerHTML = `Your name is ${name}. You are ${random(roles)} of ${random(things)} in ${random(places)}.`
})

optionTwo.addEventListener('click', () => {
    let name = random(rapperNames)
    displayResult.innerHTML = `Your name is ${name}. You are ${random(roles)} of ${random(things)} in ${random(places)}.`
})

optionThree.addEventListener('click', () => {
    let name = random(fairyNames)
    displayResult.innerHTML = `Your name is ${name}. You are ${random(roles)} of ${random(things)} in ${random(places)}.`
})

optionFour.addEventListener('click', () => {
    let name = random(wrestlerNames)
    displayResult.innerHTML = `Your name is ${name}. You are ${random(roles)} of ${random(things)} in ${random(places)}.`
})
