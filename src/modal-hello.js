window.addEventListener('load', function() {
  if (!sessionStorage.getItem('shown-modal')){
    sessionStorage.setItem('shown-modal', 'true');
    toggleModal();
  }
})

const closeButton =  document.querySelector("[data-modalhello-close]");
closeButton.addEventListener("click", toggleModal);

function toggleModal() {
  document.querySelector("[data-modalhello]").classList.toggle("hello-is-hidden");
}