var Widget = Class.$extend({
	
	
  __init__ : function(config) {
    this._config = config;
    this.children = new Array();
    this.uuid = generateUUID();
    
    for(var k in config){
		if(k=="jsName"||k=="children"){
			continue;
		}
		var first = k[0].toUpperCase();		
		eval("this.set"+first+k.substring(1)+"(config[k])")
	}
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