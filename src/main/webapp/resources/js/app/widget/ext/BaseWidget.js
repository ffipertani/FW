

Ext.Loader.setConfig({enabled:true});


var ExtBaseWidget = fw.create({
	createItems:function(){
		var children = this.getChildren();
		var items = new Array();
		for(var i=0;i<children.length;i++){
			var child = children[i];
			console.log(child);
			if(child.instance(ExtBaseWidget)){
				try{
				items.push(child.createExt());
				}catch(err){console.log(err);alert(child.jsName +" in errore. "+err)}
			}
		}
		return items;
	},
	
	createInstance:function(name,config){
		this.ext = Ext.create(name,config);
		return this.ext;
	},
	
	addChild:function(child){
		this.$super(child);
		if(this.ext!=null && child.ext!=null){
			this.ext.add(child.ext);
		}
	}
});