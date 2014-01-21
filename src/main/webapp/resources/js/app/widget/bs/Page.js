var BSPage = Page.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  render : function(out) {
	  
    out.push('<div id="'+this.uuid+'" class="panel panel-default">');
    out.push('<div class="panel-heading">');
    out.push('<h3 class="panel-title">'+this.title+'</h3>');
    out.push('</div>');
    out.push('<div class="panel-body">');
    this.renderChildren(out);
    out.push("</div>");
    out.push("</div>");
  },

  remove : function() {
    
  }
});