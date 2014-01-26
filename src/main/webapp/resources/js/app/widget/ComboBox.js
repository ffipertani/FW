var ComboBox = fw.create([FormWidget],{

	
	load:function(res){
		var wgt = this;
		res.done(function(resp){
			var models = JSON.parse(resp);
			wgt.setData(models);
		});
	},
	
	setData:function(data){
		console.error("Set data not implemented");
	},
	
	
	setDisplayField :function(displayField){
		this.displayField = displayField;
	},
	
	getDisplayField:function(){
		return displayField;
	},
	
	setValueField:function(valueField){
		this.valueField = valueField;
	},
	
	getValueField:function(){
		this.valueField = valueField;
	}

	
	
});