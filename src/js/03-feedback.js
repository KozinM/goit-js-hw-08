const refs = {
    form: document.querySelector(".feedback-form"),
    mail: document.querySelector("[type=email]"),
    message: document.querySelector("[name=message]"),
    localStorageData: JSON.parse(localStorage.getItem("feedback-form-state")),
}

refs.form.addEventListener('input', formInputHandler);
/* onStartLoad(); */
/* console.log(refs.localStorageData); */


function onStartLoad()
{
    if(!localStorage.getItem("feedback-form-state")) {
        return;
    }
    refs.mail.value = localStorageData.mail;
    refs.message.value = localStorageData.message;
    /* refs.mail.value = */
};

function formInputHandler (event) {
    
}