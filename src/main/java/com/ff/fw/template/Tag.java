package com.ff.fw.template;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.dom4j.Element;

public class Tag {
	private String jsName;
	@JsonIgnore
	private Tag parent;
	private final List<Tag> children = new ArrayList<Tag>();
	 
	
	public Tag(){
		
	}
	
	public void startTag(){
		
	}
	
	public void endTag(){
		
	}
 	
	public void addChild(Tag child){
		child.setParent(this);
    	getChildren().add(child);
	}
	
	public void addAttribute(String name, String text){
		boolean found = false;
		String setter = getSetterName(name);
		Method[] ms = getClass().getMethods();
        for(Method m:ms){
        	if(m.getName().equals(setter)){
        		if(m.getParameterTypes().length>1){
        			continue;
        		}
        		if(m.getParameterTypes()[0].isAssignableFrom(String.class)){
        			invokeSetter(m,text);
        			found = true;
        			break;
        		}
        		if(m.getParameterTypes()[0].isAssignableFrom(Integer.class) || m.getParameterTypes()[0].isAssignableFrom(int.class)){
        			Integer num=null;
        			try{
        			 num = Integer.parseInt(text);        			
        			}catch(Exception e){
        				System.err.println(e);
        			}
        			invokeSetter(m,num); 
        			found = true;
        			break;
        		}
        		if(m.getParameterTypes()[0].isAssignableFrom(Boolean.class) || m.getParameterTypes()[0].isAssignableFrom(boolean.class)){
        			Boolean bool=null;
        			try{
        			 bool = Boolean.parseBoolean(text);        			
        			}catch(Exception e){
        				System.err.println(e);
        			}
        			invokeSetter(m,bool);      
        			found = true;
        			break;
        		}
        		if(m.getParameterTypes()[0].isAssignableFrom(Double.class) || m.getParameterTypes()[0].isAssignableFrom(double.class)){
        			Double bool=null;
        			try{
        			 bool = Double.parseDouble(text);        			
        			}catch(Exception e){
        				System.err.println(e);
        			}
        			invokeSetter(m,bool);   
        			found = true;
        			break;
        		}
        	}
        	
        }
        if(!found){
    		throw new RuntimeException("Attenzione attributo " + name + " non trovato per il tag " +getClass());
    	}
	}
	
	private void invokeSetter(Method m,Object arg){
		try{			
			m.invoke(this, arg);
		}catch(Exception e){
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}
	
	private String getSetterName(String name){
		String setter = "set";	 
		String first = name.substring(0,1);
		first = first.toUpperCase();
		String rest = name.substring(1);
		return setter+first+rest;
	}
	
	
	/** PROPERTIES **/
	
	public String getJsName(){
		return jsName;
	}
	
	public void setJsName(String jsName){
		this.jsName = jsName;
	}
	
	
	 
	public Tag getParent() {
		return parent;
	}

	public void setParent(Tag parent) {
		this.parent = parent;
	}

	public List<Tag> getChildren(){
		return children;
	}

	
}
