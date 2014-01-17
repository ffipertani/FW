<!DOCTYPE html>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<html>
	<head>
		<meta charset="utf-8">
		<title>Welcome</title>
		<script src="/FW/resources/js/fw/classy.js"></script>
		<script src="/FW/resources/js/fw/widget.js"></script>		
		<script src="/FW/resources/js/fw/ready.js"></script>
		<script src="/FW/resources/js/fw/ajax.js"></script>
		<script src="/FW/resources/js/fw/fw.js"></script>
		
		
		<script src="/FW/resources/js/app/Button.js"></script>
		<script src="/FW/resources/js/app/Page.js"></script>
		<script src="/FW/resources/js/app/Text.js"></script>
		
	</head> 
	<body>
		<c:url value="/showMessage.html" var="messageUrl" />
		<a href="${messageUrl}">Click to enter</a>
	</body>
</html>
