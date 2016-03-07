/* Formulário Contacto */
function validateContactForm()
{ 

	var name=document.forms["contactform"]["name"].value;
	var email=document.forms["contactform"]["email"].value;
	var message=document.forms["contactform"]["message"].value;

	var error="";
	var ret=true;

	document.getElementById("errorName").style.display = "none"; 
	document.getElementById("errorEmail").style.display = "none"; 
	document.getElementById("errorMessage").style.display = "none"; 
	
	if (name==null || name=="")
	{		
		document.getElementById("errorName").style.display = "block";  
		ret=false;
	}
	if (email==null || email=="")
	{		
		document.getElementById("errorEmail").style.display = "block";  
		ret=false;
	}
	if (message==null || message=="")
	{
		document.getElementById("errorMessage").style.display = "block";  
		ret=false;
	}
	console.log(ret);
	//alert(error);
	
	return ret;
}
