var ExtPage = fw.create([Page,ExtBaseWidget],{

  bind:function(){
		
	var renderTo = this.uuid;
	if(this.rendered==null){
		renderTo=null;
	}
	var items = this.createItems();
	 this.ext = Ext.create('Ext.panel.Panel', {
		    title: this.title,
		  items:items,
		  layout: 'fit',
		   // width: 1200,		   
		    //height:1800,		    
		    renderTo:renderTo
	  });
	 
	 
  },
  
  render : function(out) {	  
	  this.rendered = true;
    out.push('<div id="'+this.uuid+'" >');
   
    this.renderChildren(out);
     
    out.push("</div>");
  },

  remove : function() {
    
  }
  
  
});