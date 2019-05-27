<html>
<head>
    <title>Play</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Play RipWeb! - Enter game PIN here</title>
    <link rel="stylesheet" href="resources/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="resources/css/playzone.css">
    <link rel="stylesheet" href="resources/css/button.css">
</head>
<body>
<div id="homeScreen">
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
                                <span class="ng-binding">              Kahoot!            </span>          </div>        </div>
                        <form ng-submit="joinSession(gameId)" class="ng-pristine ng-valid">
                            <input id="inputSession" ios7fix="" class="username ng-pristine ng-untouched ng-valid ng-empty" ng-class="{invalid: !gamePinValid}" placeholder="Game PIN" ng-model="gameId" type="tel" shake="badGameId" data-functional-selector="game-pin-input" aria-label="Game pin" ng-change="gameIdChanged()" ng-focus="gameIdFocused()" ng-blur="gameIdUnfocused()">
                            <button type="submit" class="btn btn-greyscale join ng-binding" blocking="" data-functional-selector="join-button-game-pin">            Enter          </button>
                        </form>
                    </div>
                </div>
                <div class="vertical-alignment-wrapper__bottom">
                    <!-- ngIf: showStoreButton && isMobilePlatformSupported -->
                    <p class="info ng-binding" ng-show="!isMobileApp &amp;&amp; notStandalone()">        Create your own RipWeb for FREE at
                        <a href="https://www.youtube.com/watch?v=630vLpgGtJ8" target="_system" class="ng-binding">          Ahihi :))          </a>      </p>
                    <p class="legal-info" ng-show="!isMobileApp">
                        <a href="https://dictionary.cambridge.org/vi/dictionary/english/term" class="legal-info__link ng-binding" target="_system">          Terms        </a>        |        <a href="https://dictionary.cambridge.org/vi/dictionary/english/privacy?q=Privacy" class="legal-info__link ng-binding" target="_system">          Privacy        </a>      </p>    </div>  </div></div></div>

    <div alerts=""></div>
    <script type="text/javascript" src="Mainpage_files/bootstrap.js"></script>
</div>
<div id="waitScreen">
    Yeahh! Let's wait other players :)
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
    Good luck for your answer :))
</div>
<div id="endScreen">
    End game!
</div>

<script>
    function showScreen(divId) {
        var divID = ["homeScreen", "waitScreen", "playScreen","waitNextScreen","endScreen"];
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
    showScreen("homeScreen");
</script>

</body>
</html>