'use strict';

const Bulb = require('./bulb');

module.exports = class Scene {
    constructor() {
        this.particles = [];
    }

    update() {
        this.particles.forEach(o => o.update());
    }

    createParticles() {
        var i = 0;
        for (; i < 10; i++) {
            this.particles.push(new Bulb());
        }
    }
};
