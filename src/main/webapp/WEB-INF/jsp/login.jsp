<%--
  Created by IntelliJ IDEA.
  User: lt167
  Date: 4/24/2019
  Time: 10:04 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Sign in bootrap</title>
    <link rel="stylesheet" href="resources/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=ABeeZee">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alegreya+Sans">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allerta">
    <link rel="stylesheet" href="resources/css/login.css">
</head>
<body style="background-color: rgb(255,255,255);">
<div class="text-center d-block register-photo" style="margin: auto;padding: 40px 10px 10px;height: 1080px;width: auto;">
    <div class="form-container">
        <div class="image-holder" style="background-image: url(&quot;resources/img/login.png&quot;);background-position: center;"></div>
        <form method="post" action="login">
            <h2 class="text-center" style="font-size: 60px;margin: 0px 0px 10px;font-family: Allerta, sans-serif;"><strong>Hello</strong></h2>
            <p class="text-center" style="margin: 0px 0px 40px;font-family: ABeeZee, sans-serif;font-size: 19px;"><strong>Login to your <em>RIPWEB!</em> account to get back your works</strong></p>
            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email" autofocus required></div>
            <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password" required></div>
            <div class="form-group">
                <div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox">Remember Password</label></div>
            </div>
            <div class="form-group"><button class="btn btn-primary btn-block" type="submit" style="background-image: linear-gradient(to right bottom, #046bd1, #008fe6, #00ade5, #00c8d5, #00e0be);">Sign In</button></div><a href="#" class="already" style="font-family: ABeeZee, sans-serif;">Don't have an account? <span style="text-decoration: underline;">Sign up</span></a></form>
    </div>
</div>
<script src="resources/js/jquery.min.js"></script>
<script src="resources/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>

