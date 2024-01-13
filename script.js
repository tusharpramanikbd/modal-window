'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const handleBtnClick = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const handleCloseModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsShowModal.forEach(btn => {
  btn.addEventListener('click', handleBtnClick);
});

btnCloseModal.addEventListener('click', handleCloseModal);

overlay.addEventListener('click', handleCloseModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    handleCloseModal();
});
