function SignIn() {
   var y = document.getElementsByClassName("signin");
   if (y[0].innerHTML=="Sign In/Create Account") {
      document.getElementById("div-modal-container").style.display="block";
      document.getElementById("input-username").value="";
      document.getElementById("input-password").value="";  
   }
   else{
         if (confirm("Do you want to log out now?.")) {
            y[0].innerHTML="Sign In/Create Account";
         } 
   }
}
function submitLoginForm(){
   var x=document.getElementById("signin_form");
   var name=x.elements[0].value;
   var pass=x.elements[1].value;
   var y=document.getElementsByClassName("signin");
   if (name !="" & pass!="" ){
      y[0].innerHTML=name; 
      document.getElementById("div-modal-container").style.display="none";
   }
   else{
      alert("You must enter username and password")
   }
}

function closeLoginForm(){
   document.getElementById("div-modal-container").style.display="none";
}

 //Stop and Move the marquee
 function pause() {
    document.getElementById("marquee-news").stop();  
 }
 function move() {
   document.getElementById("marquee-news").start();  
}

