const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function one() {
    // Regular 
    console.clear();
    console.log("Developer Tricks!");
}

function two() {
    // Interpolated
    console.clear();
    const a = 'animal';
    console.log(`A dog is an ${a}`);
}

function three() {
    // Styled
    console.clear();
    console.log('%c I am some great text', 'color:blue')
}

function four() {
    // warning!
    console.clear();
    console.warn('Oh no!');
}

function five() {
    // Error : 
    console.clear();
    console.error('I am an error');
}

function six() {
    // Info
    console.clear();
    console.info('I am an information')
}

function seven() {
    // Testing  
    //if true nothing happens
    console.clear();
    const par = document.querySelector('p');
    console.assert(par.classList.contains('something'), "Wrong");
}


function eight() {
    //View a DOM element
    const h1 = document.querySelector('h1');
    console.clear();
    console.log(h1);
}

function nine() {
    //View all information about a DOM element
    const h1 = document.querySelector('h1');
    console.clear();
    console.dir(h1);
}

function ten() {
    // Grouping together
    console.clear();
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
      });
}

function eleven() {
    //counts the occurrence of dog
    console.clear();
    console.count('dog');
}

function twelve() {
    //Tell you how long it took you to do something
    console.clear();
    console.log("console.time('Fetching data')");
    /*fetch('url').then(data => data.json()).then(data => {
        console.timeEnd('Fetching data');
        console.log(data);
    });*/
}

function final() {
    //Assumes that they all have the same properties
    console.clear();
    console.table(dogs);
}