import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    mail: document.querySelector("[type=email]"),
    message: document.querySelector("[name=message]"),
    //localStorageData: JSON.parse(() => {if (!localStorage.getItem("feedback-form-state")) return ""; return localStorage.getItem("feedback-form-state") }),
}

formLoad();

refs.form.addEventListener('input', throttle(formInputHandler, [wait=500]));

refs.form.addEventListener('submit', formSubmitHandler);
/* formLoad(); */
/* console.log(refs.localStorageData); */


function formLoad()
{
    if(!localStorage.getItem("feedback-form-state")) {
        return;
    }
    console.log("form load: " + localStorage.getItem("feedback-form-state"));
    refs.mail.value = JSON.parse(localStorage.getItem("feedback-form-state")).mail;
    refs.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
    /* refs.mail.value = */
};

function formInputHandler (event) {
    //console.log(event.currentTarget.elements.email.value);
    //const testObject = { "mail": `${event.currentTarget.elements.email.value}`,
    //"message":`${event.currentTarget.elements.message.value}` };
    //console.log(testObject);

    localStorage.setItem( "feedback-form-state" , JSON.stringify({ "mail": `${event.currentTarget.elements.email.value}`,
    "message": `${event.currentTarget.elements.message.value}` }));
    //console.log(localStorage.getItem("feedback-form-state"));
    //console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
}

function formSubmitHandler(event) {
    //console.log("we've entered in submit handler")
    event.preventDefault();
    console.log(localStorage.getItem("feedback-form-state"));

    localStorage.removeItem("feedback-form-state");
    //document.getElementById(".feedback-form").reset();

    
    //localStorage.setItem("feedback-form-state" , "");
    refs.form.reset();
    
}