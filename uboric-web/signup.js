var userDataArr = JSON.parse(localStorage.getItem("userData")) || [];
    document.querySelector("#form").addEventListener("submit", storeData);
    var form = document.querySelector("#form");
    function storeData() {
        event.preventDefault()
        var dataObj = {
            name:form.name.value,
            email: form.email.value,
            number: form.number.value,
            password: form.password.value,
        }
        userDataArr.push(dataObj)
        localStorage.setItem("userData", JSON.stringify(userDataArr))
        window.location.href = "login.html"
        form.reset();
    }
    function signupPage() {
        window.location.href = "signup.html"
    }
    function loginPage() {
        window.location.href = "login.html"
    }