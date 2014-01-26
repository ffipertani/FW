package com.ff.app.tags;

import com.ff.fw.template.Tag;

public class BaseTag extends Tag{
	private Object width;
	private Object height;
	private String id;
	
	
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public  Object getWidth() {
		return width;
	}
	public void setWidth( Object width) {
		this.width = width;
	}
	public  Object getHeight() {
		return height;
	}
	public void setHeight( Object height) {
		this.height = height;
	}
}
