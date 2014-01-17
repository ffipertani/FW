var Widget = Class.$extend({
	
	
  __init__ : function(name) {
    this.name = name;
    this.children = new Array();
  },
  
  getChildren:function(){
	  return this.children;
  },
  setJsName:function(jsName){
	  this.jsName = jsName;
  },

  
  bind:function(){
	  
  },
  render : function(out) {
    
  },

  remove : function() {
    
  }
});