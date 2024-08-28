// document.addEventListener('DOMContentLoaded', () => {
//     const firstnameinput = document.getElementById("first-name");
//     const lastnameinput = document.getElementById("last-name");
//     const emailinput = document.getElementById("email");
//     const usernameinput = document.getElementById("username");
//     const passwordinput = document.getElementById("first-password");
//     const confirmpasswordinput = document.getElementById("confirm-password");
//     const termsconditioncheckbox = document.getElementById("checkbox");
//     const submitbutton = document.getElementById("submit-button");
//     const signupboxelements = document.querySelectorAll(".signup-box-elements");
//     const alertbox = document.getElementById("alert-text-div");





// function checkemailvalidity(email) {
//     const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailpattern.test(email);
// }


// function checkpasswordvalidity(password) {
//     return password.length >= 8;
// }

// function checkfieldcorrectly() {
//     return checkemailvalidity(emailinput.value) &&
//     checkpasswordvalidity(passwordinput.value) &&
//     (passwordinput.value === confirmpasswordinput.value);
// }

//     function checkformvalidity() {
//         let allfieldsfilled = true;

//         signupboxelements.forEach((signupbox) => {
//             if(signupbox.value.trim() === '') {
//                 allfieldsfilled = false;
//                 return;
//             }
//         });

//         if(allfieldsfilled && termsconditioncheckbox.checked && checkfieldcorrectly()) {
//             submitbutton.style.color = 'green';
//         } else {
//             submitbutton.style.color = '';
//         };
//     };

//     submitbutton.addEventListener("click", (event) => {

//         let allfieldsfilled = true;

//         signupboxelements.forEach((signupbox) =>{
//             if(signupbox.value.trim() === '') {
//                 allfieldsfilled = false;
//                 event.preventDefault();
//                 return;
//             }
//         });
//         if(!allfieldsfilled) {
//             alertbox.textContent = 'All Fields are Necessary !';
//             event.preventDefault();
//             return;
//         }
//         else if(!termsconditioncheckbox.checked) {
//             alertbox.textContent = 'Please Agree to Terms & Conditions';
//             event.preventDefault();
//             return;
//         }
//         else if(!checkfieldcorrectly()) {
//             alertbox.textContent = 'Please ensure all fields are filled correctly!';
//             event.preventDefault();
//         }
//         else{
//             alertbox.textContent = '';
//         }
        
//     });


//     signupboxelements.forEach((signupbox) => {
//         signupbox.addEventListener('input', checkformvalidity);
//     });
//     termsconditioncheckbox.addEventListener('change', checkformvalidity);

// });



document.addEventListener('DOMContentLoaded', () => {
    const formElements = {
        firstname: document.getElementById("first-name"),
        lastname: document.getElementById("last-name"),
        email: document.getElementById("email"),
        username: document.getElementById("username"),
        password: document.getElementById("first-password"),
        confirmPassword: document.getElementById("confirm-password"),
        terms: document.getElementById("checkbox"),
        submitButton: document.getElementById("submit-button"),
        alertBox: document.getElementById("alert-text-div"),
    };

    const signupBoxElements = document.querySelectorAll(".signup-box-elements");

    function checkEmailValidity(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function checkPasswordValidity(password) {
        return password.length >= 8;
    }

    function areFieldsCorrect() {
        return checkEmailValidity(formElements.email.value) &&
            checkPasswordValidity(formElements.password.value) &&
            (formElements.password.value === formElements.confirmPassword.value);
    }

    function areAllFieldsFilled() {
        return Array.from(signupBoxElements).every(signupBox => signupBox.value.trim() !== '');
    }

    function updateSubmitButtonState() {
        if (areAllFieldsFilled() && formElements.terms.checked && areFieldsCorrect()) {
            formElements.submitButton.style.color= 'green';
        } else {
            formElements.submitButton.style.color = '';
        }
    }

    function showAlert(message) {
        formElements.alertBox.textContent = message;
    }

    formElements.submitButton.addEventListener("click", (event) => {
        event.preventDefault()
        if (!areAllFieldsFilled()) {
            showAlert('All Fields are Necessary!');
        } else if (!formElements.terms.checked) {
            showAlert('Please Agree to Terms & Conditions');
        } else if (!areFieldsCorrect()) {
            showAlert('Please ensure all fields are filled correctly!');
        } else {
            showAlert('');
            window.location.href = '/Dashboard/dashboard.html';  // To be changed in future

        }
    });

    signupBoxElements.forEach(signupBox => signupBox.addEventListener('input', updateSubmitButtonState));
    formElements.terms.addEventListener('change', updateSubmitButtonState);


    updateSubmitButtonState();
});
