var ExtCalendar = Calendar.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  bind:function(){	   
	  Ext.create('Ext.form.field.Date', {
		    width: 300,
		    bodyPadding: 10,
		    title: 'Dates',
		    items: [{
		        xtype: 'datefield',
		        anchor: '100%',
		        fieldLabel: 'From',
		        name: 'from_date',
		        maxValue: new Date()  // limited to the current date or prior
		    }, {
		        xtype: 'datefield',
		        anchor: '100%',
		        fieldLabel: 'To',
		        name: 'to_date',
		        value: new Date()  // defaults to today
		    }],
		        renderTo:this.uuid
		});

  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'"></div>');
  },

  remove : function() {
    
  }
});