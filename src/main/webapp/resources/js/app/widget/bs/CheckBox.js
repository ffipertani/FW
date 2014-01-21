var BSCheckBox = CheckBox.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  bind:function(){	   
	  
  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'" class="checkbox"><label><input type="checkbox"> '+this.label+'</div>');
  },

  remove : function() {
    
  }
});