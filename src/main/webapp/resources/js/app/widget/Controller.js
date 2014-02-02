var Controller = fw.create([Widget],{

  constructor:function(config){
		this.$super(config);
		this.grids = new Array();
		this.forms = new Array();
		this.models = new Array();
		this.data = null;
		this.model = null;
		if(this.pageSize==null){
			this.pageSize = 10;
		} 
		if(this.currentPage==null){
			this.currentPage = 0;
		}
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
		wgt.currentPage = 0; 
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
	grid.onSearch(function(filter){
		console.log	("ONSEARCH");
		var models = wgt.filter(filter);
		wgt.currentPage = 0;
		wgt.setData(models);
	});
	grid.onPageChange(function(page){		
		wgt.currentPage = page;
		wgt.setData(wgt.data);
	});
	grid.onSortChange(function(column,direction){
		//alert(wgt.models.length);
		var ordered = wgt.models.slice(0);
		ordered.sort(function(a,b) {
			 if (a[column] < b[column])
			     return -1;
			  if (a[column] > b[column])
			    return 1;
			  return 0;
		});
		if(direction=="DESC"){
			ordered.reverse();
		}
		wgt.setModels(ordered);
	});
	
	this.grids.push(grid);  
  },
  
  filter:function(filter){
	  return this.models.filter(function(obj) {
		    return Object.keys(filter).every(function(c) {
		    	if(filter[c]==null || filter[c]==""){
		    	return true;
		    	}
		      return obj[c] == filter[c];
		    });
		  });
  },
  
  setFormData:function(row,widget){     
     
 		var children = widget.getChildren();
		for(var i=0;i<children.length;i++){
			 var child = children[i];
			 if(child.instance(FormWidget)){	
				 
				if(this.model!=null){
					var toeval = "child.setValue(this.model."+child.getField()+")";
				    
				 	eval(toeval);	
				}else{
					child.setValue(null);
				}
			 				 
			 }
		}
  },  
  
  setSelectedIndex:function(index){
	this.selectedIndex = index;
	if(index!=-1){
		
		this.model = this.data[index+(this.pageSize*(this.currentPage))];
	}else{
		this.model = null;
	}
	
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
			if(this.model!=null){
				var value = this.model[property];
				child.setModels(value);
			}else{
				child.setModels(new Array());
			}
			
			
		}
	}
  },
  
  
  setModels:function(models){	  
	  this.models = models;
	 this.setData(models);
	  	
  },
  
  setData:function(data){
	  this.data = data;
	  var pagedModels = this.doLocalPaging(data);
	  
	    var total = 0;
	    if(data.total==null){		 
	    	total = data.length;
	    }
	  for(var i=0;i<this.grids.length;i++){
		  this.grids[i].createContent(pagedModels,total,this.pageSize,this.currentPage+1);	
	  }		 
  },
  
  
  doLocalPaging:function(models){
	  var pagedModels = new Array();
	  
	
	  //Local paging
	  if(models.total==null){		 
		  var from = this.getFrom();
		  var to = from + this.pageSize;
		  console.log("FROM:"+from);
		  console.log("TO:"+to);
		  for(var i=from;i<to;i++){
			  pagedModels.push(models[i]);
		  }
		
	  }else{
		  pagedModels = models;
		  total = models.total;
	  }
	  return pagedModels;	
  },
  
  setCurrentPage:function(currentPage){
	  this.currentPage = currentPage;
  },
  getCurrentPage:function(){
	  return this.currentPage;
  },
  getFrom:function(){
	  return this.currentPage * this.pageSize;
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
	  
  },
  
  setPageSize:function(){
	  return this.pageSize;
  },
  
  getPageSize:function(pageSize){
	  this.pageSize = pageSize;
  }
  
  
   
});