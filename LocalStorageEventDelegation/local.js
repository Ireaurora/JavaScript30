window.onload = function () {
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  //the list of items or checklist
  const items = JSON.parse(localStorage.getItem('items')) || [];

  function addItem(e) {
    e.preventDefault();
    //this is the form
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      //text is whatever the user has put 
      text,
      done: false
    };

    items.push(item);
    populateList(items, itemsList);
    //you can only use strings in local storage
    //local storage is a key-value store  
    //Localstorage converts everything to a string by using toString() therefore you need to stringify it
    localStorage.setItem('items', JSON.stringify(items));
    //forms have the reset function
    this.reset();
  }

  function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

  //Submit when someone clicks a button or ticks it 
  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
  populateList(items, itemsList);
}

//you can pass in any array as input and any array as output and it'll still work
//everytime you add an item you recreate the list -- you might want to consider a better solutions -- react or angular
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
    </li>
  `;
  }).join('');
}