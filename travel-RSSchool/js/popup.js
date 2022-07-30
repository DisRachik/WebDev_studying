const openPopUp = document.getElementById('popup-open');
const openPopUpTwo = document.getElementById('open-popup');
const popUp = document.querySelector('.popup');
const closePopUp = document.querySelector('.popup-close');

openPopUp.addEventListener('click', function(e) {
  e.preventDefault();
  popUp.classList.add('popup-active');
});
openPopUpTwo.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('popup-active');
});

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('popup-active');
});

const login = document.querySelector('.popup-login');
const regisret = document.querySelector('.popup-register');
const openLogin = document.getElementById('open-login');
const openRegisret = document.getElementById('open-register');

openLogin.addEventListener('click', function (e) {
  e.preventDefault();
  login.classList.remove('popup-login-active');
  regisret.classList.add('popup-register-active');
});
openRegisret.addEventListener('click', function (e) {
  e.preventDefault();
  regisret.classList.remove('popup-register-active');
  login.classList.add('popup-login-active');
});

document.querySelector('.btn-1').addEventListener('click', () => {
  let emale = document.querySelector('.i-1').value;
  let password = document.querySelector('.i-2').value;
  
  // console.dir(form.elements.volue);
  alert(
    `Your E-mail: ${emale} \nYour password: ${password} \n\nConfirm your information`
  );
});
document.querySelector('.btn-2').addEventListener('click', () => {
  let emale = document.querySelector('.i-3').value;
  let password = document.querySelector('.i-4').value;
  
  // console.dir(form.elements.volue);
  alert(
    `Your E-mail: ${emale} \nYour password: ${password} \n\nConfirm your information`
  );
});