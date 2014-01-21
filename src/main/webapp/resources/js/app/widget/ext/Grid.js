var ExtGrid = Grid.$extend({
  __init__ : function(name) {
	  this.$super(name);
	  this.initData();
  },

  initData:function(){
	  this.data = new Array();
	  
	  var firstNames =
          [
              "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
          ];
          var lastNames =
          [
              "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
          ];
          var productNames =
          [
              "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
          ];
          var priceValues =
          [
              "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
          ];
          
          var generaterow = function (i) {
              var row = {};
              var productindex = Math.floor(Math.random() * productNames.length);
              var price = parseFloat(priceValues[productindex]);
              var quantity = 1 + Math.round(Math.random() * 10);
              row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
              row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
              row["productname"] = productNames[productindex];
              row["price"] = price;
              row["quantity"] = quantity;
              row["total"] = price * quantity;
              return row;
          }
          
          for (var i = 0; i < 12; i++) {
              var row = generaterow(i);
              this.data[i] = row;
          }
          
  
  },
  bind:function(){
	           
	
  },
  
  render : function(out) {
	  var children = this.getChildren();
	  out.push('<table id="'+this.uuid+'" class="table table-hover">');
    
	out.push('<tr>');
	  for(var i=0;i<children.length;i++){
			 var child = children[i];
			 out.push('<th>');			 
			 out.push(child.getLabel());
			 out.push('</th>');
	  }
	  out.push('</tr>');
	
	  
	  for(var i=0;i<this.data.length;i++){
			 var data = this.data[i];
			 out.push('<tr>');
			 for(var k=0;k<children.length;k++){
				 var child = children[k];
				 out.push('<td>');				 
				 out.push(data[child.getField()]);
				 out.push('</td>');
			 }
			 out.push('</tr>');
	  }
    out.push('</table>');
  },

  remove : function() {
    
  }
});