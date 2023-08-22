import React, { Component } from 'react';
import * as THREE from 'three';


//define objects
enum OBJECTS {
    SUN = 'sun', //太阳
    MERCURY = 'mercury', //水星
    VENUS = 'venus', //金星
    EARTH = 'earth', //地球
    MOON = 'moon', //月亮
    MARS = 'mars', //火星
    JUPITER = 'jupiter', //木星
    SATURN = 'saturn', //土星
    SATURN_RINGS = 'saturn_rings', //土星环
    URANUS = 'uranus',// 天王星
    NEPTUNE = 'neptune', //海王星
}


//setup basic scenario for canvas

//set up scene
const scene = new THREE.Scene();

//set up camera
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.z = 180;

//set up render
const renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.getElementById('canvas-root')?.appendChild(renderer.domElement);


//define stars coordinates
const starsCoords: number[] =[];

for (let i = 0; i < 1000; i++) {
    const x = THREE.MathUtils.randFloatSpread(1000);
    const y = THREE.MathUtils.randFloatSpread(1000);
    const z = THREE.MathUtils.randFloatSpread(1000);
    starsCoords.push(x,y,z);
}

//set up Geometry Object by using starsCoords
const starsGeometry = new THREE.BufferGeometry();
starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsCoords, 3));

//add stars to scene
const starsMaterial = new THREE.PointsMaterial({ color: 0xaaaaaa });
const stars =new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);


 class ObjectGroup extends THREE.Group{

    //create object
static createObject(title:OBJECTS, objectGeometry:THREE.BufferGeometry):THREE.Mesh{
    const objectTexture = new THREE.TextureLoader().load(`textures/${title}.jpg`);
    const objectMaterial = new THREE.MeshPhongMaterial({map: objectTexture});
    const objectMesh = new THREE.Mesh(objectGeometry, objectMaterial);
    return objectMesh;
   }

    constructor(index:number,title:OBJECTS,radius:number,extra?:THREE.Mesh){
        super();
        if(extra){
            switch(title){
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
        planet.position.x += 8* index;
        this.add(planet);
    }



 }

 //add sun
 const sun = ObjectGroup.createObject(OBJECTS.SUN, new THREE.SphereGeometry(11, 64, 32));
 scene.add(sun);

const planets: { title: OBJECTS; radius: number; extra?: THREE.Mesh }[] = [
    { title: OBJECTS.MERCURY, radius: 1 },
    { title: OBJECTS.VENUS, radius: 2 },
    {
        title:OBJECTS.EARTH, 
        radius: 2, 
        extra: ObjectGroup.createObject(OBJECTS.MOON, new THREE.SphereGeometry(0.5, 64, 32))
    },
    { title: OBJECTS.MARS, radius: 1 },
    { title: OBJECTS.JUPITER, radius: 5 },
    {
        title:OBJECTS.SATURN, 
        radius: 4, 
        extra: ObjectGroup.createObject(OBJECTS.SATURN_RINGS, new THREE.TorusGeometry(6, 1, 2, 32))
    },
    { title: OBJECTS.URANUS, radius: 3 },
    { title: OBJECTS.NEPTUNE, radius: 3 },
];



//add planet
const planetsMap = new Map<OBJECTS, ObjectGroup>();

for(let [index,{title,radius,extra}] of planets.entries()){
    const planetMeshGroup = new ObjectGroup(index+1,title, radius, extra);
    planetsMap.set(title, planetMeshGroup);
    sun.add(planetMeshGroup);
}

//add light: 环境光照和点光源
const ambientLight = new THREE.AmbientLight(0xaaaaaa, 1);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, 0, 0);

scene.add(ambientLight, pointLight);


// const EARTH_YEAR = (2 * Math.PI) / 365;

// const animate = () => {
//     sun.rotation.y += 0.001;

//     planetsMap.get(OBJECTS.MERCURY)!.rotation.y += EARTH_YEAR * 4;
//     planetsMap.get(OBJECTS.VENUS)!.rotation.y += EARTH_YEAR * 2;
//     planetsMap.get(OBJECTS.EARTH)!.rotation.y += EARTH_YEAR;
//     planetsMap.get(OBJECTS.MARS)!.rotation.y += EARTH_YEAR / 2;
//     planetsMap.get(OBJECTS.JUPITER)!.rotation.y += EARTH_YEAR / 4;
//     planetsMap.get(OBJECTS.SATURN)!.rotation.y += EARTH_YEAR / 8;
//     planetsMap.get(OBJECTS.URANUS)!.rotation.y += EARTH_YEAR / 16;
//     planetsMap.get(OBJECTS.NEPTUNE)!.rotation.y += EARTH_YEAR / 32;

//     renderer.render(scene, camera);

//     requestAnimationFrame(animate);
// };

// animate();