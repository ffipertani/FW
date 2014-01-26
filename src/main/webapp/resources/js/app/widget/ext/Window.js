var ExtWindow = fw.create([Window,ExtBaseWidget],{
  
  
  open:function(url,listener){
	  var wgt = this;
	    
	  if(this.opened == true){
		  return;
	  }
	  this.url = url;
	  
	  this.createInstance('Ext.window.Window', {
		    title: this.title,
		    height:this.height, 
		    width:this.width,		   
		});
	 
	  var view = new View(url,function(widget){	
		  var ext = widget.ext;
		  ext.title = null;
		  wgt.ext.add(ext);
		  wgt.ext.show();
	  });	  
      view.create();
  },
  
  close:function(){
	  this.opened = false;
	  this.ext.destroy();
	  
  }
   
 
});