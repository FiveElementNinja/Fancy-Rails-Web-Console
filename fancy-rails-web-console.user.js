// ==UserScript==
// @name         Fancy Rails Web Console
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Improves the Rails Web Console
// @author       Five Element Ninja (https://mastodon.social/@FiveElementNinja)
// @match        http://localhost:3000/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.localhost
// @downloadURL  https://github.com/FiveElementNinja/Fancy-Rails-Web-Console/raw/main/fancy-rails-web-console.user.js
// @updateURL    https://github.com/FiveElementNinja/Fancy-Rails-Web-Console/raw/main/fancy-rails-web-console.user.js
// @grant        none
// ==/UserScript==

// This userscript makes the Rails Web Console (https://github.com/rails/web-console) collapsible
// and collapses it automatically so you don't have to close it every time.

(function() {
    'use strict';

    // stylsheet
    const consoleStyles = "<style>#console-btn { background-color: #333; color: #FFF; position: fixed; height: 16px; bottom: 0; right: 0; font-size: 10px; padding: 4px 2px 4px 4px; border-top-left-radius: 50%; line-height: 10px; cursor: pointer; }</style>";

    // element refs
    // TODO: can probably move these to setup() now, but too lazy atm
    let consoleElem;
    let consoleBtn;

    // shows the console and hides the button
    function showConsole() {
        consoleElem.classList.remove('hidden');
        consoleBtn.classList.add('hidden');
    }

    // hides the console and shows the button
    function hideConsole(e) {
        // these two are a hacky way to override the default event listener that removes the console from the DOM on close
        e.stopImmediatePropagation();
        e.stopPropagation();

        consoleElem.classList.add('hidden');
        consoleBtn.classList.remove('hidden');
    }

    // sets up all elements and listeners
    function setup() {
        const body = document.getElementsByTagName('body')?.[0];
        const consoleBtnElem = '<div id="console-btn">&gt;&gt;</div>';
        consoleElem = document.getElementById('console');
        const consoleCloseBtn = consoleElem?.querySelectorAll('.close-button')[0];

        // add stylesheet and button to DOM
        body?.insertAdjacentHTML('beforeend', consoleStyles);
        body?.insertAdjacentHTML('beforeend', consoleBtnElem);

        // hide console
        consoleElem?.classList?.add('hidden');

        // add hideConsole click event
        consoleCloseBtn?.addEventListener('click', (e) => hideConsole(e), true);

        // get reference to consoleBtn
        consoleBtn = document.getElementById('console-btn');

        // attach click event to the show console button
        consoleBtn?.addEventListener('click', showConsole);
    }

    // detect page load and navigation and run setup()
    document.addEventListener('turbo:load', function() {
        setup();
    });
})();
