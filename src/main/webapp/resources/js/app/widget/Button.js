var Button = BaseWidget.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  setLabel : function(label){
	  this.label = label;
  },
  
});