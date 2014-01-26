var ExtToolbar = fw.create([Toolbar,ExtBaseWidget],{

    createExt:function(){    	
    	var items = this.createItems();
    	
    	return this.createInstance('Ext.toolbar.Toolbar',{
    		items:items,
    		dock:'top'
    	});
    }
  
   
});