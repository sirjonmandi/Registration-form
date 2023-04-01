function check() {
    var name = document.form.name.value;

    if (name == null || name == "" || name.trim() == 0) {
        document.form.name.placeholder = "* enter your name here";
        document.form.name.style.border = "1px solid red";
        return false;
    }else if(name.length<5) {
        document.form.name.placeholder = "* name must be more than 5 characters";
        document.form.name.style.border = "1px solid red";
        return false;
    }

    var number = document.form.phone.value;
    if (number == null || number == "") {
        document.form.phone.placeholder = "* enter your phone number here";
        document.form.phone.style.border = "1px solid red";
        return false;
    }else if(number.length != 10) {
        document.form.phone.placeholder = "* phone number must be 10 digits";
        document.form.phone.style.border = "1px solid red";
        return false;

    }

    var x=document.form.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      document.form.email.placeholder="* Please enter a valid e-mail address" ;
      document.form.email.style.border = "1px solid red"; 
      return false;  
      } 

    var adds = document.form.add.value;
    if( adds == null || adds == "" || adds.trim() == 0 ){
        document.form.add.placeholder="* Please enter your  address";
        document.form.add.style.border = "1px solid red";
        return false;
    }else if( adds.length<10){
        document.form.add.placeholder="* Address must be at least 10 characters";
        document.form.add.style.border = "1px solid red";
        return false;

    }

    var terms = document.form.term.checked;
    if (terms == false) {
        alert("you must accept the terms & conditions !");
        return false;
        
    }
}


