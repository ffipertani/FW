var Button = Widget.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  setLabel : function(label){
	  this.label = label;
  },
  
  setWidth : function(width){
	  this.width = width;
  },
  
  bind:function(){
	  
  },
  
  render : function(out) {
    out.push('<input type="submit" value="PIPPO"/>');
  },

  remove : function() {
    
  }
});