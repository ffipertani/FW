
var MessageBox = function(){
 
	this.warning=function(tex,titlet){
		this.open("warning",text,title);
	};
	this.error=function(text,title){
		this.open("error",text,title);
	};
	this.info=function(text,title){
		this.open("info",text,title);
	};
	this.question=function(text,title){
		this.open("question",text,title);
	};
};

window.MessageBox = new MessageBox();