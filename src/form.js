var form = document.getElementById("subscribe-form");
function handleForm(event) {
    // TODO: sent form data
    // api.post(form.data)
    //
    // use event.preventDefault() to avoid reloading page
    event.preventDefault();
} 
form.addEventListener('submit', handleForm);