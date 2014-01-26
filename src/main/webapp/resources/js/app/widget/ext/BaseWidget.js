var ExtBaseWidget = fw.create({
	createItems:function(){
		var children = this.getChildren();
		var items = new Array();
		for(var i=0;i<children.length;i++){
			var child = children[i];
			if(child.instance(ExtBaseWidget)){
				try{
				items.push(child.createExt());
				}catch(err){alert(child.jsName)}
			}
		}
		return items;
	},
	
	createInstance:function(name,config){
		this.ext = Ext.create(name,config);
		return this.ext;
	}
});