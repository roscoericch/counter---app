'use strict';

const increasebtn = document.querySelector('.btn-increase');
const decreasebtn = document.querySelector('.btn-decrease');
const savebtn = document.querySelector('.btn-save');
const resetbtn = document.querySelector('.btn-reset');
const logbtn = document.querySelector('.btn-log');
const clearlogbtn = document.querySelector('.btn-clearlog');
const screen = document.querySelector('.data');
const popup = document.querySelector('.popup');
const popup_save = document.querySelector('.popup-save');
const input = document.querySelector('.input-save');
const close = document.querySelector('.close');
const background = document.querySelector('.popup-background');
const popup_body = document.querySelector('.popup-body');
const logs = document.getElementsByClassName('popup-content');

let count = 0;

increasebtn.addEventListener('click', () => {
  count++;
  screen.textContent = count;
  if (count > 0) {
    decreasebtn.classList.add('animate');
    decreasebtn.classList.remove('inactive');
  }
  if (count <= 0) {
    decreasebtn.classList.remove('animate');
    decreasebtn.classList.add('inactive');
  }
});

decreasebtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    screen.textContent = count;
    decreasebtn.classList.add('animate');
    decreasebtn.classList.remove('inactive');
  }
  if (count <= 0) {
    decreasebtn.classList.remove('animate');
    decreasebtn.classList.add('inactive');
  }
});

logbtn.addEventListener('click', () => {
  background.style.transform = 'scale(8000)';
  popup.style.display = 'block';
});

clearlogbtn.addEventListener('click', () => {
  const logs = document.getElementsByClassName('popup-content');
  while (logs.length > 0) {
    popup.removeChild(logs[0]);
  }
});

close.addEventListener('click', () => {
  background.style.transform = 'scale(0)';
  popup.style.display = 'none';
});

savebtn.addEventListener('click', () => {
  console.log();
  popup_save.classList.remove('hidden');
  input.focus();
});

resetbtn.addEventListener('click', () => {
  count = 0;
  screen.textContent = count;
});

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    popup_save.classList.add('hidden');
    const NewElement = document.createElement('div');
    popup.appendChild(NewElement);
    NewElement.classList.add('popup-content');
    const popup_title = document.createElement('div');
    if (input.value) {
      popup_title.textContent = `${input.value}:`;
    } else {
      popup_title.textContent = 'unnamed counter:';
    }

    NewElement.appendChild(popup_title);
    const count_value = document.createElement('div');
    count_value.textContent = count;
    NewElement.appendChild(count_value);

    input.value = '';
  }
});

popup_save.addEventListener('click', () => {
  popup_save.classList.add('hidden');
});
console.log(count);
