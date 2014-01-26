var BSText = fw.create([Text],{
    
  bind: function(){
	   
  },
  
  render : function(out) {
    out.push('<div>'+this.label+'<input id="'+this.uuid+'" type="text" value="'+this.value+'" class="form-control"/></div>');
  },

  remove : function() {
    
  }
});