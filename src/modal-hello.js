(() => {
  const refs = {
    // openModalBtn: document.querySelector("[data-modalhello-open]"),
    closeModalBtn: document.querySelector("[data-modalhello-close]"),
    modal: document.querySelector("[data-modalhello]"),
  };

//   refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    refs.modal.classList.toggle("hello-is-hidden");
  }
})();
