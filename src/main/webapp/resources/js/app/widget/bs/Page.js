var BSPage = fw.create([Page],{


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