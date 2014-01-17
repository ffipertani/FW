package com.ff.fw.template;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Iterator;

import org.codehaus.jackson.map.ObjectMapper;
import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;
import org.springframework.stereotype.Component;

@Component
public class TemplateEngine {
	private static ObjectMapper mapper = new ObjectMapper();
	
	@Autowired NamespaceRegistry namespaceRegistry;
	
	public String parse(InputStream inputStream){
		try{
			SAXReader reader = new SAXReader();
	        Document document = reader.read(inputStream);
	        Element root = document.getRootElement();
	        TemplateContext context = new TemplateContext();
	        context.setCurrentElement(root);
	        context.setDocRoot(root);
	        TemplateContext.set(context);
	        Tag tag = parseElement();
	        TemplateContext.remove();
	        try{
				String json =  mapper.writeValueAsString(tag);
				return json;
			}catch(Exception e){
				System.out.println(e);
				return null;
			}
		}catch(Exception e){
			e.printStackTrace();
			return "";
		}
	}
	
	public String parse(String file)throws FileNotFoundException{
		FileInputStream fis = new FileInputStream(file);
		return parse(fis);
	}
	
	
	private Tag parseElement(){
		TemplateContext context = TemplateContext.getInstance();
		Element el = context.getCurrentElement();
		String namespace = el.getNamespaceURI(); // TODO Da risolvere in base al prefisso del tag
		
		
		String name = el.getName();
		TagRegistry registry = namespaceRegistry.get(namespace);
		if(registry == null){
			throw new RuntimeException("Registro non trovato per il namespace " + namespace );
		}
		Tag tag = registry.get(name);
		if(tag == null){
			throw new RuntimeException("Tag " + name+" non trovato nel namespace " + namespace);
		}
		if(context.getRoot()==null){
			context.setRoot(tag);
		}
		tag.setElement(el);
		tag.startTag();
		 
        for ( Iterator i = el.attributeIterator(); i.hasNext(); ) {
            Attribute attribute = (Attribute) i.next();
            tag.addAttribute(attribute.getName(),attribute.getText());
        }
        
         
        for ( Iterator i = el.elementIterator(); i.hasNext(); ) {
            Element element = (Element) i.next();
            context.setCurrentElement(element);
            
            Tag child = parseElement();
            context.setCurrentElement(el);         
            tag.addChild(child);            
        }
        context.setCurrentElement(el);
        tag.endTag();
        return tag;
	}
	
	
	
	
	
	public static void main(String[] args)throws Exception {
		ApplicationContext context = 
	    		new FileSystemXmlApplicationContext("file:///Users/francescofipertani/Documents/workspaceSpring2/FW/src/main/webapp/WEB-INF/spring/application-config.xml");
		TemplateEngine engine = (TemplateEngine) 	context.getBean(TemplateEngine.class);
		String res = engine.parse("src/main/java/com/ff/fw/template/simple.xml");
		  System.out.println(res);	
	}
}
