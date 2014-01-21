var JQCheckBox = CheckBox.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  bind:function(){	   
	  $("#"+this.uuid).jqxCheckBox({width: 220, height: 220});
  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'"><span>'+this.label+'</span></div>');
  },

  remove : function() {
    
  }
});