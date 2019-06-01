function showScreen(divId) {
    var divID = ["homeScreen","pinScreen", "waitScreen", "playScreen","waitNextScreen","endScreen"];
    for (var i = 0 ; i < divID.length; i++){
        let showDiv = document.getElementById(divID[i]);
        if(divID[i] == divId){
            showDiv.style.display = "block";
        }
        else{
            showDiv.style.display = "none";
        }
    }
    // let divs = document.getElementsByTagName("div");
    // for (var i = 0; i < divs.length; i++)
    //     divs[i].style.display = "none";
    // let showDiv = document.getElementById(divId);
    // if (showDiv)
    //     showDiv.style.display = "flex";
}
showScreen("pinScreen");

function joinGame() {
    var inputGamePin = document.getElementById('inputGamePin').value;
    var inputNickname = document.getElementById('inputNickName').value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "1.0/game/join?gamePIN=" + inputGamePin + "&nickname=" + inputNickname, true);
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function() {
        if ( xhttp.readyState == "4" ) {
            var res = JSON.parse(xhttp.response);
            console.log("Type: " + res.type);
            if (xhttp.status != 202 ) { // print error
                console.log(res.content);
                alert(res.content);
            } else {
                connectAndSubscribeWs(inputGamePin);
                console.log("Game PIN: " + res.content);            //OK
                console.log("Input nick name: "+ inputNickname);
                let pins = document.getElementsByName("pin");
                for(var x=0; x < pins.length; x++)   // comparison should be "<" not "<="
                    pins[x].innerText = res.content;
                document.getElementById("nickname").innerHTML = inputNickname;
                showScreen("waitScreen");
            }
        }
    };
    xhttp.send();
    xhttp.onerror = function (e) {
        console.error(xhttp.statusText);
    };
}
function nextQuestion() {
    showScreen("playScreen");
}

var questionid ;
function submitAnswer(chosenAnswerId) {
    var inputGamePin = document.getElementById('inputGamePin').value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "1.0/game/submit?gamePIN=" + inputGamePin + "&questionId="+questionid+"&chooseAnswerId=" + chosenAnswerId, true);
    xhttp.onreadystatechange = function() {
        if ( xhttp.readyState == "4" ) {
            var res = JSON.parse(xhttp.response);
            console.log("Type: " + res.type);
            if (xhttp.status != 202) { // print error
                console.log(res.content);
                alert(res.content);
            } else {
                var score = res.content;
                let scores = document.getElementsByName("score");
                for(var x=0; x < scores.length; x++)   // comparison should be "<" not "<="
                    scores[x].innerText = res.content;
                document.getElementById("score").innerText = score;
                showScreen("waitNextScreen");
            }
        }
    };
    xhttp.send();
    xhttp.onerror =  (e) => {
        console.error(xhttp.statusText);
    };
}
function endGame() {

    showScreen("endScreen");
}