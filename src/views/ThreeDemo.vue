<template>
  <div id="box"></div>
</template>
<script setup lang="ts">
import * as THREE from 'three'
import { onMounted } from 'vue'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(90, 1, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(500, 500)

onMounted(() => {
  console.log(renderer.domElement);
  
  document.getElementById('box')?.appendChild(renderer.domElement)
})

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 2

// 定时滚动
function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}
animate()
</script>
<style>
#box {
  width: 100%;
  height: 100%;
}
</style>
