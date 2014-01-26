package com.ff.app.tags;

import com.ff.fw.template.TemplateContext;

public class FreeText extends BaseTag {
	private String textContent; 
	
	@Override
	public void startTag() {
		super.startTag();

		textContent = TemplateContext.getInstance().getElement().getText();
	}

	public String getTextContent() {
		return textContent;
	}

	public void setTextContent(String textContent) {
		this.textContent = textContent;
	}
	
	
	
}
