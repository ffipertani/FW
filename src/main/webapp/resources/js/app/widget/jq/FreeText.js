var JQFreeText = fw.create([FreeText],{
   
  
  render : function(out) {
    out.push('<p>'+this.textContent+'</p>');
  }

 
});