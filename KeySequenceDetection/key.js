window.onload = function(){
    const pressed = []; 
    const secretCode ='irene';
    window.addEventListener('keyup', (e) =>{
    pressed.push(e.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)){
        cornify_add();
    }
    });
}