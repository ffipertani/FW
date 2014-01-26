var Column = fw.create([BaseWidget],{
  

  setLabel : function(label){
	  this.label = label;
  },
  
  getLabel : function(){
	  return this.label;
  },
  
  setField : function(field){
	  this.field = field;
  },
  
  getField : function(){
	  return this.field;
  },
  
  setAutoSize:function(autoSize){
	  this.autoSize = autoSize;
  }
  
});