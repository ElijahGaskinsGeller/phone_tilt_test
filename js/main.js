

import * as THREE from 'three';


console.log(THREE);


let scene = new THREE.Scene();


let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


camera.position.z = 5;


let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);


function OnWindowResize(e) {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);

}

function OnDeviceTilt(e) {

	console.log(e);


	if (!Number.isNaN(e.beta)) {
		document.getElementById("beta").textContent = e.beta;
		cube.rotation.x = (e.beta * Math.PI) / 180;
	}

	if (!Number.isNaN(e.gamma)) {
		document.getElementById("gamma").textContent = e.gamma;
		cube.rotation.y = (e.gamma * Math.PI) / 180;
	}


	if (!Number.isNaN(e.alpha)) {
		document.getElementById("alpha").textContent = e.alpha;
		//cube.rotation.z = (e.alpha * Math.PI) / 180;
	}



}


function animate() {
	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}



window.addEventListener("resize", OnWindowResize);
window.addEventListener("deviceorientation", OnDeviceTilt);

renderer.setAnimationLoop(animate);
