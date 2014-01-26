package com.ff.app.tags;

import com.ff.fw.template.Tag;

public class Controller extends Tag{
	private String id;
	private Boolean autoSearch;

	
	@Override
	public void endTag() {		
		if(id==null || id.equals("")){
			throw new RuntimeException("L'attributo id è obbligatorio");
		}
		super.endTag();
		
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Boolean getAutoSearch() {
		return autoSearch;
	}

	public void setAutoSearch(Boolean autoSearch) {
		this.autoSearch = autoSearch;
	}
	
	
	
}
