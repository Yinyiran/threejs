<template>
  <div class="index">
    <div id="box"></div>
    <button @click="startTimer">旋转</button>
    <button @click="stopTimer">停止</button>
  </div>
</template>
<script setup lang="ts">
import * as THREE from 'three'
import { onMounted } from 'vue'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(90, 1, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()

onMounted(() => {
  const box = document.getElementById('box') as HTMLElement
  box.appendChild(renderer.domElement)

  renderer.setSize(box.offsetWidth / 1.1, box.offsetWidth / 1.1)
  animate()
})

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 2

let timer: number
// 定时滚动
function animate() {
  timer = requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

function stopTimer() {
  console.log(timer)

  cancelAnimationFrame(timer)
}
function startTimer() {
  animate()
}
</script>
<style>
#box {
  width: 100%;
}
</style>
