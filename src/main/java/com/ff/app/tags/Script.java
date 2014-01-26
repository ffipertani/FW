package com.ff.app.tags;

import com.ff.fw.template.TemplateContext;

public class Script extends BaseTag{
	private String content;

	@Override
	public void startTag() {
		super.startTag();
		content = TemplateContext.getInstance().getElement().getText();
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	
}
