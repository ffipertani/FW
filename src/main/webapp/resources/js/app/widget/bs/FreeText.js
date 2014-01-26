var BSFreeText = fw.create([FreeText],{
  
  
  bind:function(){
	  
  },
  
  render : function(out) {
    out.push('<p>'+this.textContent+'</p>');
  },

  remove : function() {
    
  }
});