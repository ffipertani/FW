package com.ff.fw.controller;

import java.io.InputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ff.fw.template.TemplateEngine;

@Controller
@RequestMapping("/template")
public class TemplateController {

	@Autowired TemplateEngine templateEngine;
	
	@RequestMapping(value = "/get/{templateId}", method = RequestMethod.GET)
	public @ResponseBody String test(@PathVariable String templateId){
		InputStream template = Thread.currentThread().getContextClassLoader().getResourceAsStream("com/ff/app/view/"+templateId+".xml");
		return templateEngine.parse(template);
	}
}
