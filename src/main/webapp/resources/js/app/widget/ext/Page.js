var ExtPage = Page.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  bind:function(){
	  Ext.create('Ext.panel.Panel', {
		    title: this.title,
		    width: 200,		   
		    renderTo:this.uuid
	  });
  
  },
  
  render : function(out) {
	  
    out.push('<div id="'+this.uuid+'" >');
   
    this.renderChildren(out);
     
    out.push("</div>");
  },

  remove : function() {
    
  }
});