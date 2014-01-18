var Tab = Widget.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },
  
  setLabel:function(label){
	  this.label = label;
  },
  
  getLabel:function(label){
	  return this.label;
  },

  bind:function(){	   
	  
  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'">');
 
    this.renderChildren(out);
   
    out.push('</div>');
  },

  remove : function() {
    
  }
});