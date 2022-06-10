import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { render } from 'vue';
import { isInViewport } from '../../../helpers/functions';

const scene = new THREE.Scene();
let camera;
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
const clock = new THREE.Clock();
let mixer;
let clamped = false;

const init = (container) => {
    camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 0);
    render.physicallyCorrectLights = true;
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    load('/src/components/Sections/Investment/object.gltf')

    camera.position.z = 10;
    animate();
}

function animate() {
    
    requestAnimationFrame(animate);
    var delta = clock.getDelta();

    if (mixer) mixer.update(delta);

    renderer.render(scene, camera);
}

const load = (pathttogltf) => {
    const loader = new GLTFLoader();
    loader.load(
        pathttogltf,
        function (gltf) {

            const light = new THREE.AmbientLight(0xffffff); // soft white light
            scene.add(light);
            const plight = new THREE.PointLight( 0xffffff, 1, 100 );
            plight.position.set( 5, 5, 5 );
            scene.add( plight );
            const light2 = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
            scene.add(light2);

            scene.add(gltf.scene);
            mixer = new THREE.AnimationMixer(gltf.scene);

            gltf.animations.forEach((clip) => {
                clip['clamped'] = false;

                var action = mixer.clipAction(clip).setLoop(1, 1)
                action.clampWhenFinished = true;
                document.addEventListener('scroll', function (e) {
                    var status = isInViewport(renderer.domElement);
                    if (status == true) {

                        if (clip.clamped == false) {
                            action.timeScale = 1
                            action.reset();
                            action.play();
                            clip.clamped = true;
                        }
                    }
                    else {
                        if (clip.clamped == true) {
                            action.reset();
                            action.timeScale = -1
                            action.play();
                            clip.clamped = false;

                        }


                    }

                });
            });

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



export default init;




