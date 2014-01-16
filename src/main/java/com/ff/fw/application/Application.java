package com.ff.fw.application;

import com.ff.fw.template.NamespaceRegistry;

public class Application {
	private String name;
	private NamespaceRegistry registry;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public NamespaceRegistry getRegistry() {
		return registry;
	}
	public void setRegistry(NamespaceRegistry registry) {
		this.registry = registry;
	}
	
	
}
