var JQTab = fw.create([Tab],{
  
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