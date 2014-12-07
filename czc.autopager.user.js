// ==UserScript==
// @name        CZC.cz autopager
// @namespace   http://www.czc.cz
// @description czc.cz catalog autopager
// @include     http*://www.czc.cz/*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// ==/UserScript==

var log = (unsafeWindow.console) ? unsafeWindow.console.log : GM_log;

var czc = czc || {};
$.extend(czc, {
    autopager: {

        offset: -800,
        q: '#navigation-container-next .btn.show-next',

        init: function() {
            $(window).on('scroll', function(e) {
                if ($(window).scrollTop() >= ($(czc.autopager.q).offset().top + czc.autopager.offset)) {
                    czc.autopager.loadPage();
                }
            });
        },

        loadPage: function() {
            var e = document.createEvent('HTMLEvents');
            e.initEvent('click', true, true);
            $(czc.autopager.q)[0].dispatchEvent(e);
        }

    }
});

czc.autopager.init();
