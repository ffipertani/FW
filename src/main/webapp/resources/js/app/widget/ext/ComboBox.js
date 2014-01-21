var ExtComboBox = ComboBox.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  
  
  bind:function(){	   
	  var states = Ext.create('Ext.data.Store', {
		    fields: ['abbr', 'name'],
		    data : [
		        {"abbr":"AL", "name":"Alabama"},
		        {"abbr":"AK", "name":"Alaska"},
		        {"abbr":"AZ", "name":"Arizona"}
		        //...
		    ]
		});

		// Create the combo box, attached to the states data store
		Ext.create('Ext.form.ComboBox', {
		    fieldLabel: this.label,
		    store: states,
		    queryMode: 'local',
		    displayField: 'name',
		    valueField: 'abbr',
		    renderTo: this.uuid
		});

  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'"></div>');
  },

  remove : function() {
    
  }
});