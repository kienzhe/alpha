var fullname = document.forms['getform']['fullname'];
var email = document.forms['getform']['email'];

var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');

function validate(){
    if (fullname.value == ""){
        fullname.style.border = "1px solid red";
        name_error.textContent = "This is required";
        fullname.focus();
        return false;
    } else {
        fullname.style.border = "";
        name_error.textContent = "";
    }

    if (email.value == ""){
        email.style.border = "1px solid red";
        email_error.textContent = "This is required";
        email.focus();
        return false;
    } else {
        email.style.border = "";
        email_error.textContent = "";
    }
    alert("your subject has been submitted")
    return true;
}