var JQTab = Tab.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  bind:function(){	   
	  
  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'">');
 
    this.renderChildren(out);
   
    out.push('</div>');
  },

  remove : function() {
    
  }
});