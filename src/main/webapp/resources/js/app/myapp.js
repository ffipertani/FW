ready(function(){
	var view = new View("http://localhost:8080/FW/template/get/ext.xml");
	view.renderTo("application");
});


var searchController=function(controller,widget){
	 
	if(widget.instance(Controller)){		
		if(widget.getId()==controller){			
			return widget;			
		}
	}
	var children = widget.getChildren();
	for(var i=0;i<children.length;i++){
		var child = children[0];
		return searchController(controller,child);
	}
};