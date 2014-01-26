var Page = fw.create([BaseWidget],{
  
  constructor:function(config){
		this.$super(config);
		this.creationCompleteListeners = new Array();
  },
  
  renderCompleted:function(){
	  for(var i=0;i<this.creationCompleteListeners.length;i++){
		  var listener = this.creationCompleteListeners[i];
		  listener();
	  }

  },
	
  onCreationComplete:function(listener){
	  this.creationCompleteListeners.push(listener);
  },
  

	
	
  setTitle : function(title){
	  this.title = title;
  }
  
 
});