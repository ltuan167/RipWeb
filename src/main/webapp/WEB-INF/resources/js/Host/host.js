function hostStart(gamePIN) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://localhost/1.0/game/start?gamePIN=" + gamePIN, true);
    xhttp.onreadystatechange =  () => {
        console.log(xhttp.response);
    };
    xhttp.send();
    xhttp.onerror =  (e) => {
        console.error(xhttp.statusText);
    };
}

var stompClient = null;
function hostDisplayQuestion() {
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({},  () =>  {
        console.log('Connected');
        stompClient.subscribe('/game/'+ gamePIN + "/host", (data) => {
            let msg = JSON.parse(data.body);
            console.log("Type: " + msg.type);
            let question = msg.content;
            if (msg.type == "NEXT_QUESTION") {
                document.getElementById("answer1").innerText = question.answer1;
                document.getElementById("answer2").innerText = question.answer2;
                document.getElementById("answer3").innerText = question.answer3;
                document.getElementById("answer4").innerText = question.answer4;
                document.getElementById("question").innerText = question.question;
                // showScreen("questionScreen");
            }
            if (msg.type == "NEW_PLAYER") {
                var playersList = document.getElementById("playersList");
                var playersListHTML = "";
                let players = msg.content;
                players.reverse();
                players.forEach((player) => {
                    playersListHTML += "<li data-functional-selector=\"player\" class=\"\" data-player-id=\"1468176837\"><span class=\"player-name\">"+ player.nickname +"</span></li>"
                });
                playersList.innerHTML = playersListHTML;
                document.getElementById("playersCount").innerText = players.length;
            }
        });
    });
    stompClient.onerror = () => {
        console.error(stompClient.statusText);
    };
}
let gamePIN = null;
function hostCreatGame(hostQuesId) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://localhost/1.0/game/create?questionCollectionId=" + hostQuesId, true);
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == XMLHttpRequest.DONE) {
            if (xhttp.status == 201) {
                let msg = JSON.parse(xhttp.response);
                console.log(msg);
                gamePIN = msg.content;
                document.getElementById("gamePinCreated").innerText = gamePIN;
                hostDisplayQuestion();
            }
        }
    };
    xhttp.send();
    xhttp.onerror =  (e) => {
        console.error(xhttp.statusText);
    };
}

function showScreen(divId) {
    var divID = ["questionScreen","pinScreen", "waitScreen", "playScreen","waitNextScreen","endScreen"];
    for (var i = 0 ; i < divID.length; i++){
        let showDiv = document.getElementById(divID[i]);
        if(divID[i] == divId){
            showDiv.style.display = "block";
        }
        else{
            showDiv.style.display = "none";
        }
    }
}

// showScreen("questionScreen");




