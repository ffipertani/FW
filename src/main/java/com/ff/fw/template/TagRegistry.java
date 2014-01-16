package com.ff.fw.template;

import java.util.HashMap;
import java.util.Map;

public class TagRegistry {
	private static Map<String, Class<? extends Tag>> registry = new HashMap<String, Class<? extends Tag>>();
	private static Map<String, String> names = new HashMap<String, String>();

	public void register(String name, String jsName, Class<? extends Tag> tag) {
		registry.put(name, tag);
		names.put(name, jsName);
	}

	public Tag get(String name) {
		try {
			Class c = registry.get(name);
			if (c == null) {
				return null;
			}
			String jsName = names.get(name);
			Tag tag = (Tag) c.newInstance();
			tag.setJsName(jsName);
			return tag;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
