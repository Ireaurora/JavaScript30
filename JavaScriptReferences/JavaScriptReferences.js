// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;

console.log(players, team);

team[3] = 'Lux';

//Both players and team are updated as "team" is only a reference to players

console.log(players, team);

// One way to take a copy of an array is using slice without parameters
const team2 = players.slice();

//Another way is to create a new array and concat the old one in

const team3 = [].concat(players);

// or use the new ES6 Spread

const team4 = [...players];

const team5 = Array.from(players);

// The same thing goes for objects

const person = {
  name: 'Wes Bos',
  age: 80
};

//Start with empty object, the original object, the property you want to update
const cap2 = Object.assign({}, person, {number: 99});

// We will hopefully soon see the object ...spread
const cap3 = {...person};
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const dev = Object.assign({}, wes);

//clone deep will clone at all levels

//which will return you a string and then immediately after an object - alternative to clone deeps
const dev2 = JSON.parse(JSON.stringify());