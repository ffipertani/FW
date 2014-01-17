var Page = Widget.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  setTitle : function(title){
	  this.title = title;
  },
  
  render : function(out) {
    out.push("<div></div>");
  },

  remove : function() {
    
  }
});