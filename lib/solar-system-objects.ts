import * as THREE from 'three';

//define enum type objects
export enum OBJECTS {
    SUN, //太阳
    MERCURY, //水星
    VENUS, //金星
    EARTH, //地球
    MOON, //月亮
    MARS, //火星
    JUPITER, //木星
    SATURN, //土星
    SATURN_RINGS, //土星环
    URANUS,// 天王星
    NEPTUNE, //海王星
}


//'canvas-root' for elementId
export function createStage(elementId: string): [THREE.Scene, THREE.PerspectiveCamera, THREE.WebGLRenderer] {
    //set up scene
    const scene = new THREE.Scene();
    //set up camera
    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.z = 180;
    //set up render
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById(elementId)?.appendChild(renderer.domElement);
    return [scene, camera, renderer];
}

export class ObjectGroup extends THREE.Group {

    //create object
    static createObject(title: OBJECTS, objectGeometry: THREE.BufferGeometry): THREE.Mesh {
        const objectTexture = new THREE.TextureLoader().load(`textures/${title}.jpg`);
        const objectMaterial = new THREE.MeshPhongMaterial({ map: objectTexture });
        const objectMesh = new THREE.Mesh(objectGeometry, objectMaterial);
        return objectMesh;
    }

    constructor(index: number, title: OBJECTS, radius: number, extra?: THREE.Mesh) {
        super();
        if (extra) {
            switch (title) {
                case OBJECTS.EARTH: //地球
                    extra.position.x += 8 * index + 2.5;
                    break;
                case OBJECTS.SATURN: //土星
                    extra.position.x += 8 * index;
                    extra.rotation.x = 2;
                    break;
            }
            this.add(extra);
        }

        const planet = ObjectGroup.createObject(title, new THREE.SphereGeometry(radius, 64, 32));
        planet.position.x += 8 * index;
        this.add(planet);
    }


}