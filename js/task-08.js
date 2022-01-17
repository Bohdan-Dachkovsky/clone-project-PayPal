const formElement = document.querySelector(`login-form`);
const formSubmit = (event) => {
    event.preventDefault ();
const { elements:{email, password} = event.currentTarget;
if (email.value === `` || password.value === ``) {
    return alert(`Please fill out this field`);
};

const objectForm = {
    email: email.value,
    password: password.value,
};
console.log(objectForm);
event.currentTarget.reset();
};
formElement.addEventListner(`submit`, formSubmit)
