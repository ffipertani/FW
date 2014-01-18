var BaseWidget = Widget.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  setWidth : function(width){
	  this.width = width;
  },
  
  getWidth : function(){
	  return this.width;
  },
  
  setHeight : function(height){
	  this.height = height;
  },
  
  getHeight : function(){
	  return this.height;
  }
  
   
});