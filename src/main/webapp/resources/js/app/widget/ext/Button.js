var ExtButton = Button.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  bind:function(){
	  Ext.create('Ext.Button', {
		    text: this.label,
		    renderTo: this.uuid,        
		    handler: function() {
		        alert('You clicked the button!')
		    }
		});

  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'" ></div>');
  },

  remove : function() {
    
  }
});