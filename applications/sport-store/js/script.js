function SignIn() {
    var retVal = confirm("Have you already had an account ?");
    if( retVal == true ) {
       var username = prompt("Username: ", "your username here");
       var password = prompt("Password: ");
       return true;
    } else {
        alert ("You should sign up now !");
       return false;
    }
 }