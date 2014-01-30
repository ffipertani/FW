var Grid = fw.create([BaseWidget],{
	constructor:function(config){
		this.$super(config);
		this.rowChangeListeners = new Array();
	},
	
	bind:function(){
		this.$super();
		this.setControllerInstance(searchController(this.getController(),this.getPage()));
	},
	
	 
	
	setControllerInstance:function(controllerInstance){		
		this.controllerInstance = controllerInstance;
		if(controllerInstance==null){			
			return;
		}
		controllerInstance.addGrid(this);
	},
	
	setController:function(controller){		
		this.controller = controller;
    },
	  
	getController:function(){
		return this.controller;
	},

	setTitle:function(title){
		this.title = title;
	},

	onRowChange:function(listener){
		this.rowChangeListeners.push(listener);
	},
	
	setData:function(data){
		this.data = data;
	},

	getData:function(){
		return this.data;
	}
});