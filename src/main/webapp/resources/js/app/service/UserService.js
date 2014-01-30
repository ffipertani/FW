var UserService = function(){
	this.search = function(){		 
		return ajax("http://localhost:8080/FW/user/search");
	};
	
	this.listGenders = function(){
		return ajax("http://localhost:8080/FW/user/listGenders");
	};
	
	this.listRoles = function(){
		return ajax("http://localhost:8080/FW/user/listRoles");
	};
} 