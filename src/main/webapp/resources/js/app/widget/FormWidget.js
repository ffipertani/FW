var FormWidget = fw.create([BaseWidget],{
   

  setLabel : function(label){
	  this.label = label;
  },
  
  getLabel : function(){
	  return this.label;
  },
  
  setField:function(field){
	  this.field = field;
  },
  
  getField:function(){
	  return this.field;
  },
 
  setValue:function(value){
	  this.value = value;
	  if(this.binded){
		  this.changeValue(value);
	  }
  },
  
  changeValue:function(value){
	  console.log("changeValue not implemented " + this.jsName);
  }
   
});