var BaseWidget = fw.create([Widget],{

  
  setId:function(id){
	  this.id = id;
  },
  
  getId:function(){
	  return this.id;
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
  },
  
  getPage:function(){
	  var wgt = this;
	  if(this.parent==null){
		  return this;
	  }
	 
	  return wgt.parent.getPage();
	  
  }
  
   
});