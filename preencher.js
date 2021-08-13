function(element,TextToWrite) {
	
	TextToWrite = TextToWrite.split(';')
	
	i=0;
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'First Name'){
			document.getElementsByTagName('input')[i].value = TextToWrite[0] ;
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length)

	i=0;
	
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'Last Name'){
			document.getElementsByTagName('input')[i].value = TextToWrite[1] ;
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length)

	i=0;
	
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'Email'){
			document.getElementsByTagName('input')[i].value = TextToWrite[2] ;
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length)

	i=0;
	
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'Phone Number'){
			document.getElementsByTagName('input')[i].value = TextToWrite[3] ;
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length)

	i=0;
	
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'Company Name'){
			document.getElementsByTagName('input')[i].value = TextToWrite[4] ;
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length)

	i=0;
	
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'Address'){
			document.getElementsByTagName('input')[i].value = TextToWrite[5] ;
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length)
	
	i=0;
	
	do{
		if(document.getElementsByTagName('label')[i].innerText.trim() == 'Role in Company'){
			document.getElementsByTagName('input')[i].value = TextToWrite[6] ;
			break;
		}
		i++;
	}while(i<document.getElementsByTagName('label').length)
	document.querySelector('body > app-root > div.body.row1.scroll-y > app-rpa1 > div > div.inputFields.col.s6.m6.l6 > form > input').click();
}