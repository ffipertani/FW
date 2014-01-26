var BSCalendar = fw.create([Calendar],{
  
  bind:function(){	   
	  $("#"+this.uuid).jqxDateTimeInput({width: 220, height: 220});
  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'"></div>');
  },

  remove : function() {
    
  }
});