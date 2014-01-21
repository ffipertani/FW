var BSButton = Button.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  bind:function(){
	 
  },
  
  render : function(out) {
    out.push('<button id="'+this.uuid+'" type="button" class="btn btn-default">'+this.label+'</button>');
  },

  remove : function() {
    
  }
});