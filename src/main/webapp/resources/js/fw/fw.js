ready(function(){
 
	function renderWidget(widget){
		var out = new Array();
		widget.render(out);
		var children = widget.getChildren();
		
		 
		for(var i=0;i<children.length;i++){
			var child = children[i];
			if(child==null){
				return;
			}
			 
			renderWidget(child);
		}
		
		document.body.innerHtml = out;
		console.log(out);
	}
	
	function createWidget(node){
		console.log("render node " + node.jsName);
		var name = node.jsName;
		var children = node.children;
		
		var widget = eval("new "+name+"(name);");
		for(var k in node){
			if(k=="jsName"||k=="children"){
				continue;
			}
			var first = k[0].toUpperCase();
			
			eval("widget.set"+first+k.substring(1)+"(node[k])")
		}
		console.log(JSON.stringify(widget));
		
		for(var i=0;i<children.length;i++){
			var child = children[i];
			var childWidget = createWidget(child);
			widget.getChildren().push(childWidget);
		}
		return widget;
	}
	
	ajax("http://localhost:8080/FW/template/get/simple.xml").done(function(resp){
		console.log(resp);
		var jj = JSON.parse(resp);
		var root = createWidget(jj);
		renderWidget(root);
	});
});
 
