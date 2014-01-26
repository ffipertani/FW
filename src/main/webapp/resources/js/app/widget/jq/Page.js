var JQPage = fw.create([Page],{
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'">');
    this.renderChildren(out);
    out.push("</div>");
  },

  remove : function() {
    
  }
});