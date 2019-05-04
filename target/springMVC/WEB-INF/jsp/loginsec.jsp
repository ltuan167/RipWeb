<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page session="true"%>
<html>
<body>
    <h1>Title : ${title1}</h1>
    <h1>Message : ${title2}</h1>
    <b>${pageContext.request.userPrincipal.name}</b>
<c:if test="${pageContext.request.userPrincipal.name != null}">
    <h2>Welcome : ${pageContext.request.userPrincipal.name}</h2>
</c:if>
</body>
</html>