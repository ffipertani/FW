var ExtColumn = fw.create([Column,ExtBaseWidget],{

	createExt:function(){
		var flex = 0;
		if(this.autoSize){
			flex=1;
		}
		return{
			header: this.label,  dataIndex: this.field, flex:flex
		};
	}
  
});