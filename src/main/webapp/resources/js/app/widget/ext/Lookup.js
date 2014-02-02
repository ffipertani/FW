var ExtLookup = fw.create([Lookup,ExtBaseWidget],{

	
  createExt: function(){
 
	  var wgt = this;
	  
	  
	  return this.createInstance('Ext.form.field.Trigger', {
		    name: this.field,
	        fieldLabel: this.label,
	        triggerWrapCls  :'x-form-trigger-wrap mylookup x-btn-default-small',
	        //allowBlank: false, 
		      onTriggerClick:function(){
		    	 wgt.open();
		      } 
		});

  },

  changeValue:function(value){	
	  if(value!=null){
		  this.ext.setValue(value[this.displayField]);
	  }else{
		  this.ext.setValue(null);
	  }
  }
   
});