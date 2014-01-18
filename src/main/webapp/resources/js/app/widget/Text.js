var Text = FormWidget.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

   
  
  
  bind: function(){
	  $("#"+this.uuid).jqxInput();  
  },
  
  render : function(out) {
    out.push('<div>'+this.label+'<input id="'+this.uuid+'" type="text" value="'+this.value+'"/></div>');
  },

  remove : function() {
    
  }
});