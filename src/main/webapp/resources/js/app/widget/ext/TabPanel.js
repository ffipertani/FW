var ExtTabPanel = TabPanel.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },
  
  bind:function(){	  
	  Ext.create('Ext.tab.Panel', {
		    width: 300,
		    height: 200,
		    activeTab: 0,		   
		    renderTo : this.uuid
		});   
  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'" >');
    this.renderChildren(out);
	 out.push('</div>');
	
	
  },

  remove : function() {
    
  }
});