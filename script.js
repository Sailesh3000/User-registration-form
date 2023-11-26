function matchPassword() {  
    var pw1 = document.getElementById("pwd");  
    var pw2 = document.getElementById("cpwd");  
    if(pw1 != pw2)  
    {   
      alert("Passwords did not match");  
    } else {  
      alert("Password created successfully");  
    }  
  }  