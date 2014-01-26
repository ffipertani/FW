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
		wgt.models = models;
		for(var i=0;i<wgt.grids.length;i++){
			
			wgt.grids[i].setData(models);	
		}
		
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
		for(var i=0;i<wgt.forms.length;i++){
			wgt.setFormData(row,wgt.forms[i]);
		}
	});
	this.grids.push(grid);  
  },
  
  setFormData:function(row,widget){     
      var model = this.models[row];
 		var children = widget.getChildren();
		for(var i=0;i<children.length;i++){
			 var child = children[i];
			 if(child.instance(FormWidget)){				 
			 	var toeval = "child.setValue(model."+child.getField()+")";
			    
			 	eval(toeval);				 
			 }
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
  
  
  getPage:function(){
	  var wgt = this;
	 
	  return wgt.parent.getPage();
	  
  }
  
   
});