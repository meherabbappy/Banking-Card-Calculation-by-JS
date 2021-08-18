document.getElementById("login-submit").addEventListener('click',function(){
    const emailField = document.getElementById("user-email");
    const userMail = emailField.value;
    // console.log(userMail);
    // get user input 
    const passwordField  = document.getElementById("user-password");
    const userPassword = passwordField.value;

    if(userMail == "bappy@gmail.com" && "userPassword == bappy"){
        // console.log("Valid All");
        window.location.href = "banking.html";
    }
})