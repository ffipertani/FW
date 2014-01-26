var Button = fw.create([BaseWidget],{
  constructor:function(config){
		this.$super(config);
		this.clickListeners = new Array();
  },
	
  onClick:function(listener){
	  this.clickListeners.push(listener);
  },
  
  setLabel : function(label){
	  this.label = label;
  },
  
});