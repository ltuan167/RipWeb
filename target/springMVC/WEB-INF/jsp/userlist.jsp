<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title>Userlisting</title>
    <style>
        table, th, td {
            border: 1px solid black;
        }
        td {
            padding-right: 30px;
        }
    </style>
</head>
<body>
<%--<c:url value="/customer-save" var="urlSave"/>--%>
<%--<c:url value="/customer-view/" var="urlView"/>--%>
<%--<c:url value="/customer-update/" var="urlUpdate"/>--%>
<%--<c:url value="/customerDelete/" var="urlDelete"/>--%>
<h1>List User:</h1>
<%--<a href="${urlSave}">Add Customer</a>--%>
<br />
<br />
<table>
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
<%--                <td> <a href="${urlView}/${customer.id}">View</a></td>--%>
<%--                <td> <a href="${urlUpdate}/${customer.id}">Edit</a></td>--%>
<%--                <td> <a href="${urlDelete}/${customer.id}">Delete</a></td>--%>
            </tr>
        </c:forEach>
    </c:if>
</table>
</body>
</html>