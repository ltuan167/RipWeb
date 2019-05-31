<%--
  Created by IntelliJ IDEA.
  User: Thuan NG
  Date: 22/05/2019
  Time: 11:15 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>RIPWEB! RESTful</title>
    <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>
</head>
<body>
    <table border="1">
        <tr>
            <th>Url</th>
            <th>Params</th>
            <th>Post</th>
        </tr>
        <tr>
            <td>/1.0/game/create</td>
            <td>questionCollectionId<input type="text" id="questionCollectionId" value="1" placeholder="questionCollectionId"></td>
            <td><button id="createGame">Create Game</button></td>
            <script>
                $("#createGame").click(() => {
                    for (var i=0; i<10; i++)
                    postRest("http://localhost/1.0/game/create?questionCollectionId="+$("#questionCollectionId").val(), null);
                });
            </script>
        </tr>
        <tr>
            <td>/1.0/game/join</td>
            <td>gamePIN<input type="number" id="gamePIN" value="1"><br>
            nickname<input type="text" id="nickname" value="restUser"></td>
            <td><button id="joinGame">Join Game</button></td>
            <script>
                $("#joinGame").click(() => {
                    for (var i=0; i<2; i++)
                        postRest("http://localhost/1.0/game/join?gamePIN="+$("#gamePIN").val()+"&nickname="+$("#nickname").val(), null);
                });
            </script>
        </tr>
        <tr>
            <td>/1.0/game/remove</td>
            <td>gamePIN<input type="number" id="gamePIN1" value="1"></td>
            <td><button id="removeGame">Remove Game</button></td>
            <script>
                $("#removeGame").click(() => {
                    postRest("http://localhost/1.0/game/remove?gamePIN="+$("#gamePIN1").val(), null);
                });
            </script>
        </tr>
    </table>

    <script>
    function postRest(url, jsonData) {
        var jqxhr = $.post(url ,jsonData, (data) => {
            // alert("success: " + JSON.stringify(data));
            console.log(JSON.stringify(data));
        })
            .done((data) => {
                // alert("second success");
            })
            .fail(() => {
                console.log("Error: " + url);
                // alert("error");
            })
            .always(() => {
                // alert("finished");
            });

        // Perform other work here ...
        // Set another completion function for the request above
        // jqxhr.always(function() {
        //     alert( "second finished" );
        // });
    }
</script>

</body>
</html>
