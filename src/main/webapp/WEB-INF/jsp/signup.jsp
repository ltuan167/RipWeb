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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="resources/css/signup.css">

    <link rel="icon" href="resources/icon/favicon.png">

    <title>RIPWEB! Signup</title>
</head>
<body>

<form action="/registerResult" style="max-width:500px;margin:auto" method="post">
    <h2>Register Form</h2>
    <div class="input-container">
        <i class="fa fa-user icon"></i>
        <input class="input-field" type="text" placeholder="Username" name="usrnm">
    </div>

    <div class="input-container">
        <i class="fa fa-envelope icon"></i>
        <input class="input-field" type="text" placeholder="Email" name="emailre">
    </div>

    <div class="input-container">
        <i class="fa fa-key icon"></i>
        <input class="input-field" type="password" placeholder="Password" name="psw">
    </div>

    <button type="submit" class="btn">Register</button>
</form>

</body>
</html>

