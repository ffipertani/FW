var ExtLookupGrid = fw.create([ LookupGrid, ExtGrid, ExtBaseWidget ], {

	createExt : function() {
		var title = this.title;
		var height = this.height;
		this.title = null;
		this.height = null;
		// this.data = this._data;
		// console.log("Calling super "+ this._data.length);
		this.$super();

		this.title = title;
		this.height = height;
		this.grid = this.ext;
		this.ext = this.createInstance('Ext.window.Window', {
			title : this.title,

			width : parseInt(this.width),
		//	height : parseInt(this.height),

			items : [ this.grid ]
		});
		return this.ext;
	},

	open : function() {
		var wgt = this;
		// this.grid = this.createExt();

		// this.createContent(this._data,this._total,this._pageSize,this._page);
		/*
		 * this.ext = this.createInstance('Ext.window.Window', { title :
		 * this.title, layout:'fit', width:parseInt(this.width),
		 * height:parseInt(this.height),
		 * 
		 * items:[this.grid] });
		 */
		this.ext.show();
	},

	createContent : function(data, total, pageSize, page) {

		// this.store.data = data;
		this.store.totalCount = total;

		this.store.pageSize = pageSize;
		this.store.currentPage = page;
		this.store.loadData(data, false);

		this.grid.setHeight(ROW_HEIGHT * pageSize);
		this.paginator.onLoad();
		//this.grid.getView().refresh();

	},

	close : function() {
		this.ext.hide();

	}

});