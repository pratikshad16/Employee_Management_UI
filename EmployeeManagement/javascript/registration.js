validate = () => {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var emailId = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone').value;
    var passWord = document.getElementById('password').value;
    var confirmPassword = document.getElementById('cpassword').value;

    var firstNameREGX = /^[A-Z]{1}([a-z]{2,15})$/;
    var lastNameREGX = /^[A-Z]{1}([a-z]{2,15})$/;
    var emailREGX = /^[0-9a-zA-Z]+([+_.-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{2,3}){1,2}$/;
    var phoneREGX = /^([0-9]{2}[ ]+)?[0-9]{10}$/;
    var passwordREGX = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%+!]{1}).{8,}/;
    var confirmPasswordREGX = passwordREGX

    if (firstNameREGX.test(firstName)) {
        document.getElementById('firstNameError').innerHTML = " ";
    }
    else {
        document.getElementById('firstNameError').innerHTML = " *First Name is invalid*";
        return false;
    }
    if (lastNameREGX.test(lastName)) {
        document.getElementById('lastNameError').innerHTML = " ";
    }
    else {
        document.getElementById('lastNameError').innerHTML = " *Last Name is invalid*";
        return false;
    }
    if (emailREGX.test(emailId)) {
        document.getElementById('emailError').innerHTML = " ";
    }
    else {
        document.getElementById('emailError').innerHTML = " *Email is invalid*";
        return false;
    }
    if (phoneREGX.test(phoneNumber)) {
        document.getElementById('phoneError').innerHTML = " ";
    }
    else {
        document.getElementById('phoneError').innerHTML = " *Phone Number is invalid*";
        return false;
    }
    if (passwordREGX.test(passWord)) {
        document.getElementById('passwordError').innerHTML = " ";
    }
    else {
        document.getElementById('passwordError').innerHTML = " *Password is invalid*";
        return false;
    }
    if (confirmPasswordREGX.test(confirmPassword)) {
        document.getElementById('cpasswordError').innerHTML = " ";
    }
    else {
        document.getElementById('cpasswordError').innerHTML = " *Password is not matching*";
    }
    return false;
}
