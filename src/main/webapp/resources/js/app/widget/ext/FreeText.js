var ExtFreeText = fw.create([FreeText,ExtBaseWidget],{
  
 
  
  createExt:function(){
	  return this.createInstance('Ext.panel.Panel', {
		    title: this.title,
		    html:'<p>'+this.textContent+'</p>',
		    width: 800,		   
		    height:400		    
		   
	  });
  } 
});