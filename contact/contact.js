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
  
  document.addEventListener("DOMContentLoaded", function () {
  
    const formElement = document.querySelector('form');
  
  
    formElement.animate(
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
  
    const h2Element = document.querySelector('h2');
  
  
    h2Element.animate(
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
    const form = document.querySelector('form');
    const h2 = document.querySelector('h2');

    checkbox.addEventListener('change', function () {
        form.style.display = this.checked ? 'none' : 'block';
        h2.style.display = this.checked ? 'none' : 'block';
    });
});