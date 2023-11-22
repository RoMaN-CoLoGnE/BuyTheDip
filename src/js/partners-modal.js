document.addEventListener('DOMContentLoaded', () => {
  const partnersModal = document.getElementById('partnersModal');
  const modalContent = document.getElementById('partnersContent');
  const button = document.getElementById('partners__button');
  const closeButton = document.getElementById('partnersClose');

  const openModal = () => {
    partnersModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      modalContent.classList.add('show-content');
    }, 50);
  };

  const closeModal = () => {
    modalContent.classList.remove('show-content');
  };

  modalContent.addEventListener('transitionend', () => {
    if (!modalContent.classList.contains('show-content')) {
      partnersModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  button.onclick = openModal;
  closeButton.onclick = closeModal;

  window.onclick = event => {
    if (event.target === partnersModal) {
      closeModal();
    }
  };
});
