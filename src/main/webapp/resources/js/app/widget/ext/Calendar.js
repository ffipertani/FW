var ExtCalendar = fw.create([Calendar,ExtBaseWidget],{
 
  createExt:function(){	   
	  return this.createInstance('Ext.form.field.Date', {		   
		    bodyPadding: 10,		    
		    fieldLabel: this.label
		         
		});

  },
  
  
  changeValue:function(value){	
	  this.ext.setValue(value);
  }



});