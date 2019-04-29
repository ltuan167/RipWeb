<%--
  Created by IntelliJ IDEA.
  User: lt167
  Date: 4/29/2019
  Time: 2:11 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>User List</title>
</head>
<body>
<table border="1">
    <tr>
        <th>Id</th>
        <th>Username</th>
        <th>Password</th>
        <th>Name</th>
        <th>DOB</th>
    </tr>
    <c:if test="${not empty listUser}">
        <c:forEach var="user" items="${listUser}">
            <tr style="border: 1px black solid">
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.name}</td>
                <td>${user.dob}</td>
            </tr>
        </c:forEach>
    </c:if>
</table>
</body>
</html>
