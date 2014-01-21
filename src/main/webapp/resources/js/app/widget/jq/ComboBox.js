var JQComboBox = ComboBox.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  
  
  bind:function(){	   
	  $("#"+this.uuid).jqxComboBox({ width: '250', height: '25px'});
  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'"></div>');
  },

  remove : function() {
    
  }
});