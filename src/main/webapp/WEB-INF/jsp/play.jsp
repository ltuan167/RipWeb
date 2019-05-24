<%--
  Created by IntelliJ IDEA.
  User: Thuan NG
  Date: 23/05/2019
  Time: 9:33 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Play</title>
</head>
<body>
<div id="homeScreen">
        This is home screen<br>
        <input type="number" id="gamePIN" placeholder="Enter game PIN here!">
        <input type="text" id="nickname" placeholder="Enter your nickname here!">
        <button id="joinGame">JOIN NOW</button>
</div>
<div id="waitScreen">
    Yeahh! Let's wait other players :)
</div>
<div id="playScreen">
    Answer 1
    Answer 2
    Answer 3
    Answer 4
</div>
<div id="waitNextScreen">
    Good luck for your answer :))
</div>
<div id="endScreen">
    End game!
</div>

<script>
    function showScreen(divId) {
        let divs = document.getElementsByTagName("div");
        for (var i = 0; i < divs.length; i++)
            divs[i].style.display = "none";
        let showDiv = document.getElementById(divId);
        if (showDiv)
            showDiv.style.display = "block";
    }
    showScreen("homeScreen");
</script>

</body>
</html>
