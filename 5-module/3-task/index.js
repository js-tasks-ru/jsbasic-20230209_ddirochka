function initCarousel() {
  const left = document.querySelector('.carousel__arrow.carousel__arrow_left');
  const right = document.querySelector('.carousel__arrow.carousel__arrow_right');

  const slider = document.querySelector('.carousel__inner');
  const images = document.querySelectorAll('.carousel__slide .carousel__img');

  let counter = 0;
  const step = images[0].clientWidth;

  slider.classList.add('transformAnimation')

  left.style.display = 'none'

  right.addEventListener('click', function() { 
    counter++
    left.style.display = ''

    if (counter >= images.length - 1) {
      right.style.display = 'none'
    } 
     
    slider.style.transform = `translateX(-${step * counter}px)`
  })
  
  left.addEventListener('click', function() {
    counter--
    right.style.display = ''

    if (counter <= 0) {
      left.style.display = 'none'
    } 
    
    slider.style.transform = `translateX(-${step * counter}px)`
  })
  
}
