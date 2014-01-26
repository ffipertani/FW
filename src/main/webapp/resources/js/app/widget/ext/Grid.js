var ExtGrid = fw.create([Grid,ExtBaseWidget],{

 createExt:function(){
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
	 
	 
	 this.store = Ext.create('Ext.data.Store', {
		    storeId:this.uuid+'Store',
		    fields:fields,
		    data:{'items':[]},
		    proxy: {
		        type: 'memory',
		        reader: {
		            type: 'json',
		           // root: 'items'
		        }
		    }
		});
	 
	 this.ext =  Ext.create('Ext.grid.Panel', {
		    title: this.title,
		    store: Ext.data.StoreManager.lookup(this.uuid+'Store'),
		    viewConfig: {forceFit: true}, 
		    columns: [
		       columns
		    ],
		    listeners: {
		    	selectionChange:function(sender, selected, eOpts ){wgt.selectionChange(wgt,selected)},
		    },
		    height: 450,
		    width: '100%',
		    dockedItems: [toolbar]
		});
	 return this.ext;
 },
 
 selectionChange:function(wgt, selected ){
	 
	 for(var i=0;i<wgt.rowChangeListeners.length;i++){
		 var listener = wgt.rowChangeListeners[i];
		 var selectedRecord = selected[0]; 
		 var row = this.ext.store.indexOf(selectedRecord);
		 listener(row,selectedRecord);
	 }
 },
 
 
 setData:function(data){
	 //this.store.data = data;
	  
	 this.store.loadData(data,false);
     this.ext.getView().refresh();
 }
 
 
 
 
});