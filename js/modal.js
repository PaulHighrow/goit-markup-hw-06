(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("[data-page]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  // Добавлена возможность закрытия модальной формы по клику в бэкдроп
  refs.closeModalBtn,refs.modal.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    // Отключение скролла при вызове модальной формы
    refs.body.classList.toggle("no-scroll");
  }
})();