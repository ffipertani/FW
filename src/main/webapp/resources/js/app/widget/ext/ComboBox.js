var ExtComboBox = fw.create([ComboBox,ExtBaseWidget],{

  
  
  createExt:function(){	   
	  this.store = Ext.create('Ext.data.Store', {
		    fields: [this.displayField, this.valueField],
		    data : []
		});

		 
		return this.createInstance('Ext.form.ComboBox', {
		    fieldLabel: this.label,
		    store: this.store,
		    queryMode: 'local',
		    displayField: this.displayField,
		    valueField: this.valueField,		    
		});

  },
  
  changeValue:function(value){
	  this.ext.setValue(value);
  },
  
  setData:function(data){
	  this.store.loadData(data,false);
	  
  }
  
   
});