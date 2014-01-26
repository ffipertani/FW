var BSButton = fw.create([Button],{
  
  bind:function(){
	 
  },
  
  render : function(out) {
    out.push('<button id="'+this.uuid+'" type="button" class="btn btn-default">'+this.label+'</button>');
  },

  remove : function() {
    
  }
});