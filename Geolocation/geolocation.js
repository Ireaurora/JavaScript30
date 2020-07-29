//Uses the 

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed');
//watches and gives data as we need it 
//if the person is running you get more data, if they're still you get less data
navigator.geolocation.watch((data) =>{
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading})`;
}, (err)=> {
    alert("You should've had accepted that :( ")
});