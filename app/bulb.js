'use strict';

const PI2 = Math.PI * 2;

module.exports = class Bulb {
    constructor() {
        var p = new THREE.Sprite(
            new THREE.SpriteCanvasMaterial({
                color: Math.random() * 0x808080 + 0x808080,
                program: this.draw
            })
        );
        this.create(p.position, p.scale);
        this.$ = p;
    }

    create(pos, scale) {
        pos.x = Math.random() * 800 - 400;
        pos.y = Math.random() * 800 - 400;
        pos.z = Math.random() * 800 - 400;
        scale.x = scale.y = Math.random() * 20 + 20;
    }

    update() {
        this.$.position.x = Math.random() * 800 - 400;
        this.$.position.y = Math.random() * 800 - 400;
    }

    draw(context) {
        context.lineWidth = 0.025;
        context.beginPath();
        context.arc(0, 0, 0.5, 0, PI2, true);
        context.stroke();
    }
};
