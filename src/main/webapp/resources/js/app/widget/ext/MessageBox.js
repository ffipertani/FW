MessageBox.open = function(type,message,title,handler){
	 var icon = null;   
	 if(type=="error"){
		icon = Ext.MessageBox.ERROR;
	}else if(type=="warning"){
		icon = Ext.MessageBox.WARNING;
	}else if(type=="question"){
		icon = Ext.MessageBox.QUESTION;
	}else if(type=="info"){
		icon = Ext.MessageBox.INFO;
	}
        Ext.MessageBox.show({
           title: title,
           msg: message,
           buttons: Ext.MessageBox.OK,
        //   animateTarget: 'mb9',
           fn: handler,
           icon:icon
       });
     
};