//Importing ThreeJS
import * as THREE from 'three';
//To allow the camera move around the scene
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// To import glb files
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//Create the Scene
const scene = new THREE.Scene();
//Create a camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Render the scene
animate();
