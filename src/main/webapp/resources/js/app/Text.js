var Text = Widget.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  setLabel : function(label){
	  this.label = label;
  },
  
  setValue:function(value){
	  this.value = value;
  },
  
  render : function(out) {
    out.push('<input type="text" />');
  },

  remove : function() {
    
  }
});