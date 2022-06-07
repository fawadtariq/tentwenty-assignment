<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
  <div class="grid grid-cols-9 pallete">
    <div class="bg-primary"></div>
    <div class="bg-secondary"></div>
    <div class="bg-success"></div>
    <div class="bg-info"></div>
    <div class="bg-warning"></div>
    <div class="bg-pending"></div>
    <div class="bg-danger"></div>
    <div class="bg-light"></div>
    <div class="bg-dark"></div>
  </div>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.pallete > div{
  width: 100px; height: 100px;
}
</style>
