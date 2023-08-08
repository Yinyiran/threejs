<template>
  <div id="text"></div>
</template>
<script setup lang="ts">
import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'

THREE.Cache.enabled = true

// CAMERA
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
camera.position.set(0, 400, 700)
camera.lookAt(0, 0, 0)
const cameraTarget = new THREE.Vector3(0, 150, 0)

// SCENE
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)
scene.fog = new THREE.Fog(0x000000, 250, 1400)

// LIGHTS
const dirLight = new THREE.DirectionalLight(0xffffff, 0.4)

const obj = {
  font: '',
  size: 80,
  height: 5,
  curveSegments: 12,
  bevelEnabled: true,
  bevelThickness: 10,
  bevelSize: 8,
  bevelSegments: 5,
}

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5)

// function loadFont() {
//   const loader = new FontLoader()
//   loader.load('fonts/' + fontName + '_' + fontWeight + '.typeface.json', function (response) {
//     font = response

//     refreshText()
//   })
// }
const textMataterial = new TextGeometry('threejs', obj)
scene.add(textMataterial)

onMounted(() => {
  document.getElementById('text')?.appendChild(renderer.domElement)
})
renderer.render(scene, camera)
</script>
<style lang="scss" scoped>
.text {
}
</style>
