function View(url,listener){
	this.url = url;
	this.root = null;
	this.listener = listener;
	
	this.getRoot = function(){
		return this.root;
	};
	
	this.create = function(render){
		console.log("creating view " + this.url + " render " + render);
		var view = this;	
		ajax(this.url).done(function(resp){
			//console.log(resp);
			try{
			var jj = JSON.parse(resp);
			var root = view.createWidget(jj);
			
			view.root = root;
			if(render==true){				
				view.renderWidget(root);
			}
			view.bindWidget(root);			
			view.renderCompleted(root);
			
			if(view.listener!=null){
				view.listener(root);
			}
			}catch(err){
				console.error(err);
				//alert("Errore durante la creazione della view." + err);
			}
		});
		 
	};
	
	this.renderTo = function(id){		
		this.id = id;
		this.create(true); 
	};
	
	this.renderCompleted = function(widget){
		var children = widget.getChildren();
		
		
		for(var i=0;i<children.length;i++){
			var child = children[i];			
			this.renderCompleted(child);
		}
		
		widget.renderCompleted();
		
	}
	
	this.bindWidget = function(widget){
		var children = widget.getChildren();
		
		widget.bind();
		widget.binded = true;
		
		for(var i=0;i<children.length;i++){
			var child = children[i];
			this.bindWidget(child);
		}
	}
	
	this.renderWidget = function(widget){		 
		var out = new Array();
		widget.render(out);
		document.getElementById(this.id).innerHTML = out.join("");
	}
	
	this.createWidget = function(node){
		console.log("render node " + node.jsName);
		var name = node.jsName;
		var children = node.children;
		var config = new Object();
		for(var k in node){
			if(k=="children"){
				continue;
			}
			config[k] = node[k];
		}
		var widget = eval("new "+name+"(config);");
		
		for(var i=0;i<children.length;i++){
			var child = children[i];
			var childWidget = this.createWidget(child);
			
			widget.getChildren().push(childWidget);			
		}
		return widget;
	}
	
}