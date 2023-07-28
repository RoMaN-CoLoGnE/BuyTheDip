document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('myModal');
  const modalContent = modal.querySelector('.modal-content');
  const button = document.getElementById('whitepaper__button');
  const closeButton = document.getElementById('close');

  const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      modalContent.classList.add('show-content');
    }, 50);
  };

  const closeModal = () => {
    modalContent.classList.remove('show-content');
    // удаляем задержку перед изменением свойства display
  };

  // добавляем обработчик события transitionend
  modalContent.addEventListener('transitionend', () => {
    if (!modalContent.classList.contains('show-content')) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  button.onclick = openModal;
  closeButton.onclick = closeModal;

  window.onclick = event => {
    if (event.target === modal) {
      closeModal();
    }
  };
});
