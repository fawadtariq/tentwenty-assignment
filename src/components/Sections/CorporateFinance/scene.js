import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { isInViewport } from '../../../helpers/functions';

const scene = new THREE.Scene();
let camera;
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
const clock = new THREE.Clock();
let mixer;
let clamped = false;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove(event) {

    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components

    pointer.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    pointer.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    console.log(pointer)
}


const init = (container) => {
    camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);




    renderer.setClearColor(0x000000, 0);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);

    load('/src/components/Sections/CorporateFinance/object.gltf')

    camera.position.z = 5;
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    animate();
}

function animate() {
    //raycaster.setFromCamera(pointer, camera);
    //const intersects = raycaster.intersectObjects(scene.children);
    // for (let i = 0; i < intersects.length; i++) {

    //     intersects[i].object.material.color.set(0xff0000);

    // }
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

            const light = new THREE.AmbientLight(0x404040); // soft white light
            scene.add(light);
            const light2 = new THREE.HemisphereLight(0xffffff, 0x404040, 1);
            scene.add(light2);

            scene.add(gltf.scene);
            mixer = new THREE.AnimationMixer(gltf.scene);

            gltf.animations.forEach((clip) => {

                var action = mixer.clipAction(clip).setLoop(1, 1)
                action.clampWhenFinished = true;
                document.addEventListener('scroll', function (e) {
                    var status = isInViewport(renderer.domElement);
                    if (status == true) {

                        if (clamped == false) {
                            action.timeScale = 1
                            action.reset();
                            action.play();
                            clamped = true;
                        }
                    }
                    else {
                        if (clamped == true) {
                            action.reset();
                            action.timeScale = -1
                            action.play();
                            clamped = false;

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




