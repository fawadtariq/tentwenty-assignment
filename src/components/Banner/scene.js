import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import * as dat from 'dat.gui';
import gsap from 'gsap';


const gui = new dat.GUI();


const scene = new THREE.Scene();
let camera;
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
const clock = new THREE.Clock();
let mixer;
let clamped = false;
let viewport = {value: 150};


const init = (container) => {
    camera = new THREE.PerspectiveCamera(viewport.value, container.clientWidth / container.clientHeight, 0.1, 1000);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);




    renderer.setClearColor(0x000000, 0);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    load('/src/components/Banner/object.gltf')

    camera.position.z = 9.5;
    animate();
}

function animate() {
  
    requestAnimationFrame(animate);
    var delta = clock.getDelta();
    if(scene.children.length){
        
    scene.children[0].children[0].rotation.x += 0.01;
    scene.children[0].children[0].rotation.y += 0.01;
    scene.children[0].children[0].rotation.z += 0.01;
    }
    if (mixer) mixer.update(delta);

    renderer.render(scene, camera);
}

const load = (pathttogltf) => {
    const loader = new GLTFLoader();
    loader.load(
        pathttogltf,
        function (gltf) {
            scene.add(gltf.scene);
           
            const light = new THREE.AmbientLight(0x18414e);
            light.position.set(5.488,0,0);
            scene.add(light);
            const light2 = new THREE.HemisphereLight(0xffffff, 0x404040, 1);
            scene.add(light2);
            mixer = new THREE.AnimationMixer(gltf.scene);

            gltf.animations.forEach((clip) => {

                var action = mixer.clipAction(clip).setLoop(1, 1)
                action.clampWhenFinished = true;
                action.play();
            });
            var tl = gsap.timeline();

            tl.to(camera, {fov: 20, delay:2, duration: 0.5, onUpdate: function(){camera.updateProjectionMatrix()}})
            tl.to(gltf.scene.position, {x: 3, duration: 2, onComplete: function(){
                $(document).trigger('intro-complete')
            }}, "<25%")
            

        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.log('An error happened');
            console.error(error)
        }
    );


}

function makeXYZGUI(gui, vector3, name, onChangeFn) {
        const folder = gui.addFolder(name);
        folder.add(vector3, 'x', -10,10, 0.1).onChange(onChangeFn);
        folder.add(vector3, 'y', -10,10, 0.1).onChange(onChangeFn);
        folder.add(vector3, 'z', -10,10, 0.1).onChange(onChangeFn);
        folder.open();
}



export default init;




