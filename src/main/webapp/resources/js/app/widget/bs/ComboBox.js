var BSComboBox = fw.create([ComboBox],{
    
  bind:function(){	   
	  
  },
  
  render : function(out) {
    out.push('<select id="'+this.uuid+'" class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select><div ></div>');
  },

  remove : function() {
    
  }
});