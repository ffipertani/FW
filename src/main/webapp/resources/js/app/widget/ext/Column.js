var ExtColumn = fw.create([Column,ExtBaseWidget],{

	createExt:function(){
		return{
			header: this.label,  dataIndex: this.field, autoSizeColumn:this.autoSize
		};
	}
  
});