var ExtTab = fw.create([Tab,ExtBaseWidget],{
 
  createExt:function(){	   
	  var items = this.createItems();
	  return {
		  items:items,
		  xtype:'panel',
		  title:this.label
		  
	  }; 
	  /*
	  Ext.create('Ext.tab.Tab', {
		    	items:items,
		    	title:this.label
		});
		*/ 
		  
  },
    
});