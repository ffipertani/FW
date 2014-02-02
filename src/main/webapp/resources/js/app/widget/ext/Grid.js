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
				    sortOnLoad: false,
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
	 this.paginator = Ext.create('Ext.toolbar.Paging',{
       	
    	  store: this.store,
    	  dock: 'bottom',
    	  displayInfo: true,
    	  listeners: {
    	        'beforechange' : function(toolbar,page,opts){ 
    	             wgt.pageChange(page);
    	             return false;
    	         },
    	         'afterrender' :function(itex,opts){
    	   		 // 	alert("CIAO");
    	   		// this.next.on('click', function () { alert('next'); });
    	   		  	//alert(this.next);  
    	         }
    	  }
	 });
	 
	
	 dockedItems.push(this.paginator);
		   
	 console.log("creating store");
	 this.ext =  Ext.create('Ext.grid.Panel', {
		    title: this.title,
		    store: this.store,
		    
		    viewConfig: {forceFit: true,loadMask : false}, 
		    columns: [
		       columns
		    ],
		    listeners: {
		    	beforeheaderfiltersapply:function(grid, filters, store){ wgt.search(filters);return false;},
		    	selectionChange:function(sender, selected, eOpts ){wgt.selectionChange(wgt,selected)},
		    	sortchange:function( ct, column, direction, eOpts ){wgt.sortChange(column,direction);return false;},
		    },
		 //   height: 450,
		    width: '100%',
		    dockedItems: dockedItems,		   
		    plugins: [Ext.create('Ext.ux.grid.HeaderFilters')],
		  
		});
	 return this.ext;
 },
 
 sortChange:function(column,direction){
	console.log(column.dataIndex+"["+direction+"]"); 
	 for(var i=0;i<this.sortChangeListener.length;i++){
		 var listener = this.sortChangeListener[i];
		 listener(column.dataIndex,direction);
	 }
 },
 
 selectionChange:function(wgt, selected ){
	 
	 for(var i=0;i<wgt.rowChangeListeners.length;i++){
		 var listener = wgt.rowChangeListeners[i];
		 var selectedRecord = selected[0];
		 var row=-1;
		 var data = null;
		 if(selectedRecord!=null){
			 try{
			 row = this.store.indexOf(selectedRecord);
			 data = selectedRecord.data;
		 	 }catch(err){
		 		 row = -1;
		 		 data = null;
		 	 }
			 
		 }
		 listener(row,data);
	 }
 },
 
 pageChange:function(page){	 
	 for(var i=0;i<this.pageChangeListeners.length;i++){
		 var listener = this.pageChangeListeners[i];
		 listener(page-1);
	 }
 },
 
 search:function(filter){
	 
	 for(var i=0;this.searchListeners.length;i++){
		 var listener = this.searchListeners[i];
		 
		 listener(filter);
		 
	 }
	
	 
	// return false;
 },
 
 
 createContent:function(data,total,pageSize,page){
	 
	 //this.store.data = data;
	  this.store.totalCount= total;
	  this.store.pageSize = pageSize;
	  this.store.currentPage = page;
	 this.store.loadData(data,false);
     
     this.paginator.onLoad();
     this.ext.getView().refresh();
 }
 
 
 
 
});