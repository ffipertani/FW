package com.ff.app;



import org.springframework.stereotype.Component;

import com.ff.app.tags.Button;
import com.ff.app.tags.Page;
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
		
		
		register("http://com.ff.fw.ac",ac);
	}
}
