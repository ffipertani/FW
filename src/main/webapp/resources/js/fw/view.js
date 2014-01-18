function View(id){
	this.id = id;
	this.root = null;
	
	this.getRoot = function(){
		return this.root;
	}
	
	this.renderView = function(name){
		var view = this;
		//ajax("http://localhost:8080/FW/template/get/simple.xml").done(function(resp){
		ajax(name).done(function(resp){
			console.log(resp);
			var jj = JSON.parse(resp);
			var root = view.createWidget(jj);
			view.root = root;
			view.renderWidget(root);
			view.bindWidget(root);
		});
	}
	
	
	this.bindWidget = function(widget){
		var children = widget.getChildren();
		
		widget.bind();
		
		for(var i=0;i<children.length;i++){
			var child = children[i];
			this.bindWidget(child);
		}
	}
	
	this.renderWidget = function(widget){
		var out = new Array();
		widget.render(out);
		console.log(this.id);
		document.getElementById(this.id).innerHTML = out.join("");
		console.log(out.join(""));
	}
	
	this.createWidget = function(node){
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
		
		
		for(var i=0;i<children.length;i++){
			var child = children[i];
			var childWidget = this.createWidget(child);
			widget.getChildren().push(childWidget);
		}
		return widget;
	}
	
}