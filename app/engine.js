'use strict';

const Camera = require('./camera'),
    Bulb = require('./bulb');

module.exports = class Engine {
    constructor(container, win) {
        this.win = win;
        this.container = container;

        this.init();
    }

    init() {
        this.createScene();
        this.createRenderer();
    }

    createScene() {
        this.camera = new Camera(this.win.innerWidth / this.win.innerHeight);
        //TODO create followCamera
        this.camera.follow(this.scene);

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);
        this.list = this._particles();
        //TODO extend scene
        this.list.forEach(p => {
            this.scene.add(p.$);
        });
    }

    createRenderer() {
        this.renderer = new THREE.CanvasRenderer();
        this.renderer.setPixelRatio(this.win.devicePixelRatio);
        this.renderer.setSize(this.win.innerWidth, this.win.innerHeight);
        this.container.appendChild(this.renderer.domElement);
    }

    loop() {
        this._render();
        requestAnimationFrame(this.loop.bind(this));
    }

    _render() {
        this.scene.update();
        this.renderer.render(this.scene, this.camera.$);
    }

    onWindowResize() {
        var win = this.win,
            height = win.innerHeight,
            width = win.innerWidth;
        this.camera.changeAspect(width / height);
        this.renderer.setSize(width, height);
    }
};
