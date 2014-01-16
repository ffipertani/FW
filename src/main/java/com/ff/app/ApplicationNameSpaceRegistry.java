package com.ff.app;



import org.springframework.stereotype.Component;

import com.ff.fw.tags.Button;
import com.ff.fw.tags.Page;
import com.ff.fw.template.NamespaceRegistry;
import com.ff.fw.template.TagRegistry;

@Component
public class ApplicationNameSpaceRegistry extends NamespaceRegistry{

	public ApplicationNameSpaceRegistry(){
		TagRegistry ac = new TagRegistry();
		ac.register("button", "button", Button.class);
		ac.register("page",  "page", Page.class);
		ac.register("text", "text", Button.class);
		
		
		register("http://com.ff.fw.ac",ac);
	}
}
