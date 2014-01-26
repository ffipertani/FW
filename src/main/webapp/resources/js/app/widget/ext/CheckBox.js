var ExtCheckBox = fw.create([CheckBox,ExtBaseWidget],{

  createExt:function(){	   
	 return this.createInstance('Ext.form.field.Checkbox', {
		  boxLabel  : this.label,
          name      : 'topping',

	  });

  } 
});