var ExtCheckBox = CheckBox.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  bind:function(){	   
	  Ext.create('Ext.form.field.Checkbox', {
		  boxLabel  : this.label,
          name      : 'topping',
          
          renderTo: this.uuid

	  });

  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'"></div>');
  },

  remove : function() {
    
  }
});