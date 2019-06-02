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
var questionId;
var chartDataset;
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
                questionId = question.id;
                if (question.image)
                    document.getElementById("questionImg").setAttribute("src", question.image);
                else
                    document.getElementById("questionImg").setAttribute("src", "");
                document.getElementById("answer1").innerText = question.answer1;
                document.getElementById("answer2").innerText = question.answer2;
                document.getElementById("answer3").innerText = question.answer3;
                document.getElementById("answer4").innerText = question.answer4;
                document.getElementById("question").innerText = question.question;
                showScreen("questionScreen");
            }
            if (msg.type == "NEW_PLAYER") {
                let playersList = document.getElementById("playersList");
                let playersListHTML = "";
                let players = msg.content;
                for (let i = players.length-1; i >= 0; i--) {
                    playersListHTML += "<li data-functional-selector=\"player\" class=\"\" data-player-id=\"1468176837\"><span class=\"player-name\">"+ players[i].nickname +"</span></li>"
                }
                playersList.innerHTML = playersListHTML;
                document.getElementById("playersCount").innerText = players.length;
            }
            if (msg.type == "END_GAME") {
                // show result
                showScreen("resultScreen");
            }
            if (msg.type == "END_QUESTION") {
                showScreen("questionResultScreen");
                chartDataset = msg.content;
                plotChart();
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
    var divID = ["questionScreen", "resultScreen", "questionResultScreen","playersScreen"];
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

function nextQuestion() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","1.0/game/next?gamePIN="+ gamePIN,true);
    xhttp.onreadystatechange =() => {
        console.log(xhttp.response);
    };
    xhttp.send();
    xhttp.onerror = () => {
        console.error(xhttp.statusText);
    };
}

function hostEndQuestion() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","1.0/game/endquestion?gamePIN="+ gamePIN + "&questionId=" + questionId, true);
    xhttp.onreadystatechange = () => {
        console.log(xhttp.response);
    };
    xhttp.send();
    xhttp.onerror = () => {
        console.error(xhttp.statusText);
    };
}

let numberOfAnswer1;
let numberOfAnswer2;
let numberOfAnswer3;
let numberOfAnswer4;

function plotChart() {
    numberOfAnswer1 = chartDataset[0];
    numberOfAnswer2 = chartDataset[1];
    numberOfAnswer3 = chartDataset[2];
    numberOfAnswer4 = chartDataset[3];
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Question 1", "Question 2", "Question 3", "Question 4"],
            datasets: [{
                label: '#Number of answers',
                data: chartDataset,
                backgroundColor: [
                    'rgb(192,23,51)',
                    'rgb(19,104,206)',
                    'rgb(216,158,0)',
                    'rgba(41,143,13,0.99)',
                ],
                borderColor: [
                    'rgb(192,23,51)',
                    'rgb(19,104,206)',
                    'rgb(216,158,0)',
                    'rgba(41,143,13,0.99)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: false,
            scales: {
                xAxes: [{
                    ticks: {
                        maxRotation: 0,
                        minRotation: 0
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


showScreen("playersScreen");