<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Play RipWeb! - Enter game PIN here</title>
    <link rel="stylesheet" href="resources/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="resources/css/playzone.css">
    <link rel="stylesheet" href="resources/css/button.css">
</head>

<body>
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

<div id="gameBlockIframe" style="display: block;" class="game-block-iframe"scrolling="no">
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

<!-- ngView: --><div id="mainView" ng-view="" class="ng-scope" style="height: auto;">
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
</body>

</html>