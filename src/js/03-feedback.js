const refs = {
    form: document.querySelector(".feedback-form"),
    mail: document.querySelector("[type=email]"),
    message: document.querySelector("[name=message]"),
    localStorageData: JSON.parse(localStorage.getItem("feedback-form-state")),
}

refs.form.addEventListener('input', formInputHandler);
/* formLoad(); */
/* console.log(refs.localStorageData); */


function formLoad()
{
    if(!localStorage.getItem("feedback-form-state")) {
        return;
    }
    refs.mail.value = localStorageData.mail;
    refs.message.value = localStorageData.message;
    /* refs.mail.value = */
};

function formInputHandler (event) {
    console.log(event.currentTarget);
}