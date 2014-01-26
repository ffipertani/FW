<!DOCTYPE html>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<html>
	<head>
		<meta charset="utf-8">
		<title>Welcome</title>
		
		<script src="/FW/resources/js/fw/ring-2.0.0/underscore.js"></script>
		<script src="/FW/resources/js/fw/ring-2.0.0/ring.js"></script>
		
		
		
			
		<script src="/FW/resources/js/fw/ready.js"></script>
		<script src="/FW/resources/js/fw/ajax.js"></script>
		<script src="/FW/resources/js/fw/utils.js"></script>
		
		<script src="/FW/resources/js/fw/fw.js"></script>
		<script src="/FW/resources/js/fw/widget.js"></script>	
		<script src="/FW/resources/js/fw/view.js"></script>
		
		
		<!-- 
		<script src="/FW/resources/js/fw/fw.js"></script>
		 -->
		
		<!-- APPLICATION INCLUDES -->
		
		 <link rel="stylesheet" href="/FW/resources/js/app/lib/jqwidgets/styles/jqx.base.css" type="text/css" />
		 <link rel="stylesheet" href="/FW/resources/js/app/lib/ext/resources/css/ext-all-gray.css" type="text/css" />
		 
		 
		<script src="/FW/resources/js/app/lib/ext/ext-all.js"></script>
		
		<script src="/FW/resources/js/app/lib/jquery.js"></script>
		<script src="/FW/resources/js/app/lib/jqwidgets/jqx-all.js"></script>
		
		<link rel="stylesheet" href="/FW/resources/js/app/lib/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="/FW/resources/js/app/lib/bootstrap/css/bootstrap-theme.min.css">
		<script src="/FW/resources/js/app/lib/bootstrap/js/bootstrap.min.js"></script>
		
		
		<script src="/FW/resources/js/app/widget/Controller.js"></script>
		<script src="/FW/resources/js/app/widget/BaseWidget.js"></script>
		<script src="/FW/resources/js/app/widget/Window.js"></script>
		<script src="/FW/resources/js/app/widget/Form.js"></script>
		<script src="/FW/resources/js/app/widget/Script.js"></script>
		<script src="/FW/resources/js/app/widget/FormWidget.js"></script>
		<script src="/FW/resources/js/app/widget/Button.js"></script>
		<script src="/FW/resources/js/app/widget/Page.js"></script>
		<script src="/FW/resources/js/app/widget/Text.js"></script>
		<script src="/FW/resources/js/app/widget/Calendar.js"></script>
		<script src="/FW/resources/js/app/widget/CheckBox.js"></script>
		<script src="/FW/resources/js/app/widget/ComboBox.js"></script>
		<script src="/FW/resources/js/app/widget/FreeText.js"></script>
		<script src="/FW/resources/js/app/widget/Tab.js"></script>
		<script src="/FW/resources/js/app/widget/TabPanel.js"></script>
		<script src="/FW/resources/js/app/widget/Grid.js"></script>
		<script src="/FW/resources/js/app/widget/Column.js"></script>
		<script src="/FW/resources/js/app/widget/Toolbar.js"></script>
		
		
		<!-- Jq Widgets -->		
		<script src="/FW/resources/js/app/widget/jq/Button.js"></script>
		<script src="/FW/resources/js/app/widget/jq/Page.js"></script>
		<script src="/FW/resources/js/app/widget/jq/Form.js"></script>
		<script src="/FW/resources/js/app/widget/jq/Text.js"></script>
		<script src="/FW/resources/js/app/widget/jq/Calendar.js"></script>
		<script src="/FW/resources/js/app/widget/jq/CheckBox.js"></script>
		<script src="/FW/resources/js/app/widget/jq/ComboBox.js"></script>
		<script src="/FW/resources/js/app/widget/jq/FreeText.js"></script>
		<script src="/FW/resources/js/app/widget/jq/Tab.js"></script>
		<script src="/FW/resources/js/app/widget/jq/TabPanel.js"></script>
		<script src="/FW/resources/js/app/widget/jq/Grid.js"></script>
		<script src="/FW/resources/js/app/widget/jq/Column.js"></script>
		
		
		<!-- Bootstrap -->		
		<script src="/FW/resources/js/app/widget/bs/Button.js"></script>
		<script src="/FW/resources/js/app/widget/bs/Page.js"></script>
		<script src="/FW/resources/js/app/widget/bs/Text.js"></script>
		<script src="/FW/resources/js/app/widget/bs/Calendar.js"></script>
		<script src="/FW/resources/js/app/widget/bs/CheckBox.js"></script>
		<script src="/FW/resources/js/app/widget/bs/ComboBox.js"></script>
		<script src="/FW/resources/js/app/widget/bs/FreeText.js"></script>
		<script src="/FW/resources/js/app/widget/bs/Tab.js"></script>
		<script src="/FW/resources/js/app/widget/bs/TabPanel.js"></script>
		<script src="/FW/resources/js/app/widget/bs/Grid.js"></script>
		<script src="/FW/resources/js/app/widget/bs/Column.js"></script>
		
		
		
		<!-- Ext Js -->		
		<script src="/FW/resources/js/app/widget/ext/BaseWidget.js"></script>
		<script src="/FW/resources/js/app/widget/ext/Window.js"></script>
		<script src="/FW/resources/js/app/widget/ext/Form.js"></script>
		<script src="/FW/resources/js/app/widget/ext/Button.js"></script>
		<script src="/FW/resources/js/app/widget/ext/Page.js"></script>
		<script src="/FW/resources/js/app/widget/ext/Text.js"></script>
		<script src="/FW/resources/js/app/widget/ext/Calendar.js"></script>
		<script src="/FW/resources/js/app/widget/ext/CheckBox.js"></script>
		<script src="/FW/resources/js/app/widget/ext/ComboBox.js"></script>
		<script src="/FW/resources/js/app/widget/ext/FreeText.js"></script>
		<script src="/FW/resources/js/app/widget/ext/Tab.js"></script>
		<script src="/FW/resources/js/app/widget/ext/TabPanel.js"></script>
		<script src="/FW/resources/js/app/widget/ext/Grid.js"></script>
		<script src="/FW/resources/js/app/widget/ext/Column.js"></script>
		<script src="/FW/resources/js/app/widget/ext/Toolbar.js"></script>
		
		
		
		<!-- SERVICES -->		
		<script src="/FW/resources/js/app/service/UserService.js"></script>
		
		<script src="/FW/resources/js/app/myapp.js"></script>
	</head> 
	<body>
 

    
    <div id="application"></div>
	</body>
</html>
