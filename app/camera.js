'use strict';

module.exports = class Camera {
    constructor(aspect) {
        this.$ = new THREE.PerspectiveCamera(70, aspect, 1, 10000);
        this.$.position.set(0, 300, 500);
    }

    changeAspect(aspect) {
        this.$.aspect = aspect;
        this.$.updateProjectionMatrix();
    }

    follow(what) {
        this.follow = what;
    }

    update() {
        this.$.lookAt(this.follow.position);
        this.$.updateMatrixWorld();
    }
};
