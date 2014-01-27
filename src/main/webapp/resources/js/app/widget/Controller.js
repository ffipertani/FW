var Controller = fw.create([Widget],{

  constructor:function(config){
		this.$super(config);
		this.grids = new Array();
		this.forms = new Array();
		this.models = new Array();
		this.model = null;
		 
		//this.rowChangeListeners = new Array();	
  },
  
  renderCompleted:function(){
	  var wgt = this;
	  var page = this.getPage();
	  page.onCreationComplete(function(){
		
		  if(wgt.getAutoSearch()){
			  wgt.search();
		  }
	  });

  },
  
  search:function(){
	 var wgt = this; 
	 var res = this.doSearch();
	 res.done(function(resp){
		 
		var models = JSON.parse(resp);
		wgt.setModels(models);
		
	 });
  },
  
  doSearch:function(){
	  console.log("onSearch not yet implemented!!");
  },
  
  
  addForm:function(widget){
	this.forms.push(widget); 
  },
  
  addGrid:function(grid){
	var wgt = this;
	
	grid.onRowChange(function(row,selected){
		console.log(row+" "+selected);
		wgt.setSelectedIndex(row);
	});
	this.grids.push(grid);  
  },
  
  setFormData:function(row,widget){     
     
 		var children = widget.getChildren();
		for(var i=0;i<children.length;i++){
			 var child = children[i];
			 if(child.instance(FormWidget)){				 
			 	var toeval = "child.setValue(this.model."+child.getField()+")";
			    
			 	eval(toeval);				 
			 }
		}
  },  
  
  setSelectedIndex:function(index){
	this.selectedIndex = index;
	this.model = this.models[index];
	
	for(var i=0;i<this.forms.length;i++){
		this.setFormData(index,this.forms[i]);
	}
	
	
	
	var children = this.getChildren();
	for(var i=0;i<children.length;i++){
		var child = children[i];
		if(child.instance(Controller)){
			var property = child.getProperty();
			 
			if(property == null){
				continue;
			}
			var value = this.model[property];
			
			child.setModels(value);
		}
	}
  },
  
  
  setModels:function(models){
	  var wgt = this;
	  wgt.models = models;
		for(var i=0;i<wgt.grids.length;i++){
			
			wgt.grids[i].setData(models);	
		}		
  },
  
  
  
  
  
  setAutoSearch:function(autoSearch){
	  this.autoSearch = autoSearch;
  },
  
  getAutoSearch:function(){
	  return this.autoSearch;
  },
  
  
  setId:function(id){
	  this.id = id;
  },
  
  getId:function(){
	  return this.id;
  },
  
  setProperty:function(property){
	  this.property = property;
  },
  
  getProperty:function(){
	  return this.property;
  },
  
  
  getPage:function(){
	  var wgt = this;
	 
	  return wgt.parent.getPage();
	  
  }
  
   
});