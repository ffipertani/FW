var Script = fw.create([BaseWidget],{
  

	
  setContent : function(content){
	  this.content = content;
  },
  
  renderCompleted:function(){
	  var page = this.getPage();
	  var context = new Array();
	  context = this.createContextMap(page,context);
	  
	  var script = "\n";
	  for(var id in context) {				  
		  script += "var "+id+" = context['"+id+"'];\n";
	  }
	  script+=this.content;
	  script +="\n";
	  
	  this.funct = new Function("context", script);
	  this.funct(context);	

  },

  createContextMap :function(widget,context){
	 // console.log(widget.jsName);
	 
	  if(widget!=null && widget.getId!=null && widget.getId()!=null){
		  context[widget.getId()] = widget;
	  }
	  var children = widget.getChildren();
	  for(var i=0;i<children.length;i++){
		  var child = children[i];
		  context = this.createContextMap(child,context);		  
	  }
	  return context;
  }
   
  
 
});