'use strict';

var container;
const Engine = require('./engine');

function run() {
    container = document.getElementById('container');
    var engine = new Engine(container, window);
    window.addEventListener(
        'resize',
        engine.onWindowResize.bind(engine),
        false
    );
    engine.loop();
}

run();
