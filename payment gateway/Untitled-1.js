function startSlideshow() {
  const slides = document.getElementsByClassName('slide');
  let currentIndex = 0;

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Call nextSlide every 3 seconds
  setInterval(nextSlide, 3000);
}

window.addEventListener('load', startSlideshow);
