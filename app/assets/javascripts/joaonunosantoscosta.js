
/* joaonunosantoscosta page javascript */
function getDate()
{ 
	var birthday = new Date("1984/9/15");
    var today = new Date();
    var thisYear = 0;
    if (today.getMonth() < birthday.getMonth()) {
        thisYear = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
        thisYear = 1;
    }
    var age = today.getFullYear() - birthday.getFullYear() - thisYear;
	document.getElementById('getDate').innerHTML = age;
    return age;
}
function getDate2()
{ 
	var birthday = new Date("1984/9/15");
    var today = new Date();
    var thisYear = 0;
    if (today.getMonth() < birthday.getMonth()) {
        thisYear = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
        thisYear = 1;
    }
    var age = today.getFullYear() - birthday.getFullYear() - thisYear;
	document.getElementById('getDate2').innerHTML = age;
    return age;
}


<!--
var aberto = "entrada"; // 
var color_tab_opened = '#FFFFFF';
var color_tab_closed = '#EEDDBB';

function abrir_tab(aabrir)
{
	document.getElementById( 'mc_' + aberto ).style.display = "none";
	document.getElementById( 'tab_' + aberto ).style.backgroundColor = color_tab_closed;
	document.getElementById( 'mc_' + aabrir ).style.display = "block";
	document.getElementById( 'tab_' + aabrir ).style.backgroundColor = color_tab_opened;
	aberto = aabrir;
	return false;
}
//-->

<!--
// Esconde a publicidade do 100WEBSpace
var expregNumero=/^[0-9]+$/;
for(var i=0; i<document.body.childNodes.length; i++)
{
	if (expregNumero.test(document.body.childNodes[i].id))
	{
		document.body.childNodes[i].style.display = "none";
		break;
	}
}
//-->



function getCurrentDate()
{ 
	var d = new Date();
	var year = d.getFullYear();
	document.getElementById("currentDate").innerHTML = "ano de " + year;
	return true;
}

function getCurrentDate2()
{ 
	var d = new Date();
	var year = d.getFullYear();
	document.getElementById("currentDate2").innerHTML = "year " + year;
	return true;
}
