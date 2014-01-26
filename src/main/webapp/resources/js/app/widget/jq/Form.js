var JQForm = fw.create([Form],{
	  
	  bind:function(){
		  $("#"+this.uuid).jqxPanel({ width: 800, height: 350});
	  },
	  
	  render : function(out) {
		  out.push('<div id="'+this.uuid+'">');
		  
		    this.renderChildren(out);
		   
		    out.push('</div>');
	  }
 
});