var Column = BaseWidget.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  setLabel : function(label){
	  this.label = label;
  },
  
  getLabel : function(){
	  return this.label;
  },
  
  setField : function(field){
	  this.field = field;
  },
  
  getField : function(){
	  return this.field;
  },
  
  bind:function(){
	 
  },
  
  render : function(out) {
    
  },

  remove : function() {
    
  }
});