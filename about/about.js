document.addEventListener("DOMContentLoaded", function () {

    const textElement = document.querySelector('.introduction');
  
    textElement.animate(
      [
        { opacity: 0 },
        { opacity: 1 }
      ],
      {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards'
      }
    );
  });
  
  document.addEventListener("DOMContentLoaded", function () {
  
    const navbarElement = document.querySelector('.navbar');
  
  
    navbarElement.animate(
      [
        { opacity: 0 },
        { opacity: 1 }
      ],
      {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards'
      }
    );
  });

  document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.nav-container input.checkbox');
    const introduction = document.querySelector('.introduction');

    checkbox.addEventListener('change', function () {
        introduction.style.display = this.checked ? 'none' : 'block';
    });
});