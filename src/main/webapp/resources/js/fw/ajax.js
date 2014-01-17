function AjaxResult(ajax){
	var xmlhttp = ajax; 
	
	this.done = function(listener){
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				 listener(xmlhttp.responseText);
			}
		}
	}
}


function ajax(url){
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	
	xmlhttp.open("get", url, true);
	
	var res = new AjaxResult(xmlhttp);
	xmlhttp.send();
	return res;
	
}