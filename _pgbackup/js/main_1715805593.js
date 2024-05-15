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

//3D object on a global variable to have acces to it
let object;
//OrbitControls allows the camera to move around
let controls;
//set which object to render
let objToRender = "moria";

//Initiate the GLTF loaders
const loader = new GLTFLoader();
//load the files
const loader = new GLTFLoader();

loader.load( 'assets/models/moria_door_just_gates.glb', function ( gltf ) {
    //if the file is loqded, add it to the scene
	scene.add( gltf.scene );
    //if there is an error, log it
}, undefined, function ( error ) {

	console.error( error );

} );

