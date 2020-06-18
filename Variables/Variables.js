//returns a NodeList which looks like an array but it isn't
//An array has a lot of methods, but NodeList only has a few methods.
//Conversion between NodeList and array is possible
window.onload = function () {
    const inputs = document.querySelectorAll('.controls input');
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
}

function handleUpdate(){
    const suffix = this.dataset.sizing || ''; 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

function readURL(){
    const file2 = document.getElementById("file_input").files[0];
    var reader2 = new FileReader();
      reader2.onloadend = function(){
        document.getElementById('logo').style.backgroundImage = "url(" + reader2.result + ")";
    }
      if(file2){reader2.readAsDataURL(file2);}
}
