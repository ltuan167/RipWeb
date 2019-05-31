<html>
<head>
    <title>Play</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Play RipWeb! - Enter game PIN here</title>
    <link rel="stylesheet" href="resources/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="resources/css/playzone.css">
    <link rel="stylesheet" href="resources/css/button.css">
    <link rel="icon" href="resources/icon/favicon.png">
</head>
<body>
<div id="pinScreen">
    <div style="height: 0; width: 0; position: absolute; visibility: hidden">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><defs><filter x="-2.2%" y="-2.3%" width="104.4%" height="104.8%" filterUnits="objectBoundingBox" id="a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><symbol id="logo-shapes" viewBox="0 0 24 24"><ellipse cx="5.506" cy="18.966" rx="4.953" ry="4.953"></ellipse><path d="M12.005 5.902L17.873.033l5.869 5.869-5.869 5.868zm1.443 8.899h8.849v8.849h-8.849zm-2.584-4.977H.146l5.36-8.555z"></path></symbol></filter></defs></svg> -->
    </div>
    <script async="" src="Mainpage_files/analytics.js"></script><script type="text/javascript" async="" src="Mainpage_files/amplitude-4.js"></script><script src="Mainpage_files/kahunaAPI_min.js"></script>


    <link rel="stylesheet" media="all" type="text/css" id="theme" href="Mainpage_files/style.css">
    <div class="loader" loader="" style="display: none;"></div>

    <iframe id="gameBlockIframe" style="display:none;" class="game-block-iframe" sandbox="allow-scripts allow-same-origin" scrolling="no">
    </iframe>

    <!-- ngView: -->
    <div id="mainView" ng-view="" class="ng-scope">
        <div class="join-view ng-scope" ios7lazyfix="">
            <div class="join-view__bg"></div>
            <div class="vertical-alignment-wrapper">
                <div class="vertical-alignment-wrapper__center">
                    <div>
                        <div class="logo-container">
                            <div class="logo center-block">
                                <span class="ng-binding">              RipWeb!            </span>          </div>        </div>
                            <input type="text" id="inputGamePin" ios7fix="" class="username ng-pristine ng-untouched ng-valid ng-empty" ng-class="{invalid: !gamePinValid}" placeholder="Game PIN" ng-model="gameId" shake="badGameId" data-functional-selector="game-pin-input" aria-label="Game pin" ng-change="gameIdChanged()" ng-focus="gameIdFocused()" ng-blur="gameIdUnfocused()">
                            <input id="inputNickName" ios7fix="" class="username ng-pristine ng-untouched ng-valid ng-empty" ng-class="{invalid: !gamePinValid}" placeholder="Nick name" ng-model="gameId" type="tel" shake="badGameId" data-functional-selector="game-pin-input" aria-label="Game pin" ng-change="gameIdChanged()" ng-focus="gameIdFocused()" ng-blur="gameIdUnfocused()">
                            <button onclick="changeStage()" type="submit" class="btn btn-greyscale join ng-binding" blocking="" data-functional-selector="join-button-game-pin">            Enter          </button>
                    </div>
                </div>
                <div class="vertical-alignment-wrapper__bottom">
                    <!-- ngIf: showStoreButton && isMobilePlatformSupported -->
                    <p class="info ng-binding" ng-show="!isMobileApp &amp;&amp; notStandalone()">        Create your own RipWeb for FREE at
                        <a href="/" target="_system" class="ng-binding">          Ahihi :))          </a>      </p>
                    <p class="legal-info" ng-show="!isMobileApp">
                        <a href="https://dictionary.cambridge.org/vi/dictionary/english/term" class="legal-info__link ng-binding" target="_system">          Terms        </a>        |        <a href="https://dictionary.cambridge.org/vi/dictionary/english/privacy?q=Privacy" class="legal-info__link ng-binding" target="_system">          Privacy        </a>      </p>    </div>  </div></div></div>

    <div alerts=""></div>
    <script type="text/javascript" src="Mainpage_files/bootstrap.js"></script>
</div>

<div id="homeScreen">
</div>



