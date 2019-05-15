<%--
  Created by IntelliJ IDEA.
  User: lt167
  Date: 4/24/2019
  Time: 10:04 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Add icon library -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <link rel="stylesheet" href="resources/css/signup.css">
    <link rel="icon" href="resources/icon/favicon.png">

    <title>RIPWEB! Signup</title>
</head>
<body>
<form action="/signup" style="max-width:500px;margin:auto" method="post" name ="regisform" onsubmit="return checkValid()" >
    <h2>Register Form</h2>
    <div class="input-container">
        <i class="fa fa-envelope icon"></i>
        <input class="input-field" type="email" placeholder="Email" name="email" required autofocus>
    </div>

    <div class="input-container">
        <i class="fa fa-user-tag icon"></i>
        <input class="input-field" type="text" placeholder="Nickname" name="nickname" required>
    </div>

    <div class="input-container">
        <i class="fa fa-key icon"></i>
        <input class="input-field" type="password" placeholder="Password" name="password" required>
    </div>

    <div class="input-container">
        <i class="fa fa-key icon"></i>
        <input class="input-field" type="password" placeholder="Re-enter password" name="repassword" required>
    </div>

    <button type="submit" class="btn" >Register</button>
</form>
<p id="test"></p>
</body>
</html>
<%--    THIS SECTION FOR LEE TUAN ONLY, VALIDATE FORM --%>
<script>
    function checkValid() {
        var password = document.regisform.password.value;
        var repassword = document.regisform.repassword.value;
        if (password != repassword) {
            alert("Please enter the same password");
            return false;
        } else
            return true;
    }
</script>