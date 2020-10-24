validate = () => {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var emailId = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone').value;
    var city = document.getElementById('city').value;
    var currentDesignation = document.getElementById('designation').value;
    var salary = document.getElementById('salary').value;

    var firstNameREGX = /^[A-Z]{1}([a-z]{2,15})$/;
    var lastNameREGX = /^[A-Z]{1}([a-z]{2,15})$/;
    var emailREGX = /^[0-9a-zA-Z]+([+_.-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{2,3}){1,2}$/;
    var phoneREGX = /^([0-9]{2}[ ]+)?[0-9]{10}$/;
    var cityREGX = /^[A-Z]{1}([a-z]{2,15})$/;
    var designationREGX = /^[A-Z]{1}([a-z]{2,15})$/;
    var salaryREGX = /^[0-9]{4,8}$/;

    if (firstNameREGX.test(firstName)) {
        document.getElementById('firstNameError').innerHTML = " ";
    }
    else {
        document.getElementById('firstNameError').innerHTML = " *First Name is invalid* ";
        return false;
    }
    if (lastNameREGX.test(lastName)) {
        document.getElementById('lastNameError').innerHTML = " ";
    }
    else {
        document.getElementById('lastNameError').innerHTML = " *Last Name is invalid* ";
        return false;
    }
    if (emailREGX.test(emailId)) {
        document.getElementById('emailError').innerHTML = " ";
    }
    else {
        document.getElementById('emailError').innerHTML = " *Email is invalid* ";
        return false;
    }
    if (phoneREGX.test(phoneNumber)) {
        document.getElementById('phoneError').innerHTML = " ";
    }
    else {
        document.getElementById('phoneError').innerHTML = " *Phone Number is invalid* ";
        return false;
    }
    if (cityREGX.test(city)) {
        document.getElementById('cityError').innerHTML = " ";
    }
    else {
        document.getElementById('cityError').innerHTML = " *City is invalid* ";
        return false;
    }
    if (designationREGX.test(currentDesignation)) {
        document.getElementById('designationError').innerHTML = " ";
    }
    else {
        document.getElementById('designationError').innerHTML = " *Current Designation is invalid* ";
    }
    if (salaryREGX.test(salary)) {
        document.getElementById('salaryError').innerHTML = " ";
    }
    else {
        document.getElementById('salaryError').innerHTML = " *Salary is invalid* ";
    }
    return false;
}