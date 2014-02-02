var Lookup =  fw.create([Text],{
	
	renderCompleted:function(){
		var wgt = this;
		this.controller = new Controller({
			pageSize:wgt.pageSize,
		});

		if(this.getChildren().length>0){
			child = this.getChildren()[0];	
			child.setControllerInstance(this.controller);
			child.onRowChange(function(row,model){
				 wgt.setModel(child,model);
			});
		
			//child.setData(data);
		}	
	},
	
	open:function(){
		var wgt = this;
		
		this.controller.doSearch = this.doSearch;
		
		this.controller.search(function(models){
			wgt.doAfterSearch(models);
		});
		
		 /*
		this.doSearch().done(function(resp){
			var data = JSON.parse(resp);
			wgt.doAfterSearch(data);
		});
		 */
	},
	
	setModel:function(win,model){
		this.model = model;		
		this.changeValue(model);
		if(win!=null){
			win.close();
		}
	},
	
	doAfterSearch:function(data){
		var wgt = this;
		var children = this.getChildren();
		var child;
	
	   if(children.length>0){
			child = children[0];		
			child.open(data);
			/*
			child.onRowChange(function(row,model){
				 wgt.setModel(child,model);
				
			});
			*/
	
		//child.setData(data);
	   }
		
		
		/*
		var grid = new ExtGrid({
			jsName:"ExtGrid"
		});
	
	
		var popup = new ExtPopup({
			jsName:"ExtPopup",
			title:"Seleziona " +this.label,
			width:wgt.width,
			height:800,//this.height
		});
		
		 
		for(var i=0;i<columns.length;i++){			
			grid.addChild(columns[i]);
		}
		//popup.addChild(grid);
		
		popup.show();
		//grid.createExt();
	//	grid.setData(data);
	*/
	},
	
	doSearch:function(){
		alert("doSearch not implemented!!");
	},

	
	setDisplayField :function(displayField){
		this.displayField = displayField;
	},
	
	getDisplayField:function(){
		return displayField;
	},
	
	setValueField:function(valueField){
		this.valueField = valueField;
	},
	
	getValueField:function(){
		this.valueField = valueField;
	}

	
 
});