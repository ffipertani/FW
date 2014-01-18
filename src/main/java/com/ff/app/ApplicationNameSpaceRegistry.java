package com.ff.app;



import org.springframework.stereotype.Component;

import com.ff.app.tags.Button;
import com.ff.app.tags.Calendar;
import com.ff.app.tags.CheckBox;
import com.ff.app.tags.Column;
import com.ff.app.tags.ComboBox;
import com.ff.app.tags.FreeText;
import com.ff.app.tags.Grid;
import com.ff.app.tags.Page;
import com.ff.app.tags.Tab;
import com.ff.app.tags.TabPanel;
import com.ff.app.tags.Text;
import com.ff.fw.template.NamespaceRegistry;
import com.ff.fw.template.TagRegistry;

@Component
public class ApplicationNameSpaceRegistry extends NamespaceRegistry{

	public ApplicationNameSpaceRegistry(){
		TagRegistry ac = new TagRegistry();
		ac.register("button", "Button", Button.class);
		ac.register("page",  "Page", Page.class);
		ac.register("text", "Text", Text.class);
		ac.register("tabPanel", "TabPanel", TabPanel.class);
		ac.register("tab", "Tab", Tab.class);
		ac.register("calendar", "Calendar", Calendar.class);
		ac.register("comboBox", "ComboBox", ComboBox.class);
		ac.register("freeText", "FreeText", FreeText.class);
		ac.register("checkBox", "CheckBox", CheckBox.class);
		ac.register("grid", "Grid", Grid.class);
		ac.register("column", "Column", Column.class);
		
		register("http://com.ff.fw.ac",ac);
	}
}
