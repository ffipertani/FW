var ExtLookupGrid = fw.create([LookupGrid,ExtGrid,ExtBaseWidget],{

	 
 createExt:function(){
	 var title = this.title;
	 this.title=null;
	 console.log("Calling super "+ this.data.length);
	this.$super();
	this.title = title;
	return this.ext;
 },
 
 open:function(data){
	 
	 this.setData(data);
	 this.grid = this.createExt();
	  this.ext = this.createInstance('Ext.window.Window', {
		   title : this.title,
		    height:parseInt(this.height), 
		    width:parseInt(this.width),	
		    items:[this.grid]
		});
	this.ext.show(); 
 },

 
 createContent:function(data){
	 //this.store.data = data;	
	 this.grid.store.loadData(data,true);
     this.grid.getView().refresh();
 },
 
 close:function(){	
	  this.ext.destroy();
	  
 }
 
 
 
 
});