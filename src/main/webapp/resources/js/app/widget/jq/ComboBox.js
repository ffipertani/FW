var JQComboBox = fw.create([ComboBox],{
    
  
  bind:function(){	   
	  $("#"+this.uuid).jqxComboBox();
  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'"></div>');
  },

  remove : function() {
    
  }
});