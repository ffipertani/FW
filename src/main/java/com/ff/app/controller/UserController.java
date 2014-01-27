package com.ff.app.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ff.app.model.Group;
import com.ff.app.model.User;

@Controller
@RequestMapping("/user")
public class UserController {
	private String[] usernames = new String[]{
		    "ArsenalGuanto",
		    "BauerGhoul",
		    "DeanLittle",
		    "DeanPriceless",
		    "KixEasy",
		    "LadyMusicCuddly",
		    "LunaticAsh",
		    "MarkHerald",
		    "NeilWaterSporks",
		    "NekoDance",
		    "PaperFootball",
		    "Playergs",
		    "QueyMatter",
		    "Sandbybit",
		    "SlashCool",
		    "SnoopyBurnt",
		    "StoopNeko",
		    "StringDaily",
		    "TopClassyEternal",
		    "Trixerin"		    

	};
	
	private String[] names = new String[]{
			     "Moriah Haapala",
			     "Rose Slabaugh",
			     "Kassie Mckim",
			     "Bree Coombe",
			     "Georgann Sly",
			     "Sabra Levinson",
			     "Christy Boots",
			     "Melva Vesey",
			     "Tarah Napoles",
			     "Krystal Whaley",
			     "Tracee Lindell",
			     "Mark Kadel",
			     "Mirian Mondor",
			     "Claretta Saraiva",
			     "Erminia Isakson",
			     "Dottie Schoenborn",
			     "Candie Fall",
			     "Karyl Davison",
			     "Meredith Hammer",
			     "Sherrie Fears"
	
	};
	 
	 
	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public @ResponseBody List<User> search(){
		List<User> users = new ArrayList<User>();
		for(int i=0;i<20;i++){
			User user = createUser(i);
			users.add(user);
		}
		return users;
	}
	

	@RequestMapping(value = "/listGenders", method = RequestMethod.GET)
	public @ResponseBody List<Map> searchGenders(){
		List<Map> genders = new ArrayList<Map>();
		
			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("value", "M");
			map.put("description","Maschio");
			genders.add(map);
			map = new HashMap<String, Object>();
			map.put("value", "F");
			map.put("description","Femmina");
			genders.add(map);
		 
		return genders;
	}
	
	private User createUser(int index){
		User user = new User();
		user.setFirstName(names[index].split(" ")[0]);
		user.setLastName(names[index].split(" ")[1]);
		user.setUsername(usernames[index]);
		user.setGender(random(0,1)==1?"M":"F");
		user.setBirthDate(new Date(random(1000000000,10000000000L)*1000)); 	
		
		user.getGroups().add(new Group(1L,"Gr1","Gruppo di prova"));
		user.getGroups().add(new Group(2L,"Gr2","Gruppo di prova 2"));
		user.getGroups().add(new Group(3L,"Gr3","Gruppo di prova 3"));
		user.getGroups().add(new Group(4L,"Gr4","Gruppo di prova 4"));
		
		
		return user;
	}
	private long random(long min,long max){
		return min + (long)(Math.random() * ((max - min) + 1));
	}
	
	private Group createGroup(){
		//int index = Min + (int)(Math.random() * ((Max - Min) + 1))
		return null;
	}
}
