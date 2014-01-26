var BSTab = fw.create([Tab],{
  
  bind:function(){	   
	  
	  
		  
  },
  
  render : function(out) {
    out.push('<div  class="tab-pane" id="'+this.uuid+'">');
 
    this.renderChildren(out);
   
    out.push('</div>');
  },

  remove : function() {
    
  }
});