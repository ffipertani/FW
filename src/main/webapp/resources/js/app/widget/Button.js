var Button = BaseWidget.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  setLabel : function(label){
	  this.label = label;
  },
  
  bind:function(){
	  console.log("binding button");
	  $("#"+this.uuid).jqxButton({ width: '120px', height: '35px', theme: 'darkblue'});
  },
  
  render : function(out) {
    out.push('<input id="'+this.uuid+'" type="submit" value="'+this.label+'"/>');
  },

  remove : function() {
    
  }
});