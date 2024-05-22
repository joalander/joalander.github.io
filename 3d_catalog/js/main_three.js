import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create light
const light = new THREE.PointLight(0xffffff);
light.position.z = 5;

// Load the 3D model
const loader = new GLTFLoader();
loader.load(
  '/gun.glb',
  (gltf) => {
    const model = gltf.scene;

    // Adjust the model's properties
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    scene.add(model, light);

    // Adjust the model's position, rotation, or scale as needed
    model.position.set(0, 0, 0);
    model.rotation.set(0, 0, 0);
    model.scale.set(1, 1, 1);

    // Animate the model (if needed)
    function animate() {
      requestAnimationFrame(animate);
      model.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  },
  (progress) => {
    console.log(`Loading file: ${(progress.loaded / progress.total * 100)}% loaded`);
  },
  (error) => {
    console.error('An error occurred while loading the model:', error);
  }
);