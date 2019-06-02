<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.3.0/sockjs.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.5.0"></script>


    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>Ripweb! | Play this quiz now!</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Luckiest+Guy">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Permanent+Marker">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="icon" href="resources/icon/favicon.png">
</head>
<body >
<noscript>
    <h1>Ripweb! needs JavaScript to work</h1>
    <p>
        To use Ripweb!, you need to have JavaScript enabled in your browser. To enable JavaScript, please do the following:
    </p>
    <ul>
        <li><a href="http://enable-javascript.com/">Follow these instructions</a>.</li>
        <li>Make sure you have the <a href="https://www.mozilla.org/en-US/firefox/new/">latest browser</a>.</li>
        <li>Turn off or disable the NoScript extension, if you have it.</li>
        <li>Contact your IT administrator to allow access to Ripweb! in your security preferences.</li>
    </ul>
    <p>If you continue to have problems, please let us know by <a href="http://ripweb.uservoice.com/">contacting Ripweb! support</a>.</p>
</noscript>

<div id="playersScreen" class="container-fluid jello animated" style="width: 100vw;height: 100vh;padding-left: 0px;padding-right: 0px;background-color: #e28c05;">
    <select class="dropdown dropdown-list" placeholder="Question collection name" id="hostQuesId">
        <script>
            $.get("http://localhost/1.0/db/collection/list", (data) => {
                let collections = data.content;
                if (collections) {
                    collections.forEach((collection) => {
                        document.getElementById("hostQuesId").innerHTML += "<option value='"+collection.id+"'>"+collection.name+"</option>";
                    });
                }
            });
        </script>
    </select>
    <button class="btn btn-primary" onclick="hostCreatGame(document.getElementById('hostQuesId').value)">CREATE</button>
    <button class="btn btn-secondary" onclick="hostStart(gamePIN)">START</button>
    <div class="row d-flex d-xl-flex align-items-xl-center" style="width: 100%;height: 20%;margin-right: 0;background-color: #fbfbfb;margin-left: 0;">
        <div class="col" style="width: 100%;height: 100%;padding-top: 15px;">
            <div style="width: 100%;height: 100%;">
                <div class="row" style="width: 100%;height: 100%;">
                    <div class="col" style="padding-left: 30px;">
                        <p class="text-left d-xl-flex justify-content-xl-start align-items-xl-center" style="font-family: Comfortaa, cursive;font-size: 39px;width: 100%;height: 100%;margin-bottom: 0;color: rgb(120,120,120);">Join NOW&nbsp;with&nbsp;<strong><em> ripweb/play </em></strong></p>
                    </div>
                    <div class="col-xl-5" style="height: 100%;padding-right: 30px;">
                        <h1 class="text-center d-xl-flex justify-content-xl-end align-items-xl-center" style="font-family: Comfortaa, cursive;font-size: 44px;width: 100%;height: 100%;line-height: 59px;color: rgb(102,105,109);font-style: normal;"><strong>Game PIN:</strong>&nbsp;<span id="gamePinCreated" style="font-weight: bold;font-size: 54px;color: rgb(51,51,51);font-style: normal;"></span></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row d-flex d-xl-flex align-items-xl-center" style="width: 100%;height: 70%;margin-right: 0;margin-left: 0;">
        <div class="col" style="width: 100%;height: 100%;padding-left: 15px;">
            <div style="width: 10%;height: 25%;opacity: 1;margin-left: -10px;"><strong id="playersCount" class="text-center d-xl-flex justify-content-xl-center align-items-xl-center" style="width: 100%;color: rgb(255,255,255);font-size: 72px;font-family: Comfortaa, cursive;font-style: italic;height: 71px;margin-top: 20px;">0</strong>
                <strong
                        class="d-xl-flex justify-content-xl-center align-items-xl-center" style="color: rgb(255,255,255);font-size: 22px;font-family: Comfortaa, cursive;font-style: italic;font-weight: bold;">Players</strong>
            </div>
            <ul id="playersList" class="list-inline d-xl-flex" style="width: 70%;height: 60%;padding-bottom: 0;margin-bottom: 0;margin-right: 10%;margin-left: 15%;font-size: 30px;">
            </ul>
        </div>
    </div>
</div>

