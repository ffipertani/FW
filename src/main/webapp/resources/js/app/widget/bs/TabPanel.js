var BSTabPanel = fw.create([TabPanel],{
  
  bind:function(){	  
	  
  },
  
  render : function(out) {
    out.push('<ul id="'+this.uuid+'" class="nav nav-pills">');
    var children = this.getChildren();     
	 for(var i=0;i<children.length;i++){
		 var child = children[i];
		 out.push('<li><a href="#'+child.getUuid()+'" data-toggle="tab">'+child.getLabel()+'</a></li>');
	 }
	 out.push('</ul>');
	
	out.push('<div class="tab-content">');
    this.renderChildren(out);
    out.push('</div>');
  },

  remove : function() {
    
  }
});