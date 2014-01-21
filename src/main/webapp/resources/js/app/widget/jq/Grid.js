var JQGrid = Grid.$extend({
  __init__ : function(name) {
	  this.$super(name);
  },

  
  bind:function(){
	  var data = {};
	  
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
              data[i] = row;
          }
          
          
	  var source =
      {
		  localdata: data,
          datatype: "local",
          datafields: [
              { name: 'firstname', type: 'string' },
              { name: 'lastname', type: 'string' },
              { name: 'productname', type: 'string' },
              { name: 'price', type: 'float' },
              { name: 'quantity', type: 'int' },
              { name: 'total', type: 'float' }
          ] 
      };
	  
	   var dataAdapter = new $.jqx.dataAdapter(source, {
           downloadComplete: function (data, status, xhr) {},
           loadComplete: function (data) {},
           loadError: function (xhr, status, error) { }
       });
	   
	  
	  var columns = new Array();
	  
	  var children = this.getChildren();
		
	  for(var i=0;i<children.length;i++){
			 var child = children[i];	
			 var column = new Object();
			 column.text = child.getLabel();
			 column.datafield = child.getField();
			 columns.push(column);
			 
	  }
	  
	  
	  $("#"+this.uuid).jqxGrid(
	            {
	                width: 670,
	                source: dataAdapter,                
	                pageable: true,
	                autoheight: true,
	                sortable: true,
	                altrows: true,
	                enabletooltips: true,
	                editable: true,
	                selectionmode: 'multiplecellsadvanced',
	                columns: columns
	                
	            });
	  
  },
  
  render : function(out) {
    out.push('<div id="'+this.uuid+'"></div>');
  },

  remove : function() {
    
  }
});