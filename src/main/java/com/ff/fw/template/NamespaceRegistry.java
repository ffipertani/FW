package com.ff.fw.template;

import java.util.HashMap;
import java.util.Map;

public class NamespaceRegistry {
	private Map<String,TagRegistry> registry = new HashMap<String,TagRegistry>();
	
	public void register(String namespace, TagRegistry tagRegistry){
		registry.put(namespace, tagRegistry);
	}
	
	public TagRegistry get(String namespace){
		return registry.get(namespace);
	}
}
