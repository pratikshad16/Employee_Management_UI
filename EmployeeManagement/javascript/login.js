validate = () => {
    $(document).ready(function () {
         //var searchValue = [];
        $.getJSON("../json/user.json", (data) => {
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;

            $.each(data, (key, value) => {
                if (value.username == username) {
                    if (value.password == password) {
                        document.getElementById('passworderror').innerHTML = "success";
                        window.location = './dashBoard.html'
                    }
                    else {
                        document.getElementById('passworderror').innerHTML = "Password Error";
                        return false;
                    }
                }
                else {
                    document.getElementById('usererror').innerHTML = "Username Error";
                    return false
                }
            })

        })

    })
}

