function playSound(e){
    //select an audio element 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if(!audio)return;
        audio.currentTime=0; //rewinds to the start
        audio.play();
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        key.classList.add('playing');
    }
    function removeTransition(e){
        //skips if it's not a transform 
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }
window.onload = function () {
    window.addEventListener('keydown', playSound);
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}