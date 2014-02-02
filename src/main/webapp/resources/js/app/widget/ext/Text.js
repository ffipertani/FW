var ExtText = fw.create([Text,ExtBaseWidget],{

  createExt: function(){
	  return this.createInstance('Ext.form.field.Text', {
		    name: this.field,
	        fieldLabel: this.label,
	        //allowBlank: false, 
		       
		});

  },

  changeValue:function(value){
	  this.ext.setValue(value);
  }
   
});