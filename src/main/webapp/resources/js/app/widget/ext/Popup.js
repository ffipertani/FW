var ExtPopup = fw.create([Popup,ExtBaseWidget],{
  
  
  show:function(){
	  var items = this.createItems();
	 
	  var wgt = this;
	  this.createInstance('Ext.window.Window', {
		    title: wgt.title,
		    height:wgt.height, 
		    width:wgt.width,		 
	//	    items:items,
		});
	 
	 
		  
		  
		
	   this.ext.show();
	  	  
      
  },
  
  close:function(){
	  this.opened = false;
	  this.ext.destroy();
	  
  }
   
 
});