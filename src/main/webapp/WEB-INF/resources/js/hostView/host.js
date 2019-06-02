function hostStart(gamePIN) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","1.0/game/start?gamePIN=" + gamePIN, true);
    xhttp.onreadystatechange =  () => {
        if (xhttp.readyState == 4)
            console.log(xhttp.response);
    };
    xhttp.send();
    xhttp.onerror =  (e) => {
        console.error(xhttp.statusText);
    };
}

let correctAnswer, chartDataset, questionId, stompClient = null;
let game_ended = false;
let answer1, answer2, answer3, answer4;
let endscores =[], endNickName = [];
function hostDisplayQuestion() {
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({},  () =>  {
        console.log('Connected');
        stompClient.subscribe('/game/'+ gamePIN + "/host", (data) => {
            let msg = JSON.parse(data.body);
            console.log("Type: " + msg.type);
            if (msg.type == "NEXT_QUESTION") {
                let question = msg.content;
                questionId = question.id;
                if (question.image)
                    document.getElementById("questionImg").setAttribute("src", question.image);
                else
                    document.getElementById("questionImg").setAttribute("src", "");
                answer1 = question.answer1;
                answer2 = question.answer2;
                answer3 = question.answer3;
                answer4 = question.answer4;
                document.getElementById("answer1").innerText = answer1;
                document.getElementById("answer2").innerText = answer2;
                document.getElementById("answer3").innerText = answer3;
                document.getElementById("answer4").innerText = answer4;
                document.getElementById("question").innerText = question.question;
                let numbercorrectAnswer = parseInt(question.correctAnswer);
                if (numbercorrectAnswer == 1)
                    correctAnswer = question.answer1;
                if (numbercorrectAnswer == 2)
                    correctAnswer = question.answer2;
                if (numbercorrectAnswer == 3)
                    correctAnswer = question.answer3;
                if (numbercorrectAnswer == 4)
                    correctAnswer = question.answer4;

                setTimer(question.time);
                countDown((remainsSecond) => {
                    let minutes = Math.floor(remainsSecond/60);
                    let seconds = remainsSecond % 60;
                    document.getElementById("endQuestionBtn").innerHTML = minutes + ":" + seconds;
                }, () => {
                    if (document.getElementById("questionResultScreen").style.display != "block")
                        hostEndQuestion();
                });


                showScreen("questionScreen");
            }
            if (msg.type == "NEW_PLAYER") {
                let playersList = document.getElementById("playersList");
                let playersListHTML = "";
                let players = msg.content;
                for (let i = players.length-1; i >= 0; i--) {
                    if (i != 0)
                        playersListHTML += "<li class=\"list-inline-item tada animated\" style=\"width: auto;color: rgb(255,255,255);height: auto;margin-top: 40px;margin-right: 40px;margin-bottom: 40px;margin-left: 40px;font-family: Comfortaa, cursive;\">"+players[i].nickname+"</li>";
                    else
                        playersListHTML += "<li class=\"list-inline-item\" style=\"width: auto;color: rgb(255,255,255);height: auto;margin-top: 40px;margin-right: 40px;margin-bottom: 40px;margin-left: 40px;font-family: Comfortaa, cursive;\">"+players[i].nickname+"</li>";
                }
                playersList.innerHTML = playersListHTML;
                document.getElementById("playersCount").innerText = players.length;
            }
            if (msg.type == "END_GAME") {
                // show result
                stopTimer();
                game_ended = true;
                document.getElementById("nextQuestionBtn").innerHTML = "SHOW RESULT!";
                endplayers = msg.content;
                endplayers.forEach((endplayer) => {
                    endscores += endplayer.score + ' ';
                    endNickName += endplayer.nickname + ' ';
                });
                console.log("endplayers: " + endscores);
                console.log("endnickname: " + endNickName);
                plotEndGameChart();
                showScreen("resultScreen");
            }
            if (msg.type == "END_QUESTION") {
                stopTimer();
                chartDataset = msg.content;
                plotBetweenChart();
                showScreen("questionResultScreen");
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
    xhttp.open("POST","1.0/game/create?questionCollectionId=" + hostQuesId, true);
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
    let divIDs = ["playersScreen", "questionScreen", "questionResultScreen","resultScreen"];
    divIDs.forEach((eachDivID) => {
        let showDiv = document.getElementById(eachDivID);
        if (divId == eachDivID)
            showDiv.style.display = "block";
        else
            showDiv.style.display = "none";
    });
}

function nextQuestion() {
    if (game_ended) {
        showScreen("resultScreen");
        return;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","1.0/game/next?gamePIN="+ gamePIN,true);
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4)
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
        if (xhttp.readyState == 4)
            console.log(xhttp.response);
    };
    xhttp.send();
    xhttp.onerror = () => {
        console.error(xhttp.statusText);
    };
}

var chartBetweenQuestions;
function plotBetweenChart() {
    if (chartBetweenQuestions){
        chartBetweenQuestions.destroy();
    }
    document.getElementById("correctAnswer").innerText = correctAnswer;
    var ctx = document.getElementById("chartBetweenQuestions");
    chartBetweenQuestions = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [answer1, answer2, answer3, answer4],
            datasets: [{
                label: '#Number of answers',
                data: chartDataset,
                backgroundColor: [
                    'rgba(192,23,51,0.65)',
                    'rgba(19,104,206,0.65)',
                    'rgba(216,158,0,0.65)',
                    'rgba(41,143,13,0.65)',
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
            legend: {
                labels: {
                    fontColor: "#000000",
                    fontSize: 15,
                }
            },
            responsive: true,
            scales: {
                xAxes: [{
                    ticks: {
                        maxRotation:  0,
                        minRotation:  0,
                        fontFamily: "Helvetica",
                        fontSize:"15",
                        fontColor:"#000000"
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontFamily: "Helvetica",
                        fontSize: "15",
                        fontColor:"#000000"
                    }
                }]
            }
        }
    });
}

var endGameChart;
function plotEndGameChart() {
    if (endGameChart){
        endGameChart.destroy();
    }
    var ctx = document.getElementById("endGameChart");
    endGameChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: endNickName.split(' '),
            datasets: [{
                label: '#Number of players',
                data: endscores.split(' '),
                backgroundColor: [
                    'rgba(192,23,51,0.65)',
                    'rgba(19,104,206,0.65)',
                    'rgba(216,158,0,0.65)',
                    'rgba(41,143,13,0.65)',
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
            legend: {
                labels: {
                    fontColor: "#000000",
                    fontSize: 15,
                }
            },
            responsive: true,
            scales: {
                xAxes: [{
                    ticks: {
                        maxRotation:  0,
                        minRotation:  0,
                        fontFamily: "Helvetica",
                        fontSize:"15",
                        fontColor:"#000000"
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontFamily: "Helvetica",
                        fontSize: "15",
                        fontColor:"#000000"
                    }
                }]
            }
        }
    });
}