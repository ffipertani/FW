package com.ff.app;



import com.ff.app.tags.Button;
import com.ff.app.tags.Calendar;
import com.ff.app.tags.CheckBox;
import com.ff.app.tags.Column;
import com.ff.app.tags.ComboBox;
import com.ff.app.tags.Controller;
import com.ff.app.tags.Form;
import com.ff.app.tags.FreeText;
import com.ff.app.tags.Grid;
import com.ff.app.tags.Page;
import com.ff.app.tags.Script;
import com.ff.app.tags.Tab;
import com.ff.app.tags.TabPanel;
import com.ff.app.tags.Text;
import com.ff.app.tags.Toolbar;
import com.ff.app.tags.Window;
import com.ff.fw.template.NamespaceRegistry;
import com.ff.fw.template.TagRegistry;

//@Component
public class ApplicationNameSpaceRegistry extends NamespaceRegistry{

	public ApplicationNameSpaceRegistry(){
		TagRegistry jq = new TagRegistry();
		jq.register("controller", "Controller", Controller.class);
		jq.register("form", "JQForm", Form.class);
		jq.register("script", "Script", Script.class);
		jq.register("button", "JQButton", Button.class);
		jq.register("page",  "JQPage", Page.class);
		jq.register("text", "JQText", Text.class);
		jq.register("tabPanel", "JQTabPanel", TabPanel.class);
		jq.register("tab", "JQTab", Tab.class);
		jq.register("calendar", "JQCalendar", Calendar.class);
		jq.register("comboBox", "JQComboBox", ComboBox.class);
		jq.register("freeText", "JQFreeText", FreeText.class);
		jq.register("checkBox", "JQCheckBox", CheckBox.class);
		jq.register("grid", "JQGrid", Grid.class);
		jq.register("column", "JQColumn", Column.class);
		
		TagRegistry bs = new TagRegistry();
		bs.register("controller", "Controller", Controller.class);
		bs.register("script", "Script", Script.class);
		bs.register("button", "BSButton", Button.class);
		bs.register("page",  "BSPage", Page.class);
		bs.register("text", "BSText", Text.class);
		bs.register("tabPanel", "BSTabPanel", TabPanel.class);
		bs.register("tab", "BSTab", Tab.class);
		bs.register("calendar", "BSCalendar", Calendar.class);
		bs.register("comboBox", "BSComboBox", ComboBox.class);
		bs.register("freeText", "BSFreeText", FreeText.class);
		bs.register("checkBox", "BSCheckBox", CheckBox.class);
		bs.register("grid", "BSGrid", Grid.class);
		bs.register("column", "BSColumn", Column.class);
		
		TagRegistry ext = new TagRegistry();
		ext.register("window", "ExtWindow", Window.class);
		ext.register("controller", "Controller", Controller.class);
		ext.register("form", "ExtForm", Form.class);
		ext.register("script", "Script", Script.class);
		ext.register("button", "ExtButton", Button.class);
		ext.register("page",  "ExtPage", Page.class);
		ext.register("text", "ExtText", Text.class);
		ext.register("tabPanel", "ExtTabPanel", TabPanel.class);
		ext.register("tab", "ExtTab", Tab.class);
		ext.register("calendar", "ExtCalendar", Calendar.class);		
		ext.register("comboBox", "ExtComboBox", ComboBox.class);
		ext.register("freeText", "ExtFreeText", FreeText.class);
		ext.register("checkBox", "ExtCheckBox", CheckBox.class);
		ext.register("grid", "ExtGrid", Grid.class);
		ext.register("column", "ExtColumn", Column.class);
		ext.register("toolbar", "ExtToolbar", Toolbar.class);
		
		register("http://com.ff.fw.jq",jq);
		register("http://com.ff.fw.bs",bs);
		register("http://com.ff.fw.ext",ext);
	}
}
