var Widget = fw.create({
	
	
  constructor : function(config) {	  
	var wgt = this;
    this._config = config;
    this.children = new Array();
    this.parent = null;
    this.uuid = generateUUID();
    
    
    this.createConfig(config);
    
    this.children.oldpush = this.children.push;
    this.children.push = function(obj){    	
    	obj.parent = wgt;
    	wgt.children.oldpush(obj);
    };
  
  },
  
  createConfig:function(config){
	  try{
	    for(var k in config){
			if(k=="children"){
				continue;
			}
			var first = k[0].toUpperCase();		
			eval("this.set"+first+k.substring(1)+"(config[k])");
		}
	  }catch(err){
		  console.error("Error creating config for ");
	  }
  },
  
  getParent:function(){
	  return this.parent;
  },
  
  setParent:function(parent){
	  this.parent = parent;
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
    
  },
  
  renderCompleted:function(){
	   
  },
  
  instance:function(clazz){
	  return ring.instance(this,clazz);
  }
});