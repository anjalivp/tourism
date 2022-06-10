function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


//  function to validate form 
function validateForm() {
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailErr = passwordErr = true;
    
    // Validate email address
    // Regular expression for basic email validation
    var regex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else if(regex.test(email) === false) {
        printError("emailErr", "Please enter a valid email address");
    }  else{
        printError("emailErr", "");
        emailErr = false;
    }
       
      
    
    
   // Validate password
    var passregex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}([\d@$!%*#?&]{0,})$/;
     
    if(password == "") {
        printError("passwordErr", "Please enter your password");
    } else if(password.length < 8){
        printError("passwordErr", "Password must be atleast 8 characters");
    }else if(passregex.test(password) === false) {
        printError("passwordErr", "Password must contain atleast one uppercase, lowercase and digit");
    } else{
        printError("passwordErr", "");
        passwordErr = false;
       }
  
    
    // Prevent the form from being submitted if there are any errors
    if((emailErr || passwordErr) == true) {
       return false;
    } else {
      
        var dataPreview = "login successful";
       
        
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
}


//function to check password strength

let passwordInput = document.querySelector('#passwordInput input[type="password"]');
    let passwordStrength= document.getElementById('passwordStrength');
    let poor = document.querySelector('#passwordStrength #poor');
    let weak = document.querySelector('#passwordStrength #weak');
    let strong = document.querySelector('#passwordStrength #strong');
    let passwordInfo = document.getElementById('passwordInfo');
  
    let poorRegExp = /[a-z]/;
    let weakRegExp = /(?=.*?[0-9])/;;
    let strongRegExp = /(?=.*?[#?!@$%^&*-])/;
    let whitespaceRegExp = /^$|\s+/;
    function pswd_str(){
   
         let passwordValue= passwordInput.value;
         let passwordLength= passwordValue.length;
         let poorPassword= passwordValue.match(poorRegExp);
         let weakPassword= passwordValue.match(weakRegExp);
         let strongPassword= passwordValue.match(strongRegExp);
         let whitespace= passwordValue.match(whitespaceRegExp);
 if(passwordValue != ""){
     passwordStrength.style.display = "block";
     passwordStrength.style.display = "flex";
     passwordInfo.style.display = "block";
     passwordInfo.style.color = "black";
     if(whitespace)
     {
      passwordInfo.textContent = "whitespaces are not allowed";
     }else{
     poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
     weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
     strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword);
    }
     
   }else{
     
     passwordStrength.style.display = "none";
     passwordInfo.style.display = "none";
    
   }
 }
function poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
      if(passwordLength <= 3 && (poorPassword || weakPassword || strongPassword))
        {
       poor.classList.add("active");
       passwordInfo.style.display = "block";
       passwordInfo.style.color = "red";
       passwordInfo.textContent = "Your password is very poor";
          
        }
}
function weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
   if(passwordLength>= 4 && poorPassword && (weakPassword || strongPassword))
    {
     weak.classList.add("active");
     passwordInfo.textContent = "Your password is medium";
     passwordInfo.style.color = "orange";
   
   }else{
     weak.classList.remove("active");
     
   }
}
function strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword){
  if(passwordLength >= 6 && (poorPassword && weakPassword) && strongPassword)
    {
     poor.classList.add("active");
     weak.classList.add("active");
     strong.classList.add("active");
     passwordInfo.textContent = "Your password is strong";
     passwordInfo.style.color = "green";
   }else{
     strong.classList.remove("active");
     
   }
}
