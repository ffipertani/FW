var JQPage = Page.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  render : function(out) {
    out.push('<div id="'+this.uuid+'">');
    this.renderChildren(out);
    out.push("</div>");
  },

  remove : function() {
    
  }
});