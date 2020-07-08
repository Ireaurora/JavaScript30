// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;

team[3] = 'Lux';

//Both players and team are updated as "team" is only a reference to players
//console.log(players, team);

function one(){
  // One way to take a copy of an array is using slice without parameters
  console.clear();
  console.log("const team2 = players.slice();");
}

function two(){
  //Another way is to create a new array and concat the old one in
  console.clear();
  console.log("const team3 = [].concat(players);");
}

function three(){
  //Using array.from
  console.clear();
  console.log("const team5 = Array.from(players);");
}

function four(){
  //ES6 Spread
  console.clear();
  console.log("const team4 = [...players];");
}

// The same thing goes for objects

const person = {
  name: 'Irene',
  age: 1000
};

function five(){
  // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
  //Start with empty object, the original object, the property you want to update
  console.clear();
  console.log("const cap2 = Object.assign({}, person, {number: 99});");
}

function six(){
  // We will hopefully soon see the object ...spread -- NOT IN JS YET
  console.clear();
  console.log("const cap3 = {...person};");
}

//clone deep will clone at all levels
function seven(){
//This will return you a string and then immediately after an object - alternative to clone deeps  
  console.clear();
  console.log("const dev2 = JSON.parse(JSON.stringify());");
}
