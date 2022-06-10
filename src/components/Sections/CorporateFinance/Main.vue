<template>
  <div
  
    class="
      bg-light
      h-vp-50
      grid grid-cols-1
      justify-center
      items-center
    "
  >
    <div class=" w-pr-90 grid grid-cols-2 mx-auto h-full items-center">
      <div class="pl-pr-15">
        <h2  data-aos="fade-right" class="text-primary">Corporate Finance</h2>
        <p  data-aos="fade-up" class="text-dark text-m -mt-px-30" style="max-width:90%">
          Eget morbi nunc faucibus tellus hendrerit feugiat maecenas feugiat mattis. aliquam diam semper est enim vulputate. Viverra augamet, a quam porttitor sit eu. 
        </p>
        <Button data-aos="fade-right" />
      </div>
      <div id="scene-container" ref="sceneContainer" class="h-full w-full">
        
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/ExploreButton/Main.vue"
import { ref, onMounted } from 'vue'
import scene from './scene.js';

const sceneContainer = ref(null)

onMounted(() => {
  scene($('#scene-container')[0]);
  

})




</script>