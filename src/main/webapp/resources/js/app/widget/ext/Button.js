var ExtButton = fw.create([Button,ExtBaseWidget],{

  createExt:function(){
	  var wgt = this;
	 return  this.createInstance('Ext.Button', {
		    text: this.label,
		    //height:this.height, 
		    width:this.width,
		    handler: function() {
		        for(var i=0;i<wgt.clickListeners.length;i++){
		        	var listener = wgt.clickListeners[i];
		        	listener();
		        }
		    }
		});

  } 
});