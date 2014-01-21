var ExtText = Text.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

   
  
  
  bind: function(){
	  Ext.create('Ext.form.field.Text', {
		  name: 'name',
	        fieldLabel: 'Name',
	        allowBlank: false,  // requires a non-empty value
		    renderTo: this.uuid		   
		});

  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'"></div>');
  },

  remove : function() {
    
  }
});