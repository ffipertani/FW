var JQTabPanel = TabPanel.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },
  
  bind:function(){	  
	  $("#"+this.uuid).jqxTabs({width: '90%', height: 220});
  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'">');
    var children = this.getChildren();
    out.push('<ul>');
	 for(var i=0;i<children.length;i++){
		 var child = children[i];
		 out.push('<li>'+child.getLabel()+'</li>');
	 }
	   out.push('</ul>');
    this.renderChildren(out);
   
    out.push('</div>');
  },

  remove : function() {
    
  }
});