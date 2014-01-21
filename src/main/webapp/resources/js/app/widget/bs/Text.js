var BSText = Text.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

   
  
  
  bind: function(){
	   
  },
  
  render : function(out) {
    out.push('<div>'+this.label+'<input id="'+this.uuid+'" type="text" value="'+this.value+'" class="form-control"/></div>');
  },

  remove : function() {
    
  }
});