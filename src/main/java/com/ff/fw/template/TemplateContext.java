package com.ff.fw.template;

import java.util.HashMap;
import java.util.Map;

import org.dom4j.Element;

public class TemplateContext {
	private static ThreadLocal<TemplateContext> THREAD_LOCAL = new ThreadLocal();
    
	private Map<String,Object> attributes = new HashMap<String,Object>();
	private Element element;
	private Element docRoot;
	private Tag root;
   
    public static TemplateContext getInstance() {
      return THREAD_LOCAL.get();
    }
    public static void set(final TemplateContext templateContext) {
      THREAD_LOCAL.set(templateContext);
    }
    public static void remove() {
      THREAD_LOCAL.remove();
    }
	
	
	
	
	public Map<String, Object> getAttributes() {
		return attributes;
	}
	public void setAttributes(Map<String, Object> attributes) {
		this.attributes = attributes;
	}
	public Element getElement() {
		return element;
	}
	public void setElement(Element element) {
		this.element = element;
	}
	public Element getDocRoot() {
		return docRoot;
	}
	public void setDocRoot(Element docRoot) {
		this.docRoot = docRoot;
	}
	public Tag getRoot() {
		return root;
	}
	public void setRoot(Tag root) {
		this.root = root;
	}
	
	
}
