var ExtForm = fw.create([Form,ExtBaseWidget],{

  createExt:function(){
	  var items = this.createItems();
	 return  this.createInstance('Ext.form.Panel', {
		    title: this.title,
		     items:items,
		     layout : {
		    	        type : 'table',
		    		        columns :4
		    		    },
		    		    defaults : {
		    		        padding : 10,
		    		        width : 300,
		    		        cellCls : 'verticalAlignTop',   
		    		        border : false,         
		    		    },
		    
		});

  } 
});