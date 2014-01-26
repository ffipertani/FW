var ExtTabPanel = fw.create([ TabPanel, ExtBaseWidget ], {

	createExt : function() {
		var items = this.createItems();
		return this.createInstance('Ext.tab.Panel', {
			items : items,
			width : '100%',
			height : 200,
			activeTab : 0,

		});
	}
});