<div id="waitScreen">
    <script src="resources/js/wait2play.js"></script>
    <div style="height: 0; width: 0; position: absolute; visibility: hidden">
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><defs><filter x="-2.2%" y="-2.3%" width="104.4%" height="104.8%" filterUnits="objectBoundingBox" id="a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><symbol id="logo-shapes" viewBox="0 0 24 24"><ellipse cx="5.506" cy="18.966" rx="4.953" ry="4.953"></ellipse><path d="M12.005 5.902L17.873.033l5.869 5.869-5.869 5.868zm1.443 8.899h8.849v8.849h-8.849zm-2.584-4.977H.146l5.36-8.555z"></path></symbol></filter></defs></svg>
    </div>

    <div id="debug-info" debug-info="dev,test" debug-timestamp=""></div>
    <dev-mode></dev-mode>

    <div class="loader" loader="" style="display: none;"></div>
    <iframe id="gameBlockIframe" style="display:none;" class="game-block-iframe" sandbox="allow-scripts allow-same-origin" scrolling="no">
    </iframe>
    <div id="mainView" ng-view="" class="ng-scope">
        <div class="screen instructions-screen ng-scope" ios7lazyfix="">
            <div class="status-bar status-bar--header ng-scope" ng-if="!isTeamMode">
                <div class="status-bar__item status-bar__game-pin ng-binding">      PIN:      817387    </div>
                <div class="status-bar__item status-bar__username ng-binding">      dep    </div>
            </div>
            <div class="screen__main instructions" ng-class="{'screen__main--instructions-team-mode': isTeamMode}">
                <h1 class="ng-binding">      You're in!    </h1>
                <h2 class="instructions__subheader ng-binding">      See your nickname onscreen?    </h2>
                <ul class="players__members-list ng-hide" ng-show="isTeamMode">
                </ul>
            </div>
            <div class="status-bar status-bar--footer ng-scope" ng-if="!isTeamMode">
                <div class="status-bar__item status-bar__username ng-binding" data-functional-selector="cleaned-username">      dep    </div>  </div>
        </div>
    </div>

    <div alerts=""></div>
</div>
<div id="playScreen">
    <div style="height: 0; width: 0; position: absolute; visibility: hidden">
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <defs>
                <filter x="-2.2%" y="-2.3%" width="104.4%" height="104.8%" filterUnits="objectBoundingBox" id="a">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1">
                    </feOffset>
                    <symbol id="logo-shapes" viewBox="0 0 24 24">
                        <ellipse cx="5.506" cy="18.966" rx="4.953" ry="4.953">
                        </ellipse>
                        <path d="M12.005 5.902L17.873.033l5.869 5.869-5.869 5.868zm1.443 8.899h8.849v8.849h-8.849zm-2.584-4.977H.146l5.36-8.555z">
                        </path>
                    </symbol>
                </filter>
            </defs>
        </svg>
    </div>

    <div class="loader" loader="" style="display: none;"></div>

    <div id="gameBlockDiv" style="display: block;" class="game-block-iframe"scrolling="no">
        <div id="app">
            <main class="controller-layout grid full-height">
                <div class="quiz-board">
                    <button style="max-width:100%;max-height:100%;" type="button" role="button" data-functional-selector="answer answer-0" class="card-button card-button--triangle" aria-label="Answer 1">
                    <span class="icon card-button__card-icon">
                        <svg class="icon__svg" data-functional-selector="icon" focusable="false">
                        </svg>
                    </span>
                    </button>
                    <button style="max-width:100%;max-height:100%;" type="button" role="button" data-functional-selector="answer answer-1" class="card-button card-button--diamond" aria-label="Answer 2">
                    <span class="icon card-button__card-icon">
                        <svg class="icon__svg" data-functional-selector="icon" focusable="false">

                        </svg>
                    </span>
                    </button>
                    <button style="max-width:100%;max-height:100%;" type="button" role="button" data-functional-selector="answer answer-2" class="card-button card-button--circle" aria-label="Answer 3">
                    <span class="icon card-button__card-icon">
                        <svg class="icon__svg" data-functional-selector="icon" focusable="false">

                        </svg>
                    </span>
                    </button>
                    <button style="max-width:100%;max-height:100%;" type="button" role="button" data-functional-selector="answer answer-3" class="card-button card-button--square" aria-label="Answer 4">
                    <span class="icon card-button__card-icon">
                        <svg class="icon__svg" data-functional-selector="icon" focusable="false">

                        </svg>
                    </span>
                    </button>
                </div>
            </main>
        </div>
    </div>

    <!-- ngView: --><div id="scoreBar" ng-view="" class="ng-scope" style="height: auto;">
    <div class="status-bar status-bar--header game-block-status-bar--header ng-scope">
        <div class="status-bar__item status-bar__game-pin ng-binding">    PIN:    193651  </div>
        <div class="status-bar__item status-bar__question-number ng-binding" ng-bind-html="questionNumber()">1 of 1</div>
        <div class="status-bar__item status-bar__username ng-binding">    Test  </div>
        <!-- ngIf: showStatusBarScore -->
        <div class="status-bar__item status-bar__score ng-binding ng-scope" ng-if="showStatusBarScore" data-functional-selector="player-total-score">    0  </div>
        <!-- end ngIf: showStatusBarScore -->
    </div><!-- Game block to be shown here -->
    <div class="status-bar status-bar--footer game-block-status-bar--footer ng-scope">
        <div class="status-bar__item status-bar__username ng-binding">    Test  </div>
        <!-- ngIf: showStatusBarScore -->
        <div class="status-bar__item status-bar__score ng-binding ng-scope" ng-if="showStatusBarScore" data-functional-selector="player-total-score">    0  </div>
        <!-- end ngIf: showStatusBarScore --></div>