<div id="questionScreen" class="container-fluid" style="background-color: rgba(0,0,0,0);width: 100vw;height: 100vh;padding: 20px;">
    <div class="col" style="width: 100%;padding: 0px;height: 100%;">
        <div class="row" style="width: 100%;height: 50%;margin: 0 0;">
            <div class="col" style="width: 100%;height: 100%;">
                <div class="row" style="width: 100%;height: 100%;margin-right: 0;margin-left: 0;">
                    <div class="col-xl-2" style="width: 10%;height: 100%;padding-right: 1em;padding-left: 0;"><button class="btn btn-primary" type="button" style="width: 100%;height: 100%;font-family: Comfortaa, cursive;font-weight: bold;font-style: oblique;font-size: 31px;letter-spacing: 1px;padding-top: 0;padding-right: 0;padding-bottom: 0;padding-left: 0;background-color: rgb(113,148,186);">RIPWEB!</button></div>
                    <div class="col-xl-8" style="width: 80%;height: 100%;padding-right: 0;padding-left: 0;"><img id="questionImg" class="img-thumbnail" src="" style="width: 100%;height: 100%;padding: 0;margin-left: 0;"></div>
                    <div class="col-xl-2" style="width: 10%;height: 100%;padding-right: 0;padding-left: 1em;"><button id="endQuestionBtn" class="btn btn-primary" type="button" onclick="hostEndQuestion()" style="width: 100%;height: 100%;font-family: Comfortaa, cursive;font-weight: bold;font-style: oblique;font-size: 31px;letter-spacing: 1px;padding-top: 0;padding-right: 0;padding-bottom: 0;padding-left: 0;background-color: rgb(138,76,187);">End now</button></div>
                </div>
            </div>
        </div>
        <div class="row" style="width: 100%;height: 20%;margin: 0;margin-top: 5px;">
            <div class="col" style="width: 100%;height: 100%;">
                <p id="question" class="d-lg-flex align-items-lg-center" style="width: 100%;height: 100%;font-size: 2.5em;font-family: Comfortaa, cursive;font-weight: bold;color: rgb(61,113,164);">This is a question?</p>
            </div>
        </div>
        <div class="row" style="width: 100%;height: 30%;margin: 0;margin-top: 5px;">
            <div class="col-auto" style="width: 100%;height: 100%;padding-right: 0;padding-left: 0;">
                <div class="row" style="width: 100%;height: 48%;margin-left: 0;margin-right: 0;">
                    <div class="col" style="width: 100%;height: 100%;padding-right: 0.05em;padding-left: 0.05em;margin-right: 0.05em;margin-left: 0.05em;"><button id="answer1" class="btn btn-primary btn-lg text-center border-white shadow-lg visible" type="button" style="width: 100%;height: 100%;background-color: #c01733;padding: 0 0;padding-right: 0.05em;padding-left: 0.05em;font-family: Comfortaa, cursive;font-weight: bold;font-size: 2.3em;filter: brightness(100%);">Answer 1</button></div>
                    <div class="col" style="width: 100%;height: 100%;padding-right: 0.05em;padding-left: 0.05em;margin-right: 0.05em;margin-left: 0.05em;"><button id="answer2" class="btn btn-primary btn-lg border-white" type="button" style="width: 100%;height: 100%;padding: 0;padding-right: 0.05em;background-color: #1368ce;padding-left: 0.05em;font-family: Comfortaa, cursive;font-weight: bold;font-size: 2.3em;">Answer 2</button></div>
                </div>
                <div class="row" style="width: 100%;height: 45%;margin-top: 0.1em;margin-right: 0;margin-left: 0;">
                    <div class="col" style="width: 100%;height: 100%;padding-right: 0;padding-left: 0;margin-right: 0.05em;margin-left: 0.05em;"><button id="answer3" class="btn btn-primary btn-lg border-white" type="button" style="width: 100%;height: 100%;background-color: #d89e00;padding: 0;padding-left: 0.05em;padding-right: 0.05em;font-family: Comfortaa, cursive;font-weight: bold;font-size: 2.3em;">Answer 3</button></div>
                    <div class="col" style="width: 100%;height: 100%;padding-right: 0.05em;padding-left: 0.05em;margin-left: 0.05em;"><button id="answer4" class="btn btn-primary btn-lg border-white" type="button" style="width: 100%;height: 100%;padding: 0;background-color: #298f0d;padding-left: 0.05em;padding-right: 0.05em;font-family: Comfortaa, cursive;font-weight: bold;font-size: 2.3em;">Answer 4</button></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="questionResultScreen" class="container-fluid">
<%--    PLOT CHART HERE --%>
    <canvas id="chartBetweenQuestions" style="width: 70%; height: 50%;"></canvas>
    <b style="font-size: 33px; width: 100%; text-align: center"><strong>Correct Answer: </strong> <a id="correctAnswer"></a> </b>
    <button id="nextQuestionBtn" class="btn btn-info" onclick="nextQuestion()">Next Question</button>
</div>

<div id="resultScreen" class="container-fluid">
    <canvas id="endGameChart" style="width: 70%; height: 50%;"></canvas>
    <b style="font-size: large"><strong>We are in resultScreen now</strong></b>
</div>

<script src="resources/js/hostView/timer.js"></script>
<script src="resources/js/hostView/host.js"></script>

<script>
    showScreen("playersScreen");
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>

<script>
    // myAudio = new Audio("resources/js/remix.ogg");
    myAudio = new Audio("resources/js/chaulenba.mp3");
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play();
</script>

</body>
</html>

