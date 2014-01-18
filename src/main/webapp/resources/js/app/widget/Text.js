var Text = FormWidget.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

   
  
  
  bind: function(){
	  $("#"+this.uuid).jqxInput({placeHolder: "Enter a Country"});  
  },
  
  render : function(out) {
    out.push('<input id="'+this.uuid+'" type="text" />');
  },

  remove : function() {
    
  }
});