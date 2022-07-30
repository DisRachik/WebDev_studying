window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav'),
    menuItem = document.querySelectorAll('.menu-item'),
    hamburger = document.querySelector('.humburger'),
    close = document.querySelector('.close'),
    main = document.querySelector('.main'),
    header = document.querySelector('.company');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  close.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  main.addEventListener('click', () => {
    nav.classList.remove('nav-active');
  });
  header.addEventListener('click', () => {
    nav.classList.remove('nav-active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    });
  });

});
