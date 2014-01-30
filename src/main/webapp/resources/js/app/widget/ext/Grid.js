Ext.Loader.setConfig({
  enabled: true
});

Ext.Loader.setPath('Ext.ux', '/resources/js/app/lib/ext/examples/ux');
Ext.require('Ext.ux.data.PagingMemoryProxy');


var ExtGrid = fw.create([Grid,ExtBaseWidget],{

 constructor:function(config){
	 this.$super(config);
	 this.grid = null;
	 this.store=null;
	 this.data = null;
 },	
	
 createExt:function(){
	 if(this.getData()!=null){
	 console.log("im super "+ this.data.length);
	 }else{
		 console.log("im super data is null");	 
	 }
	 var wgt = this;
	 var columns = new Array();
	 var fields = new Array();
	 var children = this.getChildren();	
	 var toolbar = null;
	 	
		for(var i=0;i<children.length;i++){
			var child = children[i];
			if(child.instance(Column)){
				columns.push(child.createExt());
				
				fields.push(child.getField());
			}
			if(child.instance(Toolbar)){				
				toolbar = child.createExt();				
			}
		}
	 
	 var storeConfig = {			 
				    storeId:this.uuid+'Store',
				    fields:fields,		   				     
				    proxy: {
				    	type: 'memory',
				        reader: {
				            type: 'json',
				           // root: 'items'
				        }
				    },
				    pageSize:10
	 };
	 if(this.data!=null && this.data != 0){
		 console.log("Setting data");
		 storeConfig.data = this.data;
	 }
	 this.store = Ext.create('Ext.data.Store', storeConfig);
	 
	 var dockedItems = new Array();
	 if(toolbar!=null){
		 dockedItems.push(toolbar);
	 }
	 dockedItems.push({
		                	  xtype: 'pagingtoolbar',
		                	  store: this.store,
		                	  dock: 'bottom',
		                	  displayInfo: true,

		                  });
	 console.log("creating store");
	 this.ext =  Ext.create('Ext.grid.Panel', {
		    title: this.title,
		    store: this.store,
		    viewConfig: {forceFit: true}, 
		    columns: [
		       columns
		    ],
		    listeners: {
		    	selectionChange:function(sender, selected, eOpts ){wgt.selectionChange(wgt,selected)},
		    },
		    height: 450,
		    width: '100%',
		    dockedItems: dockedItems,		   
		    plugins: [Ext.create('Ext.ux.grid.HeaderFilters')],
		  
		});
	 return this.ext;
 },
 
 selectionChange:function(wgt, selected ){
	 
	 for(var i=0;i<wgt.rowChangeListeners.length;i++){
		 var listener = wgt.rowChangeListeners[i];
		 var selectedRecord = selected[0]; 
		 var row = this.store.indexOf(selectedRecord);
		 listener(row,selectedRecord.data);
	 }
 },
 
 
 createContent:function(data){
	 //this.store.data = data;
	   
	 this.store.loadData(data,false);
     this.ext.getView().refresh();
 }
 
 
 
 
});