</div>

    <div alerts=""></div>
    <script src="resources/js/jquery.min.js"></script>
    <script src="resources/bootstrap/js/bootstrap.min.js"></script>
</div>
<div id="waitNextScreen">
    <div style="height: 0; width: 0; position: absolute; visibility: hidden">
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><defs><filter x="-2.2%" y="-2.3%" width="104.4%" height="104.8%" filterUnits="objectBoundingBox" id="a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><symbol id="logo-shapes" viewBox="0 0 24 24"><ellipse cx="5.506" cy="18.966" rx="4.953" ry="4.953"></ellipse><path d="M12.005 5.902L17.873.033l5.869 5.869-5.869 5.868zm1.443 8.899h8.849v8.849h-8.849zm-2.584-4.977H.146l5.36-8.555z"></path></symbol></filter></defs></svg>
    </div>

    <script async="" src="waitplayer_files/analytics.js"></script><script type="text/javascript" async="" src="waitplayer_files/amplitude-4.js"></script><script src="waitplayer_files/kahunaAPI_min.js"></script>

    <div id="debug-info" debug-info="dev,test" debug-timestamp=""></div>
    <dev-mode></dev-mode>

    <div class="loader" loader="" style="display: none;"></div>

    <iframe id="gameBlockIframe" style="display: none;" class="game-block-iframe" sandbox="allow-scripts allow-same-origin" scrolling="no" srcdoc="&lt;!doctype html&gt;&lt;!--[if IE 9]&gt;&lt;html class=&quot;ie9&quot; lang=&quot;en&quot;&gt;&lt;![endif]--&gt;&lt;!--[if !IE]&gt;&lt;!--&gt;&lt;html lang=&quot;en&quot;&gt;&lt;!--&lt;![endif]--&gt;&lt;head&gt;&lt;meta charset=&quot;utf-8&quot;&gt;&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge,chrome=1&quot;&gt;&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1&quot;&gt;&lt;title&gt;&lt;/title&gt;&lt;link rel=&quot;stylesheet&quot; href=&quot;/game-blocks/quiz/controller.min_eee350dc.css&quot;&gt;&lt;/head&gt;&lt;body&gt;&lt;!-- SVG Sprite Injection --&gt;&lt;div style=&quot;height: 0; width: 0; position: absolute; visibility: hidden&quot;&gt;&lt;!-- inject:svg --&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;&lt;symbol id=&quot;logo-k&quot; viewBox=&quot;-238 1024.8 130 138&quot;&gt;&lt;path d=&quot;M-155.5 1049.4l-20.1-7.7-39.2 37.4v-46.7l-23.2 5.9V1148l23.2.8-.2-38.4 14.3-13.8 15.1 52.2h20.5l-18.9-68.1zM-132.8 1141l-5.7 13.4 12.2 8.4 12-7.1-5.1-14.7zM-108 1032.6l-41-7.8 25.2 108.5z&quot;/&gt;&lt;/symbol&gt;&lt;symbol id=&quot;triangle&quot; viewBox=&quot;-851 1190.8 32 32&quot;&gt;&lt;path d=&quot;M-835 1190.8l-16 32h32z&quot;/&gt;&lt;/symbol&gt;&lt;symbol id=&quot;circle&quot; viewBox=&quot;0 0 48 48&quot;&gt;&lt;circle cx=&quot;24&quot; cy=&quot;24&quot; r=&quot;24&quot;/&gt;&lt;/symbol&gt;&lt;symbol id=&quot;diamond&quot; viewBox=&quot;-476 703.9 108 108&quot;&gt;&lt;path d=&quot;M-367.987 757.886l-54.022 54.023-54.023-54.023 54.023-54.022z&quot;/&gt;&lt;/symbol&gt;&lt;symbol id=&quot;square&quot; viewBox=&quot;-466 713.9 88 88&quot;&gt;&lt;path d=&quot;M-466 713.9h88v88h-88v-88z&quot;/&gt;&lt;/symbol&gt;&lt;symbol id=&quot;tick&quot; viewBox=&quot;-558 778.1 44 35.6&quot;&gt;&lt;path d=&quot;M-541.9 813.7l-16.1-16.2 7.6-7.5 8.5 8.5 20.3-20.4 7.6 7.6z&quot;/&gt;&lt;/symbol&gt;&lt;symbol id=&quot;close&quot; viewBox=&quot;-555 776.9 38 38&quot;&gt;&lt;path d=&quot;M-517 784.2l-7.3-7.3-11.7 11.7-11.7-11.7-7.3 7.3 11.7 11.7-11.7 11.7 7.3 7.3 11.7-11.7 11.7 11.7 7.3-7.3-11.7-11.7 11.7-11.7z&quot;/&gt;&lt;/symbol&gt;&lt;symbol id=&quot;image&quot; viewBox=&quot;-586 801.9 16 16&quot;&gt;&lt;path d=&quot;M-586 801.9v16h.8l2.8-5.6 2.4 4.8 4.4-8.8 4.8 9.6h.8v-16h-16zm4 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z&quot;/&gt;&lt;/symbol&gt;&lt;/svg&gt;&lt;!-- endinject --&gt;&lt;/div&gt;&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;&lt;script src=&quot;/game-blocks/quiz/controller.min_b8df53b9.js&quot;&gt;&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;">
    </iframe>

    <!-- ngView: -->
    <div id="mainView" ng-view="" class="ng-scope">
        <div class="screen answer-screen ng-scope" ios7lazyfix="">
            <div class="status-bar status-bar--header">
                <div class="status-bar__item status-bar__game-pin ng-binding">      PIN:      817387    </div>
                <div class="status-bar__item status-bar__question-number ng-binding" ng-bind-html="questionNumber()">1 of 1</div>
                <div class="status-bar__item status-bar__username ng-binding">      trai    </div>
                <!-- ngIf: showStatusBarScore -->
                <div class="status-bar__item status-bar__score ng-binding ng-scope" ng-if="showStatusBarScore" data-functional-selector="player-total-score">      0    </div>
                <!-- end ngIf: showStatusBarScore -->
            </div>
            <div class="screen__main screen__main--gutter-none selectanswer">
                <div class="answerFeedback animated-background animated-background--fast">
                    <div class="spinner">      </div>
                    <h1 ng-bind-html="primaryFeedbackMessage" class="ng-binding">Were you tooooooo fast?</h1>
                </div>
            </div>
            <div class="status-bar status-bar--footer">
                <div class="status-bar__item status-bar__username ng-binding">      trai    </div>
                <!-- ngIf: showStatusBarScore -->
                <div class="status-bar__item status-bar__score ng-binding ng-scope" ng-if="showStatusBarScore" data-functional-selector="player-total-score">      0    </div>
                <!-- end ngIf: showStatusBarScore -->
            </div>
        </div>
    </div>

    <div alerts="">
    </div>
</div>
<div id="endScreen">
    End game!
</div>

<script>
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

    // showScreen("homeScreen");
    function changeStage() {
        var inputGamePin = document.getElementById('inputGamePin').value;
        var inputNickname = document.getElementById('inputNickName').value;
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "1.0/game/join?gamePIN=" + inputGamePin + "&nickname=" + inputNickname, true);
        xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhttp.onreadystatechange = function() {
            if ( xhttp.readyState == "4" ) {
                var res = JSON.parse(xhttp.response);
                console.log("Type: " + res.type);
                if (res.type != "JOIN_ACCEPTED") {
                    console.log(res.content);
                    alert(res.content);
                } else {
                    console.log("Game PIN: " + res.content);            //Debug
                    console.log("Input nick name: "+ inputNickname);
                    showScreen("waitScreen");
                }
            }
        };
        xhttp.send();
        xhttp.onerror = function (e) {
            console.error(xhttp.statusText);
        };
    }
    // changeStage();
</script>

</body>
</html>