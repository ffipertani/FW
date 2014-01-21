var BSFreeText = FreeText.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  setContent : function(content){
	  this.content = content;
  },
  
  bind:function(){
	  
  },
  
  render : function(out) {
    out.push('<p>'+this.textContent+'</p>');
  },

  remove : function() {
    
  }
});