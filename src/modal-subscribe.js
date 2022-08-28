(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modalsub-open]"),
    closeModalBtn: document.querySelector("[data-modalsub-close]"),
    modal: document.querySelector("[data-modalsub]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    refs.modal.classList.toggle("sub-is-hidden");
  }
})();


