var Tab = Widget.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },
  
  setLabel:function(label){
	  this.label = label;
  },
  
  getLabel:function(label){
	  return this.label;
  }

  
});