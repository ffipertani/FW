var Widget = Class.$extend({
	
	
  __init__ : function(name) {
    this.name = name;
    this.children = new Array();
    this.uuid = generateUUID();
  },
  
  getUuid:function(){
	return this.uuid;  
  },
  
  getChildren:function(){
	  return this.children;
  },
  
  setJsName:function(jsName){
	  this.jsName = jsName;
  },
  
  setTextContent:function(textContent){
	  this.textContent = textContent;
  },
  
  bind:function(){
	  
  },
  
  render : function(out) {
	
		
  },
  
  renderChildren:function(out){
	  var children = this.getChildren();
		
	  for(var i=0;i<children.length;i++){
			 var child = children[i];		
			 child.render(out);
	  }
  },

  remove : function() {
    
  }
});