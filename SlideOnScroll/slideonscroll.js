window.onload = function () {
    //make sure you debounce your scroll functions!
    window.addEventListener('scroll', debounce(checkSlide));
}
//run the function at most 
//you pass it a function and it will run the debounce function many times but the actual function parameter runs once every 20 milliseconds 
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
function checkSlide(e){
const sliderImages = document.querySelectorAll('.slide-in');
    sliderImages.forEach(sliderImage => {
        // half way through the image
        //window.scrollY gives you the y coordinate of the scroll
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
}