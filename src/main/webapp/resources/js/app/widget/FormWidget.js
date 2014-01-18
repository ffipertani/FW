var FormWidget = BaseWidget.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  setLabel : function(label){
	  this.label = label;
  },
  
  getLabel : function(){
	  return this.label;
  },
 
  setValue:function(value){
	  this.value = value;
  }
  
   
});