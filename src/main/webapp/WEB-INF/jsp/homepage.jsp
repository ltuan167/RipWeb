<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html class="home page-template page-template-page--component-template page-template-page--component-template-php page page-id-3889 background-type--pattern canvas canvastext csscalc svgclippaths flexbox flexboxlegacy no-flexboxtweener fixedsticky-withoutfixedfixed velocity no-touch kahooter has-cookie-msg canvas canvastext csscalc svgclippaths flexbox flexboxlegacy no-flexboxtweener canvas canvastext csscalc svgclippaths flexbox flexboxlegacy no-flexboxtweener canvas canvastext csscalc svgclippaths flexbox flexboxlegacy no-flexboxtweener nav-fixed" data-theme="purple" lang="en"><link type="text/css" id="dark-mode" rel="stylesheet" href=""><style type="text/css" id="dark-mode-custom-style"></style><head><link type="text/css" id="dark-mode" rel="stylesheet" href=""><style type="text/css" id="dark-mode-custom-style"></style><link type="text/css" id="dark-mode" rel="stylesheet" href=""><style type="text/css" id="dark-mode-custom-style"></style><link type="text/css" id="dark-mode" rel="stylesheet" href=""><style type="text/css" id="dark-mode-custom-style"></style><link type="text/css" id="dark-mode" rel="stylesheet" href=""><style type="text/css" id="dark-mode-custom-style"></style>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="98uiE1NNtDmzt6ze17O0naCIZm99GcgkMqvsifyn_fQ">
    <link rel="icon" href="resources/icon/favicon.png">

    <style>
        html {
            font-family: sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%
        }
        body {
            margin: 0
        }
        header,
        main,
        nav,
        section {
            display: block
        }
        a {
            background-color: transparent
        }
        strong {
            font-weight: bold
        }
        h1 {
            font-size: 2em;
            margin: 0.67em 0
        }
        img {
            border: 0
        }
        svg:not(:root) {
            overflow: hidden
        }
        button {
            color: inherit;
            font: inherit;
            margin: 0
        }
        button {
            overflow: visible
        }
        button {
            text-transform: none
        }
        button {
            -webkit-appearance: button
        }
        button::-moz-focus-inner {
            border: 0;
            padding: 0
        }
        body {
            font-family: 'Montserrat', sans-serif
        }
        h1,
        p {
            padding: 0;
            margin: 0
        }
        .hero-title {
            font-size: 20px;
            font-weight: 900;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            line-height: 1
        }
        .hero-title {
            color: #fff;
            text-shadow: -2px 2px 0 rgba(0, 0, 0, 0.25)
        }
        p {
            font-size: 14px;
            line-height: 1.6;
            text-align: left;
            color: #333
        }
        h1+p {
            margin-top: 20px
        }
        a {
            text-decoration: underline
        }
        p {
            line-height: 1.4;
            font-weight: 400
        }
        strong {
            font-weight: 700;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
        @media screen and (min-width:600px) {
            .hero-title {
                font-size: 32px
            }
            .hero-title {
                text-shadow: -4px 4px 0 rgba(0, 0, 0, 0.25)
            }
        }
        @media screen and (min-width:900px) {
            .hero-title {
                font-size: 44px
            }
            .hero-title {
                text-shadow: -4px 4px 0 rgba(0, 0, 0, 0.25)
            }
        }
        .anchor-wrap {
            position: relative;
            z-index: 10
        }
        .page-anchor {
            position: absolute;
            display: block;
            top: -160px;
            height: 1px;
            width: 100px
        }
        .mobile-show {
            display: none
        }
        @media screen and (max-width:600px) {
            .mobile-hide {
                display: none
            }
            .mobile-show {
                display: block
            }
        }
        @media screen and (max-width:760px) {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px
        }
        .visually-hidden {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px
        }
        .cookie-message {
            padding: 10px;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            z-index: 10
        }
        .cookie-message {
            z-index: 101
        }
        .cookie-message .cookie-message__inner {
            background-color: #333;
            color: #fff;
            font-size: 16px;
            border-radius: 4px;
            padding: 10px;
            text-align: center;
            line-height: 1.5
        }
        .cookie-message .cookie-message__inner a {
            color: inherit;
            font-weight: 700;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
        .cookie-message .cookie-message__inner .btn {
            margin-left: 10px;
            font-size: 14px;
            padding: 8px 18px
        }
        .cookie-message .textwidget {
            display: inline-block;
            margin-right: .875em;
            margin-left: .875em;
            margin-top: .625em
        }
        @media screen and (min-width:760px) {
            .cookie-message {
                width: 400px;
                left: auto;
                right: 0
            }
        }
        .cookie-close {
            position: absolute;
            top: .875em;
            right: .875em;
            width: 1.25em;
            height: 1.25em;
            display: block;
            text-decoration: none
        }
        .cookie-close:after {
            content: '✖';
            font-size: 1em;
            color: #fff;
            display: block;
            text-align: center
        }
        .scroll-indicator,
        .scroll-indicator__inner {
            z-index: 99;
            position: fixed;
            left: 50%;
            bottom: 20px
        }
        .scroll-indicator__inner {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
            margin-left: -20px
        }
        @media screen and (max-width:760px) {
            .scroll-indicator,
            .scroll-indicator[style] {
                display: none!important
            }
        }
        @media (min-height:900px) {
            .scroll-indicator,
            .scroll-indicator[style] {
                display: none!important
            }
        }
        a.btn,
        .header-menu ul li.btn-wrap a,
        .header-menu ul li.btn-wrap a,
        .header-menu .btn-wrap a {
            font-size: 1rem;
            padding: .5em 1em;
            border-radius: .25em;
            background-color: #26890C;
            color: #fff;
            font-weight: 700;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-decoration: none;
            display: inline-block;
            position: relative;
            top: 0
        }
        a.btn.btn--raised {
            padding: .875em 1em;
            top: 0;
            position: relative;
            -webkit-transform: all .4s;
            -ms-transform: all .4s;
            transform: all .4s;
            min-width: 6rem;
            text-align: center;
            text-decoration: none
        }
        a.btn.btn--raised:before,
        a.btn.btn--raised:after {
            content: ' ';
            position: absolute;
            left: 0;
            width: 100%;
            top: 0;
            bottom: -.25em;
            background-color: inherit;
            z-index: -1;
            border-radius: .25em
        }
        a.btn.btn--raised:after {
            background: rgba(0, 0, 0, 0.25)
        }
        .header-menu .btn-wrap a {
            padding: 11px 16px
        }
        a.btn,
        .header-menu ul li.btn-wrap a {
            font-size: 16px
        }
        @media screen and (min-width:760px) {
            a.btn,
            .header-menu ul li.btn-wrap a {
                padding: 12px 24px
            }
        }
        .btn-trans {
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            font-weight: bold;
            font-size: 1rem;
            padding: .375rem .625rem;
            border-radius: .25rem;
            white-space: nowrap;
            text-decoration: none
        }
        .btn-trans svg {
            margin-left: .25rem;
            width: .625rem;
            height: .75rem;
            margin-top: .125rem
        }
        .page-header {
            padding: .4375em .625em;
            position: relative;
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            z-index: 9999;
            background-color: #fff;
            -webkit-box-shadow: 0 .1875em 0 rgba(0, 0, 0, 0.15);
            box-shadow: 0 .1875em 0 rgba(0, 0, 0, 0.15);
            width: 100%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box
        }
        .page-header .page-header__inner {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between
        }
        .page-header .kahoot-logo {
            display: none
        }
        @media screen and (min-width:760px) {
            .page-header .k-logo {
                display: none
            }
            .page-header .kahoot-logo {
                display: block
            }
        }
        #skip-to-content {
            position: absolute;
            font-size: .875rem;
            color: #333;
            text-decoration: none;
            white-space: nowrap;
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px
        }
        @media screen and (max-width:760px) {
            #skip-to-content {
                top: 100%;
                left: 0;
                background: #fff;
                padding: .125rem .25rem
            }
        }
        @media screen and (min-width:760px) {
            #skip-to-content {
                top: 1.125rem;
                left: 7rem
            }
        }
        .header-menu ul,
        .page-nav ul {
            margin: 0;
            padding: 0;
            list-style-type: none
        }
        .header-menu ul {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
        }
        .header-menu ul li {
            font-size: .875em
        }
        .header-menu ul li.btn-wrap a {
            font-size: 1rem;
            margin-left: .5rem;
            padding: .5rem 1.5rem;
            line-height: 1.5rem
        }
        .header-menu a {
            color: #333;
            text-decoration: none;
            font-weight: 700;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            padding: .5rem .5rem;
            display: block
        }
        .header-menu a:first-letter,
        .header-menu a::first-letter {
            text-transform: uppercase
        }
        html:not(.kahooter) .return-visitor {
            display: none!important
        }
        .page-nav {
            background-color: #25076B;
            padding: 1em;
            font-weight: 700;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }
        .page-nav .inner {
            width: 100%;
            max-width: 100%
        }
        .page-nav a {
            white-space: nowrap
        }
        .logo-link {
            display: block
        }
        @media screen and (max-width:760px) {
            .logo-link {
                height: 2.5rem
            }
            .page-nav li {
                font-weight: 900;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-transform: uppercase
            }
            .page-nav ul.sub-menu li {
                font-weight: 700;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-transform: none
            }
            .page-nav {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between
            }
            .page-nav>a {
                width: 100%
            }
            .page-nav .inner {
                max-height: 0;
                overflow: hidden
            }
            .page-nav li {
                font-size: 2em;
                letter-spacing: 0.02em;
                opacity: 0;
                position: relative;
                top: 1.25em;
                margin-bottom: 1.25em
            }
            .page-nav li a {
                color: #fff
            }
            ul.sub-menu {
                margin-top: 1.25em
            }
            ul.sub-menu li {
                font-size: 1rem
            }
            ul.sub-menu li:before {
                content: '–';
                color: #fff;
                margin-right: .625em;
                font-weight: 900;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale
            }
            .menu-toggle {
                display: block;
                font-weight: 700;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-align: center;
                color: #fff;
                text-decoration: none;
                position: relative;
                font-size: .9375em
            }
            .menu-toggle span {
                display: inline-block;
                text-decoration: underline
            }
            .menu-toggle svg {
                -webkit-transform: rotate(0);
                -ms-transform: rotate(0);
                transform: rotate(0)
            }
        }
        @media screen and (min-width:760px) {
            .page-header {
                padding: .4375em 1.5em;
                border-bottom: .125em solid #fff;
                -webkit-box-shadow: none;
                box-shadow: none
            }
            .page-header .logo-link {
                width: 4.375rem;
                height: 1.5rem;
                padding-top: .5rem;
                padding-bottom: .5rem
            }
            .page-header .logo-link .kahoot-logo {
                display: block;
                max-width: 100%;
                height: auto
            }
            .page-header .btn-wrap a {
                font-size: .875rem;
                padding: 9px 1.5rem;
                border-radius: .25rem;
                margin-left: .75rem
            }
            .header-menu a {
                padding-left: .75em;
                padding-right: .75em
            }
            .menu-toggle {
                display: none
            }
            .page-nav {
                position: relative;
                border-bottom: .0625em solid #6B3D99;
                padding-top: 0;
                padding-bottom: 0;
                padding-left: 1.5rem;
                padding-right: 1.5rem
            }
            .page-nav li:first-of-type {
                margin-left: -.625em
            }
            .page-nav ul {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex
            }
            .page-nav ul li {
                font-size: .875rem;
                position: relative
            }
            .page-nav ul a {
                color: #fff;
                padding: 1rem .625rem;
                display: block;
                text-decoration: none;
                overflow: visible
            }
            .menu-main-navigation-container>ul>li.menu-item-has-children a {
                position: relative
            }
            .menu-main-navigation-container>ul>li.menu-item-has-children>a:after {
                content: ' ';
                background-image: url("https://kahoot.com/wp-content/themes/kahoot2017/assets/img/toggle.svg");
                background-repeat: no-repeat;
                background-position: center center;
                background-size: contain;
                width: .625rem;
                height: .5rem;
                display: inline-block;
                margin-left: .3125rem
            }
            .page-nav .sub-menu {
                position: absolute;
                top: 100%;
                left: -624.9375rem;
                height: 0;
                overflow: hidden;
                min-width: 100%;
                padding: .625rem .875rem;
                display: block;
                z-index: 3
            }
            .page-nav .sub-menu li,
            .page-nav .sub-menu a {
                display: block
            }
            .page-nav .sub-menu li {
                white-space: nowrap;
                margin: 0
            }
            .page-nav .sub-menu li:first-of-type {
                margin-left: 0
            }
            .page-nav .sub-menu li a {
                padding: .3125rem 0
            }
        }
        .page-nav {
            position: absolute;
            left: 0;
            top: 3.375rem;
            width: 100%;
            z-index: 12;
            -webkit-box-sizing: border-box;
            box-sizing: border-box
        }
        .outer {
            padding-left: .9375rem;
            padding-right: .9375rem
        }
        main.page .outer {
            max-width: 68.75rem;
            margin-left: auto;
            margin-right: auto;
            -webkit-box-sizing: border-box;
            box-sizing: border-box
        }
        main.page {
            min-height: 37.5rem
        }
        @media screen and (min-width:760px) {
            .outer {
                padding-left: 2.5rem;
                padding-right: 2.5rem
            }
        }
        @media screen and (min-width:900px) {
            .outer {
                padding-left: 5rem;
                padding-right: 5rem
            }
        }
        .inner {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto
        }
        .new-window a:after {
            content: url('https://kahoot.com/wp-content/themes/kahoot2017/assets/img/new-window-icon.svg');
            margin-left: 6px
        }
        .env-section {
            position: relative;
            z-index: 2
        }
        .env-section .hero-title {
            text-shadow: none
        }
        .env-section__top {
            background-color: #fff
        }
        .env-section__top .hero-title {
            text-shadow: none
        }
        .env-section__top h1 {
            text-align: center
        }
        .env-section .hero-title {
            line-height: 1;
            color: #333
        }
        .env-section__top {
            width: 100%
        }
        .env-section__top {
            position: relative;
            padding-left: 20px;
            padding-right: 20px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start
        }
        .env-section__top>* {
            width: 100%
        }
        .env-section__top .inner {
            max-width: 940px
        }
        .env-section__top .hero-title {
            margin-top: 40px
        }
        .env-section__top .inner {
            background-color: #fff
        }
        .env-section__top:after {
            height: .875rem
        }
        .env-section__top:before {
            height: 1rem
        }
        .env-section__top:after,
        .env-section__top:before {
            content: ' ';
            position: absolute;
            width: 100%;
            left: 0;
            -webkit-clip-path: polygon(0 0, 100% 98%, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 98%, 100% 100%, 0 100%)
        }
        .env-section__top:before {
            background-color: rgba(0, 0, 0, 0.15);
            bottom: 100%
        }
        .env-section__top:after {
            background-color: #fff;
            bottom: calc(100% - 1px)
        }
        @media screen and (min-width:600px) {
            .env-section__top {
                padding-left: 60px;
                padding-right: 60px
            }
        }
        @media screen and (min-width:760px) {
            .env-section__top {
                padding-left: 100px;
                padding-right: 100px
            }
            .env-section__top:after {
                height: 1.6875rem
            }
            .env-section__top:before {
                height: 1.875rem
            }
        }
        .page-section {
            position: relative;
            background-color: #46178F;
            padding: 3.125rem 0 0
        }
        @media screen and (min-width:760px) {
            .page-section {
                padding: 50px 0 0
            }
        }
        .page-section .inner {
            position: relative;
            z-index: 2
        }
        .page-section+.page-section.envelope-section:before {
            background-position: left top
        }
        section+.page-section {
            padding-top: 0
        }
        .modal-overlay {
            -webkit-box-sizing: border-box;
            box-sizing: border-box
        }
        .modal-overlay {
            position: fixed;
            background: rgba(0, 0, 0, 0.8);
            opacity: 0.8;
            left: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            max-width: 100%;
            z-index: 999;
            display: none;
            opacity: 0
        }
        .clipped-hero {
            position: relative;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            overflow: hidden;
            padding-bottom: 2.5rem
        }
        .clipped-hero .btn.btn--raised {
            background-color: #26890C
        }
        .clipped-hero .btn.btn--raised:after {
            -webkit-box-shadow: 0 0 0 .125em #fff;
            box-shadow: 0 0 0 .125em #fff
        }
        .clipped-hero .btn-trans,
        .clipped-hero .btn-trans[style] {
            display: none!important
        }
        .clipped-hero__content {
            text-align: center;
            position: relative;
            max-width: 48.75rem;
            z-index: 10;
            margin-bottom: 3.75rem
        }
        .clipped-hero__content h1,
        .clipped-hero__content p {
            color: #fff
        }
        .clipped-hero__content h1 {
            font-size: 2.5rem;
            line-height: 1.15;
            text-shadow: -.1em .1em 0 rgba(0, 0, 0, 0.2);
            font-weight: 900
        }
        .clipped-hero__content p {
            text-align: center;
            font-size: 1rem;
            line-height: 1.5;
            text-shadow: -.125em .125em 0 rgba(0, 0, 0, 0.2);
            font-weight: 700;
            margin-bottom: 1.25em
        }
        .circle-clip {
            border-radius: 50%;
            overflow: hidden;
            z-index: 2
        }
        .circle-clip__inner {
            background-size: cover;
            background-repeat: no-repeat
        }
        .clipped-video {
            opacity: 0
        }
        @media screen and (max-width:760px) {
            .clipped-hero__img,
            .circle-clip__inner {
                height: 40vw
            }
            .clipped-hero__content img,
            .clipped-hero__content img[style] {
                display: none!important
            }
            .clipped-hero__img {
                margin-bottom: 1.25rem;
                position: relative
            }
            .circle-clip {
                width: 120vw;
                height: 120vw;
                position: absolute;
                left: 50%;
                -webkit-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                transform: translateX(-50%);
                bottom: 0
            }
            .circle-clip .circle-clip__inner {
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0
            }
            .circle-clip__inner {
                background-position: center 75%
            }
        }
        @media screen and (min-width:760px) {
            .clipped-hero {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: reverse;
                -ms-flex-direction: row-reverse;
                flex-direction: row-reverse;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                padding-top: 2.5rem;
                padding-bottom: 2.5rem
            }
            .clipped-hero .btn-trans,
            .clipped-hero .btn-trans[style] {
                display: block!important;
                position: absolute;
                bottom: 1.875rem;
                right: 3.75rem;
                z-index: 10
            }
            .clipped-hero__content,
            .clipped-hero__img {
                width: 50%
            }
            .clipped-hero__img {
                z-index: 2
            }
            .circle-clip {
                width: 100vw;
                height: 100vw
            }
            .circle-clip__inner {
                width: 50%;
                height: 100vh;
                -webkit-transform: translateY(10vw);
                -ms-transform: translateY(10vw);
                transform: translateY(10vw);
                background-size: auto 120%;
                background-position: right -20vw bottom
            }
            .circle-clip {
                position: absolute;
                top: -10vw;
                left: 100%;
                -webkit-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                transform: translateX(-50%)
            }
            .clipped-hero__content,
            .clipped-hero__content p {
                text-align: left
            }
        }
        @media screen and (min-width:900px) {
            .clipped-hero {
                min-height: 80vh
            }
            .clipped-hero__content h1 {
                font-size: 3rem
            }
            .clipped-hero__content p {
                font-size: 1.125rem
            }
            .circle-clip__inner {
                background-position: right -10vw center
            }
            main.page .clipped-hero .clipped-hero__content {
                max-width: 100%;
                width: 80rem;
                -webkit-box-sizing: content-box;
                box-sizing: content-box;
                margin-left: auto;
                margin-right: auto
            }
            .clipped-hero .clipped-hero__img {
                width: auto
            }
            .clipped-hero__content-inner {
                width: calc(50% - 2.5rem)
            }
        }
        .fullscreen-video {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: 99;
            background: rgba(0, 0, 0, 0.6);
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            overflow: auto;
            padding: 5rem;
            margin: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            display: none
        }
        .fullscreen-video>div {
            margin: auto
        }
        .fullscreen-video iframe {
            background-color: #000
        }
        .fullscreen-video>* {
            width: 100%
        }
        .fullscreen-video .close-wrap {
            overflow: hidden;
            padding: 5px
        }
        .fullscreen-video [data-a11y-dialog-hide] {
            color: #fff;
            float: right;
            text-decoration: none;
            border: none;
            background-color: transparent
        }
        .fullscreen-video [data-a11y-dialog-hide] .x {
            font-size: 1.875rem;
            line-height: 1;
            display: inline-block;
            -webkit-transform: translateY(.3125rem);
            -ms-transform: translateY(.3125rem);
            transform: translateY(.3125rem)
        }
        @media screen and (min-width:1700px) {
            main.page .clipped-hero .clipped-hero__content {
                width: 80vw
            }
            .clipped-hero__content h1 {
                font-size: 3vw
            }
            .clipped-hero__content p {
                font-size: 1.15vw;
            }
            .clipped-hero .btn {
                font-size: 0.9vw;
            }
        }
    </style>
    <link rel="stylesheet" href="resources/css/homepage.css" as="style" onload="null" data-loadcss="true" media="all">
    <noscript><link rel="stylesheet" href="https://kahoot.com/wp-content/themes/kahoot2017/assets/cssv/screen-ac4ffd37aa.css"></noscript>
    <%--    <script async="" src="final_files/gtm_005.js"></script>--%>
    <script type="text/javascript" id="www-widgetapi-script" src="resources/js/homepage/www-widgetapi_005.js" async=""></script>
    <script src="resources/js/homepage/iframe_api_002.txt"></script>
    <%--    <script type="text/javascript" async="" src="final_files/amplitude-4_003.js"></script>--%>
    <%--    <script async="" src="final_files/gtm_004.js"></script>--%>
    <script type="text/javascript" id="www-widgetapi-script" src="resources/js/homepage/www-widgetapi_004.js" async=""></script>
    <script src="resources/js/homepage/iframe_api.txt"></script>
    <%--    <script type="text/javascript" async="" src="final_files/amplitude-4_002.js"></script>--%>
    <%--    <script async="" src="final_files/gtm_003.js"></script>--%>
    <script type="text/javascript" id="www-widgetapi-script" src="resources/js/homepage/www-widgetapi_003.js" async=""></script>
    <%--    <script type="text/javascript" async="" src="final_files/analytics.js"></script>--%>
    <%--    <script type="text/javascript" async="" src="final_files/amplitude-4.js"></script>--%>
    <%--    <script src="/wp-content/themes/kahoot2017/assets/js/a11y-dialog.min.js"></script>--%>
    <script src="resources/js/homepage/iframe_api_002_002.txt"></script>
    <%--    <script async="" src="final_files/gtm_002.js"></script>--%>
    <script type="text/javascript" id="www-widgetapi-script" src="resources/js/homepage/www-widgetapi_002.js" async=""></script>
    <script type="text/javascript" id="www-widgetapi-script" src="resources/js/homepage/www-widgetapi.js" async=""></script>
    <script src="resources/js/homepage/a11y-dialog.js"></script>
    <script src="resources/js/homepage/iframe_api_003.txt"></script>
    <%--    <script async="" src="final_files/gtm.js"></script>--%>
    <script>
        /*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
        (function(a){if(!a.loadCSS){a.loadCSS=function(){}}var b=loadCSS.relpreload={};b.support=(function(){var d;try{d=a.document.createElement("link").relList.supports("preload")}catch(f){d=false}return function(){return d}})();b.bindMediaToggle=function(e){var f=e.media||"all";function d(){if(e.addEventListener){e.removeEventListener("load",d)}else{if(e.attachEvent){e.detachEvent("onload",d)}}e.setAttribute("onload",null);e.media=f}if(e.addEventListener){e.addEventListener("load",d)}else{if(e.attachEvent){e.attachEvent("onload",d)}}setTimeout(function(){e.rel="stylesheet";e.media="only x"});setTimeout(d,3000)};b.poly=function(){if(b.support()){return}var d=a.document.getElementsByTagName("link");for(var e=0;e<d.length;e++){var f=d[e];if(f.rel==="preload"&&f.getAttribute("as")==="style"&&!f.getAttribute("data-loadcss")){f.setAttribute("data-loadcss",true);b.bindMediaToggle(f)}}};if(!b.support()){b.poly();var c=a.setInterval(b.poly,500);if(a.addEventListener){a.addEventListener("load",function(){b.poly();a.clearInterval(c)})}else{if(a.attachEvent){a.attachEvent("onload",function(){b.poly();a.clearInterval(c)})}}}if(typeof exports!=="undefined"){exports.loadCSS=loadCSS}else{a.loadCSS=loadCSS}}(typeof global!=="undefined"?global:this));
    </script>
    <title>RipWeb! | Learning Games | Make Learning Awesome!</title>
    <meta name="description" content="Ripweb! is a game-based platform that makes learning awesome for millions of people all over the world. Sign up to create and play fun quiz games!">
    <%--    <link rel="canonical" href="https://kahoot.com/">--%>
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website">
    <meta property="og:title" content="RipWeb! | Learning Games | Make Learning Awesome!">
    <meta property="og:description" content="RipWeb! is a game-based platform that makes learning awesome for millions of people all over the world. Sign up to create and play fun quiz games!">
    <%--    <meta property="og:url" content="https://kahoot.com/">--%>
    <meta property="og:site_name" content="RipWeb!">
    <meta property="og:image" content="https://kahoot.com/files/2017/06/img-social-default.jpg">
    <meta property="og:image:secure_url" content="https://kahoot.com/files/2017/06/img-social-default.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="700">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:description" content="RipWeb! is a game-based platform that makes learning awesome for millions of people all over the world. Sign up to create and play fun quiz games!">
    <meta name="twitter:title" content="RipWeb! | Learning Games | Make Learning Awesome!">
    <meta name="twitter:image" content="https://kahoot.com/files/2017/06/img-social-default.jpg">
    <link rel="dns-prefetch" href="https://s.w.org/">
    <%--    <link rel="shortlink" href="https://kahoot.com/">--%>
    <style type="text/css" id="wp-custom-css">
        .plan-card .btn--white {
            color:#333333;
        }
        .plan-card .btn--white:hover {
            color:#333333;
            background-color: #f2f2f2;
        }
        .background-type--grey .env-section__body, .background-type--grey .page-section .env-section__body {
            background-color: #fff;
        }
        [data-theme] a.btn.btn--contrast:hover {
            color:#fff;
        }
        html.cp-pricing-schools.social-plans-page .banner-item__title {
            color: #25076b;
        }		</style>
    <style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}
    </style>
</head>
<body id="top" itemscope="" itemtype="http://schema.org/WebPage" class="touchpadSwipeAnimationCore">
<meta itemprop="name" content="RipWeb! | Learning Games | Make Learning Awesome!">
<meta itemprop="description" content="RipWeb! is a game-based platform that makes learning awesome for millions of people all over the world. Sign up to create and play fun quiz games!">
<div class="header-wrap">
    <header class="page-header" role="banner" itemscope="" itemtype="http://schema.org/WPHeader">
        <div class="page-header__inner">
            <img aria-hidden="true" src="resources/icon/favicon.png" alt="expand" width="38" height="40">
<%--            <a title="Link to ripweb.com homepage" aria-label="Link to ripweb.com homepage" class="logo-link" href="#">--%>
<%--                <svg width="38" height="40" viewBox="0 0 30 32" class="k-logo">--%>
<%--                    <title>R!</title>--%>
<%--                    &lt;%&ndash;                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">&ndash;%&gt;--%>
<%--                    &lt;%&ndash;                        <path d="M0,3.12411067 L5.3201581,1.75968379 L5.30711462,12.5774704 L14.2901186,3.91304348 L18.9106719,5.68853755 L12.3814229,12.9316206 L16.7118577,28.7075099 L12.013834,28.7075099 L8.5486166,16.6209486 L5.27588933,19.8256917 L5.3201581,28.7075099 L0,28.5173913 L0,3.12411067 Z M22.8873518,29.9964427 L24.2067194,26.8901186 L27.2715415,26.8901186 L28.4312253,30.2988142 L25.6794466,31.944664 L22.8873518,29.9964427 Z M29.8806324,1.81146245 L26.2513834,25.1272727 L20.4770751,-1.77635684e-15 L29.8806324,1.81146245 Z" fill="#46178F"></path>&ndash;%&gt;--%>
<%--                    &lt;%&ndash;                    </g>&ndash;%&gt;--%>
<%--                </svg>--%>
<%--                <svg width="146" height="50" viewBox="0 0 88 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" class="kahoot-logo">--%>
<%--                    <title>RipWeb!</title>--%>
<%--                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">--%>
<%--                        <!-- <path d="M59.4563337,25.5366087 C55.5222657,25.9279665 52.3340315,22.7810536 52.3340315,18.5078772 C52.3340315,14.2343593 55.3409298,10.8227848 59.0502914,10.8886941 C62.75897,10.9535789 65.9482288,14.1004918 66.1725936,17.9174256 C66.3969584,21.7336764 63.3900601,25.1449094 59.4563337,25.5366087 Z M37.7762727,17.5267508 C38.000979,13.7101585 41.1895547,10.5635871 44.8985748,10.4980193 C48.6075949,10.432793 51.6144932,13.8443675 51.6144932,18.1175439 C51.6144932,22.3910618 48.426259,25.5379747 44.4921911,25.1466169 C40.5584646,24.7552591 37.5519078,21.3436845 37.7762727,17.5267508 Z M0,4.88343502 L4.5965759,3.70458064 L4.58530644,13.0510655 L12.3465531,5.56506693 L16.3386759,7.09908023 L10.6974547,13.3570485 L14.4389172,26.9872962 L10.3798607,26.9872962 L7.38593935,16.5445998 L4.55832802,19.3134733 L4.5965759,26.9872962 L0,26.8230352 L0,4.88343502 Z M37.6004007,25.5065568 L33.5642246,25.5065568 L33.2999044,19.2940078 L32.9249385,14.8756944 C32.8310263,11.7779574 30.0375649,12.5644295 29.1920135,12.9383708 L29.4153538,25.5065568 L25.5584646,25.3730307 L24.9314725,1.04942628 L28.859735,-7.10542736e-15 L28.9485247,9.84029232 C33.2203351,8.47600401 35.5076951,8.49068846 36.0820963,14.7650487 L37.6004007,25.5065568 Z M81.0803889,28.3167517 L82.2203124,25.6329114 L84.8682952,25.6329114 L85.8702532,28.5779984 L83.4927375,30 L81.0803889,28.3167517 Z M66.1087333,13.4960386 L65.4479328,8.93088061 L68.8776068,9.05040525 L68.8817048,2.6397869 L71.9480239,3.91084601 L71.8944085,9.60158456 L76.301794,9.89220016 L76.301794,12.6552682 L71.9958337,12.896025 L72.3567981,21.3057782 C72.3567981,21.3057782 72.3656771,21.9635051 73.7135734,21.9635051 C75.0611283,21.9635051 76.301794,21.2224524 76.301794,21.2224524 L76.301794,25.5113378 C76.3605318,26.8148393 74.518828,27.3667016 74.518828,27.3667016 C68.631386,28.2607458 69.0637237,24.3543393 69.0637237,24.3543393 L68.8721428,13.4960386 L66.1087333,13.4960386 Z M87.1225298,3.96514434 L83.9868864,24.1098261 L78.9979282,2.40005464 L87.1225298,3.96514434 Z M16.4390766,12.8263592 L15.3626719,9.98577088 C15.3626719,9.98542938 23.2198798,6.47345415 24.1552454,12.7758173 L24.0418678,26.3176168 L18.0772471,26.3169338 C18.0772471,26.3169338 15.4593161,26.417676 14.6540616,23.4971769 C14.6540616,23.4971769 12.6409252,16.0559148 20.5961433,14.6455241 L20.6169748,12.8325061 C20.6169748,12.8325061 19.1085739,11.2045806 16.4390766,12.8263592 Z M56.3920636,18.7834669 C56.560081,20.7604043 57.7846963,21.838175 58.5892678,21.9331117 C60.6290411,22.1738685 62.3652217,20.3082597 62.2491121,17.933476 C62.132661,15.5583508 61.1836354,14.0738548 59.2592888,14.0332165 C57.3363082,13.9925781 56.1724797,16.2010518 56.3920636,18.7834669 Z M20.5876059,23.7266642 L20.6962025,17.6636918 C17.445474,17.1913988 17.3846872,21.5909298 17.3846872,21.5909298 C17.7022812,24.4335671 20.5876059,23.7266642 20.5876059,23.7266642 Z M45.3595984,21.5431199 C46.1641699,21.4481832 47.3887852,20.3704125 47.5564612,18.3934751 C47.7763865,15.81106 46.6128996,13.6025863 44.6895775,13.6432247 C42.7652309,13.6835215 41.8158638,15.168359 41.7000956,17.5434842 C41.583303,19.9179264 43.3194837,21.7838767 45.3595984,21.5431199 Z" fill="#46178F"></path>--%>
<%--                     -->--%>
<%--                    </g>--%>
<%--                </svg>--%>
<%--            </a>--%>
            <a href="#main" id="skip-to-content">Skip to Page content</a>
            <nav class="header-menu" aria-label="Navigation" itemscope="" itemtype="https://schema.org/SiteNavigationElement">
                <div class="menu-header-menu-container"><ul id="menu-header-menu" class="">
                    <li id="menu-item-102" class="mobile-hide menu-item menu-item-type-post_type menu-item-object-page menu-item-102"><a data-tracking-id="explore-games-top-bar" itemprop="url" href="#aboutUs">About Us</a></li>
                    <li id="menu-item-34" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-34"><a target="_self" data-tracking-id="play-top-bar" itemprop="url" href="play">Enter game PIN!</a></li>
                    <li id="menu-item-35" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-35"><a target="_self" data-tracking-id="sign-in-top-bar" itemprop="url" href="login">Log in</a></li>
                    <li id="menu-item-36" class="btn-wrap menu-item menu-item-type-custom menu-item-object-custom menu-item-36"><a target="_self" data-tracking-id="sign-up-top-bar" itemprop="url" href="signup">Sign up</a></li>
                    <li id="menu-item-6515" class="mobile-hide nav-icon nav-icon--help menu-item menu-item-type-custom menu-item-object-custom menu-item-6515"><a target="_self" href="https://support.ripweb.com/" itemprop="url"><span class="visually-hidden">Help</span></a></li>
                </ul></div>			</nav>
        </div>
    </header>
    <nav id="page-nav" class="page-nav fixed" aria-label="Primary Navigation" itemscope="" itemtype="https://schema.org/SiteNavigationElement">
        <div class="inner">
            <div class="menu-main-navigation-container"><ul id="menu-main-navigation" class="">
                <li id="menu-item-3426" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3426"><a itemprop="url" href=""></a>
                </li>
            </ul></div>       </div>
    </nav>
</div><!--/header-wrap-->
<main id="main" class="page">
    <section class="page-section">
        <div class="clipped-hero">
            <div class="clipped-hero__img">
                <div class="circle-clip">
                    <div class="circle-clip__inner" style="background-image: url(https://kahoot.com/files/2018/11/Hero_flipped-e1541772173872.jpg); ">
                        <%--                        <iframe id="d-video" class="clipped-video playing" data-video-id="yZvikyjgA1U" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="final_files/yZvikyjgA1U_002_002.html" width="640" height="390" frameborder="0"></iframe>--%>
                        <%--                        khoa--%>
                        <div class="video-mask"></div>
                    </div>
                </div>
            </div>
            <div class="clipped-hero__content outer">
                <div class="clipped-hero__content-inner">
                    <img src="resources/img/homepage/device-image.svg" role="presentation" class="in-up" alt=" " style="opacity: 1; display: inline-block; transform: translateY(0px);">
                    <h1>Make learning awesome!</h1>
                    <p>RipWeb! makes it easy to create, share and play fun learning games or trivia quizzes in minutes.</p>
                    <a target="_self" data-tracking-id="hero-sign-up" class="btn btn--raised" href="signup">Sign up for free</a>
                </div>
            </div>
            <%--            <a href="javascript:;" class="btn-trans" data-a11y-dialog-show="hero-video" style="">--%>
            <%--                Watch video--%>
            <%--                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="18px" viewBox="0 0 15 18" style="enable-background:new 0 0 15 18;" xml:space="preserve">--%>
            <%--						<g>--%>
            <%--                            <path fill="#fff" d="M2,3.5l9,5.3L2,14V3.5z M0,0v17.5l15-8.7L0,0z"></path>--%>
            <%--                        </g>--%>
            <%--					</svg>--%>
            <%--            </a>--%>
        </div>
        <div id="hero-video" aria-hidden="true">
            <div tabindex="-1"></div>
            <dialog aria-labelledby="kahootvideo" role="alertdialog" class="fullscreen-video">
                <div class="inner">
                    <div class="close-wrap">
                        <button type="button" data-a11y-dialog-hide="" aria-label="Close this dialog window">
                            <strong>Close</strong> <span class="x">×</span>
                        </button>
                    </div>
                    <div>
                        <h1 id="kahootvideo" class="visually-hidden">Ripweb played around the world</h1>
                        <iframe id="fs-video" src="" data-src="https://www.youtube.com/embed/yZvikyjgA1U?version=3&amp;autoplay=1&amp;loop=1&amp;mute=0&amp;disablekb=1&amp;modestbranding=1&amp;showinfo=0&amp;controls=1&amp;rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>
                    </div>
                </div>
            </dialog>
        </div><div class="anchor-wrap"><a name="for-teachers" class="page-anchor"></a></div></section><!-- /close section -->
    <!-- ++ open env + + --><section class="page-section envelope-section" id="aboutUs">
    <div class="env-section">
        <!-- + + open env + + -->
        <div class="env-section__top ">
            <div class="inner ">
                <h1 class="hero-title">About Us</h1>
                <p>'We' is powerful. We believe in 'We', when you talk to us, you are the businessman, user's advocate and industry insider. When you and us come together progress, discoveries and inventions happen.</p>			</div>
        </div>
        <div class="env-section__body">
            <div class="layout-component">
                <div class="outer">
                    <div class="inner">
                        <div class="layout layout--tripple">
                            <div class="layout__inner" itemscope="" itemtype="https://schema.org/Blog">
                                <div class="layout__item" style="opacity: 1; display: flex; transform: scaleX(1) scaleY(1);">
                                    <article class="card-component  component-theme--purple" itemscope="" itemprop="blogPost" itemtype="http://schema.org/BlogPosting">
                                        <meta itemprop="mainEntityOfPage" content="https://kahoot.com/blog/2019/05/15/poio-joins-kahoot-family-innovative-learn-to-read-app/">
                                        <figure class="card-component__img" itemprop="image" itemscope="" itemtype="https://schema.org/ImageObject">
                                            <a href="https://github.com/tranduckhoatcu" class="skew" aria-labelledby="post-id-7707">
                                                <div class="skew__inner">
                                                    <img src="resources/img/homepage/khoa2.jpg" class="attachment-blog-component size-blog-component wp-post-image lzy-loaded" alt="Ripweb! and Poio join forces" width="570" height="320">
                                                    <meta itemprop="url" content="https://kahoot.com/files/2019/05/Poio-blog-725x408.jpg">
                                                    <meta itemprop="height" content="570">
                                                    <meta itemprop="width" content="320">
                                                </div>
                                            </a>
                                        </figure>
                                        <div class="card-component__body card-component__body--tag">
                                            <div class="author-meta">
                                                <figure class="author-meta__avatar" itemprop="author" itemscope="" itemtype="https://schema.org/Person">
                                                    <a href=" https://www.facebook.com/tranduckhoatcu" rel="author" itemprop="url" aria-labelledby="author-post-id-7707">
                                                        <img alt="Daniel Senn, Poio avatar" class="lzy-loaded" data-lzy-src="https://kahoot.com/files/2017/05/daria_trans-64x64.png" src="resources/img/homepage/khoa1.jpg" width="64" height="64">
                                                    </a>
                                                    <meta itemprop="name" content="Daniel Senn, Poio">
                                                </figure>
                                                <div class="author-meta__info">
                                                    <a class="author-meta__name" id="author-post-id-7707" href="https://www.facebook.com/tranduckhoatcu"><span class="visually-hidden">Author:</span>Khoa Tran, Tcu</a>
                                                    <span class="author-meta__date" datetime="2019-05-15T05:36:37+00:00">Dec 06, 1998</span>
                                                    <meta itemprop="datePublished" content="2019-05-15T05:36:37+00:00" datetime="2019-05-15T05:36:37+00:00">
                                                    <meta itemprop="dateModified" content="2019-05-15T05:36:37+00:00" datetime="2019-05-15T05:36:37+00:00">
                                                    <div itemprop="publisher" itemscope="" itemtype="https://schema.org/Organization" class="visually-hidden" style="display:none;">
                                                        <meta itemprop="name" content="RipWeb!">
                                                        <div itemprop="logo" itemscope="" itemtype="https://schema.org/ImageObject">
                                                            <meta itemprop="url" content="https://kahoot.com/kahoot.png">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-component__snippet">
                                                <h1 itemprop="headline" id="post-id-7707"><a title="Front-end Developer">Front-end Developer</a></h1>
                                                <p itemprop="description">Have a good day <3</p>
                                            </div>
                                            <div class="skew-wrap">
                                                <div class="card-component__hashtag skew">
                                                    <div class="skew__inner" itemprop="keywords">
                                                        <a href="https://www.facebook.com/tranduckhoatcu" rel="tag">Learn More</a>						</div>
                                                </div>
                                            </div>
                                        </div><!--blog-component__body -->
                                    </article>
                                </div><!-- //layout__item --><div class="layout__item" style="opacity: 1; display: flex; transform: scaleX(1) scaleY(1);">
                                <article class="card-component  component-theme--green" itemscope="" itemprop="blogPost" itemtype="http://schema.org/BlogPosting">
                                    <meta itemprop="mainEntityOfPage" content="https://github.com/lttony98">
                                    <figure class="card-component__img" itemprop="image" itemscope="" itemtype="https://schema.org/ImageObject">
                                        <a href="https://github.com/lttony98" class="skew" aria-labelledby="post-id-7649">
                                            <div class="skew__inner">
                                                <img src="resources/img/homepage/tuan2.jpg" class="attachment-blog-component size-blog-component wp-post-image lzy-loaded" alt="Ripweb! and DragonBox join forces to make learning math awesome" itemprop="url"  width="570" height="320">
                                                <meta itemprop="url" content="https://kahoot.com/files/2019/05/make-learning-math-awesome-blog-cover-725x408.jpg">
                                                <meta itemprop="height" content="570">
                                                <meta itemprop="width" content="320">
                                            </div>
                                        </a>
                                    </figure>
                                    <div class="card-component__body card-component__body--tag">
                                        <div class="author-meta">
                                            <figure class="author-meta__avatar" itemprop="author" itemscope="" itemtype="https://schema.org/Person">
                                                <a href="https://www.facebook.com/l.etu.an20320" rel="author" itemprop="url" aria-labelledby="author-post-id-7649">
                                                    <img alt="Jean-Baptiste Huynh, DragonBox avatar" class="lzy-loaded" data-lzy-src="https://kahoot.com/files/2017/05/daria_trans-64x64.png" src="resources/img/homepage/tuan1.png" width="64" height="64">
                                                </a>
                                                <meta itemprop="name" content="Jean-Baptiste Huynh, DragonBox">
                                            </figure>
                                            <div class="author-meta__info">
                                                <a class="author-meta__name" id="author-post-id-7649" href="https://www.facebook.com/l.etu.an20320"><span class="visually-hidden">Author:</span>Le Tuan, Lee</a>
                                                <span class="author-meta__date" datetime="2019-05-09T03:44:00+00:00">?? ??, 1998</span>
                                                <meta itemprop="datePublished" content="2019-05-09T03:44:00+00:00" datetime="2019-05-09T03:44:00+00:00">
                                                <meta itemprop="dateModified" content="2019-05-09T03:44:00+00:00" datetime="2019-05-09T03:44:00+00:00">
                                                <div itemprop="publisher" itemscope="" itemtype="https://schema.org/Organization" class="visually-hidden" style="display:none;">
                                                    <meta itemprop="name" content="RipWeb!">
                                                    <div itemprop="logo" itemscope="" itemtype="https://schema.org/ImageObject">
                                                        <meta itemprop="url" content="https://kahoot.com/kahoot.png">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-component__snippet">
                                            <h1 itemprop="headline" id="post-id-7649"><a title="Back-end Developer">Back-end Developer</a></h1>
                                            <p itemprop="description">your quote ???</p>
                                        </div>
                                        <div class="skew-wrap">
                                            <div class="card-component__hashtag skew">
                                                <div class="skew__inner" itemprop="keywords">
                                                    <a href="https://www.facebook.com/l.etu.an20320" rel="tag">Learn More</a>						</div>
                                            </div>
                                        </div>
                                    </div><!--blog-component__body -->
                                </article>
                            </div><!-- //layout__item --><div class="layout__item" style="opacity: 1; display: flex; transform: scaleX(1) scaleY(1);">
                                <article class="card-component  component-theme--red" itemscope="" itemprop="blogPost" itemtype="http://schema.org/BlogPosting">
                                    <meta itemprop="mainEntityOfPage" content="https://github.com/hungthuanmk">
                                    <figure class="card-component__img" itemprop="image" itemscope="" itemtype="https://schema.org/ImageObject">
                                        <a href="https://github.com/hungthuanmk" class="skew" aria-labelledby="post-id-7637">
                                            <div class="skew__inner">
                                                <img src="resources/img/homepage/thuan2.jpg" class="attachment-blog-component size-blog-component wp-post-image lzy-loaded" alt="Happy Teacher Appreciation Week!" itemprop="url" width="570" height="320">
                                                <meta itemprop="url" content="https://kahoot.com/files/2019/05/teacher_appreciation_week_2019-725x408.png">
                                                <meta itemprop="height" content="570">
                                                <meta itemprop="width" content="320">
                                            </div>
                                        </a>
                                    </figure>
                                    <div class="card-component__body card-component__body--tag">
                                        <div class="author-meta">
                                            <figure class="author-meta__avatar" itemprop="author" itemscope="" itemtype="https://schema.org/Person">
                                                <a href="https://www.facebook.com/hungthuanmk" rel="author" itemprop="url" aria-labelledby="author-post-id-7637">
                                                    <img alt=" avatar" class="lzy-loaded" data-lzy-src="https://kahoot.com/files/2017/05/daria_trans-64x64.png" src="resources/img/homepage/thuan1.jpg" width="64" height="64">
                                                </a>
                                                <meta itemprop="name" content="Daria Golubeva">
                                            </figure>
                                            <div class="author-meta__info">
                                                <a class="author-meta__name" id="author-post-id-7637" href="https://www.facebook.com/hungthuanmk"><span class="visually-hidden">Author:</span>Nguyen Phan Hung Thuan</a>
                                                <span class="author-meta__date" datetime="2019-05-06T11:59:01+00:00">?? ??, 1998</span>
                                                <meta itemprop="datePublished" content="2019-05-06T11:59:01+00:00" datetime="2019-05-06T11:59:01+00:00">
                                                <meta itemprop="dateModified" content="2019-05-06T11:59:01+00:00" datetime="2019-05-06T11:59:01+00:00">
                                                <div itemprop="publisher" itemscope="" itemtype="https://schema.org/Organization" class="visually-hidden" style="display:none;">
                                                    <meta itemprop="name" content="RipWeb!">
                                                    <div itemprop="logo" itemscope="" itemtype="https://schema.org/ImageObject">
                                                        <meta itemprop="url" content="https://kahoot.com/kahoot.png">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-component__snippet">
                                            <h1 itemprop="headline" id="post-id-7637"><a title="Back-end Developer">Back-end Developer</a></h1>
                                            <p itemprop="description">Technology fan having a big dream <3 </p>
                                        </div>
                                        <div class="skew-wrap">
                                            <div class="card-component__hashtag skew">
                                                <div class="skew__inner" itemprop="keywords">
                                                    <a href="https://www.facebook.com/hungthuanmk" rel="tag">Learn More</a>						</div>
                                            </div>
                                        </div>
                                    </div><!--blog-component__body -->
                                </article>
                            </div><!-- //layout__item -->				</div><!-- /layout__inner -->
                        </div><!-- /layout -->
                    </div><!-- /inner -->
                </div><!-- /outer -->
            </div><!-- /layout-component -->
            <div class="page-break"><div class="outer"><div class="inner"><svg width="864px" height="57px" viewBox="0 0 864 57" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g class="page-separators" transform="translate(-80.000000, -97.000000)">
                        <g transform="translate(80.000000, 96.000000)">
                            <rect class="separator" fill="#F2F2F2" x="0" y="28" width="864" height="2"></rect>
                            <circle class="separator-bg" fill="#F2F2F2" cx="432" cy="29" r="24"></circle>
                            <g class="separator-device" transform="translate(411.000000, 0.000000)">
                                <rect class="separator-rectangle" fill="#333333" transform="translate(21.181136, 29.016509) rotate(-12.350000) translate(-21.181136, -29.016509) " x="5.81613627" y="3.36650926" width="30.73" height="51.3" rx="1.67"></rect>
                                <rect class="separator-rectangle" fill="#FFFFFF" transform="translate(20.648268, 27.288831) rotate(-12.350000) translate(-20.648268, -27.288831) " x="8.30826766" y="6.15883122" width="24.68" height="42.26"></rect>
                                <circle class="separator-oval" fill="#737373" cx="25.63" cy="51.01" r="1.74"></circle>
                                <rect class="separator-rectangle" fill="#E21B3C" transform="translate(12.864863, 18.674452) rotate(-12.350000) translate(-12.864863, -18.674452) " x="7.9648628" y="9.38445216" width="9.8" height="18.58" rx="0.72"></rect>
                                <polygon class="separator-path" fill="#FFFFFF" points="11.07 21.15 12.43 16.68 15.53 20.18"></polygon>
                                <rect id="Rectangle" fill="#1368CE" transform="translate(24.182480, 16.190686) rotate(-12.350000) translate(-24.182480, -16.190686) " x="19.2824804" y="6.90068624" width="9.8" height="18.58" rx="0.72"></rect>
                                <polygon class="separator-path" fill="#FFFFFF" points="23.66 13.8 26.6 15.66 24.7 18.59 21.76 16.72"></polygon>
                                <rect id="Rectangle" fill="#DD7E15" transform="translate(17.387807, 38.389228) rotate(-12.350000) translate(-17.387807, -38.389228) " x="12.487807" y="29.0992278" width="9.8" height="18.58" rx="0.72"></rect>
                                <ellipse class="separator-oval" fill="#FFFFFF" transform="translate(17.387807, 38.389228) rotate(-12.350000) translate(-17.387807, -38.389228) " cx="17.387807" cy="38.3892278" rx="2.04" ry="2.05"></ellipse>
                                <rect class="separator-rectangle" fill="#26890C" transform="translate(28.875306, 35.881935) rotate(-12.350000) translate(-28.875306, -35.881935) " x="23.9753055" y="26.5919348" width="9.8" height="18.58" rx="0.72"></rect>
                                <rect class="separator-rectangle" fill="#FFFFFF" transform="translate(28.874236, 35.877051) rotate(-12.350000) translate(-28.874236, -35.877051) " x="26.8342361" y="33.8320505" width="4.08" height="4.09"></rect>
                            </g>
                        </g>
                    </g>
                </g>
            </svg></div></div></div><!-- /page-break -->				</div><!-- env-section__body -->
        <!-- + + close env + + -->
    </div><!-- close env section -->
</section>
    <!-- ++ open env + + --><section class="page-section envelope-section in-view">
    <div class="env-section">
        <!-- + + open env + + -->
        <div class="env-section__top ">
            <div class="inner ">
                <h1 class="hero-title">RipWeb!</h1>
                <p>Say something here ?</p>			</div>
        </div>
        <div class="env-section__body">
            <div class="layout-component"><div class="outer"><div class="inner"><article class="text-image-article">
                <div class="text-image">
                    <div class="text-image__text">
                        <h1></h1>
                        <p><strong>RipWeb!</strong>??</p>
                        <p>i dont know wtf to say </p>
                        <p><a class="btn theme-opposite" data-tracking-id="free-trial-welcomeback" target="_self" href="signup">Sign up cmn di </a></p>
                    </div>
                    <div class="text-image__image">
                        <img data-lzy-src="https://kahoot.com/files/2018/09/icon_enterprise_premium-1.png" src="${pageContext.request.contextPath}resources/img/homepage/icon_enterprise_premium-1.png" alt="" class="lzy-loaded" width="" height="">
                    </div>
                </div>
            </article></div></div></div><div class="page-break"><div class="outer"><div class="inner"><svg width="864px" height="57px" viewBox="0 0 864 57" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g class="page-separators" transform="translate(-80.000000, -97.000000)">
                    <g transform="translate(80.000000, 96.000000)">
                        <rect class="separator" fill="#F2F2F2" x="0" y="28" width="864" height="2"></rect>
                        <circle class="separator-bg" fill="#F2F2F2" cx="432" cy="29" r="24"></circle>
                        <g class="separator-device" transform="translate(411.000000, 0.000000)">
                            <rect class="separator-rectangle" fill="#333333" transform="translate(21.181136, 29.016509) rotate(-12.350000) translate(-21.181136, -29.016509) " x="5.81613627" y="3.36650926" width="30.73" height="51.3" rx="1.67"></rect>
                            <rect class="separator-rectangle" fill="#FFFFFF" transform="translate(20.648268, 27.288831) rotate(-12.350000) translate(-20.648268, -27.288831) " x="8.30826766" y="6.15883122" width="24.68" height="42.26"></rect>
                            <circle class="separator-oval" fill="#737373" cx="25.63" cy="51.01" r="1.74"></circle>
                            <rect class="separator-rectangle" fill="#E21B3C" transform="translate(12.864863, 18.674452) rotate(-12.350000) translate(-12.864863, -18.674452) " x="7.9648628" y="9.38445216" width="9.8" height="18.58" rx="0.72"></rect>
                            <polygon class="separator-path" fill="#FFFFFF" points="11.07 21.15 12.43 16.68 15.53 20.18"></polygon>
                            <rect id="Rectangle" fill="#1368CE" transform="translate(24.182480, 16.190686) rotate(-12.350000) translate(-24.182480, -16.190686) " x="19.2824804" y="6.90068624" width="9.8" height="18.58" rx="0.72"></rect>
                            <polygon class="separator-path" fill="#FFFFFF" points="23.66 13.8 26.6 15.66 24.7 18.59 21.76 16.72"></polygon>
                            <rect id="Rectangle" fill="#DD7E15" transform="translate(17.387807, 38.389228) rotate(-12.350000) translate(-17.387807, -38.389228) " x="12.487807" y="29.0992278" width="9.8" height="18.58" rx="0.72"></rect>
                            <ellipse class="separator-oval" fill="#FFFFFF" transform="translate(17.387807, 38.389228) rotate(-12.350000) translate(-17.387807, -38.389228) " cx="17.387807" cy="38.3892278" rx="2.04" ry="2.05"></ellipse>
                            <rect class="separator-rectangle" fill="#26890C" transform="translate(28.875306, 35.881935) rotate(-12.350000) translate(-28.875306, -35.881935) " x="23.9753055" y="26.5919348" width="9.8" height="18.58" rx="0.72"></rect>
                            <rect class="separator-rectangle" fill="#FFFFFF" transform="translate(28.874236, 35.877051) rotate(-12.350000) translate(-28.874236, -35.877051) " x="26.8342361" y="33.8320505" width="4.08" height="4.09"></rect>
                        </g>
                    </g>
                </g>
            </g>
        </svg></div></div></div><!-- /page-break -->				</div><!-- env-section__body -->
        <!-- + + close env + + -->
    </div><!-- close env section -->
</section>
    <!-- /close section -->
</main>
<footer class="page-footer">
    <div class="inner">
        <!-- page-footer__links -->
        <div class="page-footer__links">
            <nav class="footer-nav footer-nav--inline" role="navigation" aria-label="Follow us Navigation" itemscope="" itemtype="https://schema.org/SiteNavigationElement">
                <div class="footer-nav__title">Follow us</div>
                <div class="footer-nav__menu">
                    <ul id="menu-follow-us" class="">
                        <li id="menu-item-86" class="social-facebook menu-item menu-item-type-custom menu-item-object-custom menu-item-86"><a target="_blank" href="https://www.facebook.com/hcmiuiot/?__tn__=kCH-R&eid=ARCLgKWuaUNNh0ov6-tdLCCJdUtJLUO31Q6z39mMbe9iSG9J_u6R2hUHF1YFGGLgXG0RjiFwpYDmFOhN&hc_ref=ARRKAm8j-Mxxat-GAKIJDMWeTjRvjZH3o-9mpVwZ3EMS0H0KRpLk3cEA04SeMC129r8&fref=nf&__xts__[0]=68.ARDhw4nciP7kSuwZR3WqhlNmxs7KSZlnzoQ2V2krAoc72wQacm887LjosfjGgQbw1Nm6eaWSM-lYHWOby0jRMdaxIhb4WASJ4ydfa_aXs4IKGvrdCTdatN16jh3jtpkW_ITICzHyVcK1NIO-y2KG0nPQblI0SNeNP8U4ZLFzA4YALiEY6NsJ5KyhoqNcXctHdGCQW8JsUjS6WTtv0Isk-n4LJasPykWkOWmz5MStVd3gjowYSnxC7BmUofQhtF2799_Wb9dLCJgZTYmeSitbmJ4tr5yPnpRIrWi6DRmyt78IzQalDmz4Gmkrpy6N0eOB6Qafj-x5wyl12E6WDgCJaawd4tza" itemprop="url">Facebook</a></li>
                        <li id="menu-item-85" class="social-linkedin menu-item menu-item-type-custom menu-item-object-custom menu-item-85"><a target="_blank" href="https://github.com/hcmiuiot" itemprop="url">Github</a></li>
                        <li id="menu-item-85" class="social-linkedin menu-item menu-item-type-custom menu-item-object-custom menu-item-85"><a target="_blank" href="https://hcmiuiotclub.slack.com/" itemprop="url">Slack</a></li>
                    </ul>							</div>
            </nav>
        </div>
        <div class="page-footer__base">
					<span class="copyright">
					Copyright © 2019, RipWeb! All Rights Reserved.
					</span>
            <a href="#top" id="to-top" title="back to top">
                <!-- <img data-lzy-src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/kahoot-white.svg" src="resources/img/homepage/ripweb-white.svg" alt="Kahoot!" class="lzy-loaded">
             -->
            </a>
        </div>
    </div>
</footer>
<script src="resources/js/homepage/jquery-3.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<!-- add these only when needed -->
<div class="modal-overlay"></div>
<script id="k-functions" src="resources/js/homepage/functions-64617a5349.js"></script>
<script type="text/javascript" id="">(function(a,d){function c(a,b){a.prototype[b]=function(){this._q.push([b].concat(Array.prototype.slice.call(arguments,0)));return this}}function h(a){function b(b){a[b]=function(){a._q.push([b].concat(Array.prototype.slice.call(arguments,0)))}}for(var c=0;c<k.length;c++)b(k[c])}var b=a.amplitude||{_q:[],_iq:{}},e=d.createElement("script");e.type="text/javascript";e.async=!0;e.src="resources/js/homepage/amplitude-4.2.1-min.gz.js";e.onload=function(){a.amplitude.runQueuedFunctions?a.amplitude.runQueuedFunctions():
    console.log("[Amplitude] Error: could not load SDK")};var f=d.getElementsByTagName("script")[0];f.parentNode.insertBefore(e,f);e=function(){this._q=[];return this};f="add append clearAll prepend set setOnce unset".split(" ");for(var g=0;g<f.length;g++)c(e,f[g]);b.Identify=e;e=function(){this._q=[];return this};f=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];for(g=0;g<f.length;g++)c(e,f[g]);b.Revenue=e;var k="init logEvent logRevenue setUserId setUserProperties setOptOut setVersionName setDomain setDeviceId setGlobalUserProperties identify clearUserProperties setGroup logRevenueV2 regenerateDeviceId logEventWithTimestamp logEventWithGroups setSessionId resetSessionId".split(" ");
    h(b);b.getInstance=function(a){a=(a&&0!==a.length?a:"$default_instance").toLowerCase();b._iq.hasOwnProperty(a)||(b._iq[a]={_q:[]},h(b._iq[a]));return b._iq[a]};a.amplitude=b})(window,document);function getParameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=new RegExp("[\\?\x26]"+a+"\x3d([^\x26#]*)");a=a.exec(location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))}
function decorateUrl(a,d,c){var h=a.split("#");a=h[0];d="deviceId\x3d"+d;c=c?"\x26sessionId\x3d"+c:"";var b="";var e=-1!=a.indexOf("?")?"\x26":"?";1<h.length&&(b="#"+h[1]);return a.replace(/&+/,"\x26")+e+d+c+b}function addParametersToUrl(a,d,c){a=$(d);a.click(function(a){a.preventDefault();var b=decorateUrl($(this).attr("href"),c.options.deviceId,c.getSessionId());setTimeout(function(){$(this).attr("target")?window.open(b,$(this).attr("target")):location.href=b},google_tag_manager["GTM-WFBWSXS"].macro(1))})}
var AMPLITUDE_PROD="f4f55f73fbc8e071422c933108b66218",AMPLITUDE_QA="21f4703dee4bd6177fd067a4bd46704e",AMPLITUDE_STAGE="a6c075873a5c8c01460378bcac83ddd4",AMPLITUDE_EXP="7ea5622e950dccb73e96a448ab82422b",amplitudeKey=AMPLITUDE_PROD,deviceId=getParameterByName("deviceId")||null,sessionId=getParameterByName("sessionId")||null,cookieDomain="."+location.host.split(".").slice(-2).join(".");/(experimental|stage.kahoot.com)/i.test(window.location.hostname)&&(amplitudeKey=AMPLITUDE_EXP);
// amplitude.getInstance().init(amplitudeKey,null,{saveEvents:!0,includeUtm:!0,includeReferrer:!0,deviceId:deviceId},function(a){var d=18E5;sessionId&&!isNaN(sessionId)&&Number(sessionId)+d>Date.now()&&a.setSessionId(Number(sessionId));d=getParameterByName("from").replace("create.","")||"kahoot.it";$('[href*\x3d"'+d+'"]').each(function(c,d){addParametersToUrl(c,d,a)});$('[href*\x3d"kahoot.com/register"]').each(function(c,d){addParametersToUrl(c,d,a)})});

<%--amplitude.getInstance().logEvent("[Website] Pageview",google_tag_manager["GTM-WFBWSXS"].macro(7));</script><script type="text/javascript" id="">$("a").click(function(){var a=$(this).data("tracking-id");void 0!=a&&dataLayer.push({event:"clickTopBar",trackid:a})});--%>

</script>
</body>
</html>