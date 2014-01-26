var JQText = fw.create([Text],{
    
  
  bind: function(){
	  $("#"+this.uuid).jqxInput();  
  },
  
  render : function(out) {
    out.push('<div>'+this.label+'<input id="'+this.uuid+'" type="text" /></div>');
  },

  remove : function() {
    
  }
});