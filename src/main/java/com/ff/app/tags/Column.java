package com.ff.app.tags;


public class Column extends BaseTag{
	private String label;
	private String field;
	private Boolean autoSize;
	
	public Boolean getAutoSize() {
		return autoSize;
	}
	public void setAutoSize(Boolean autoSize) {
		this.autoSize = autoSize;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public String getField() {
		return field;
	}
	public void setField(String field) {
		this.field = field;
	}
	
	
}
