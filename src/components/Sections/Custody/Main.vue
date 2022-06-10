<template>
  <div
    class="
      bg-secondary
      h-vp-60
      grid grid-cols-1
      justify-center
      items-center
    "
  >
  
    <div class=" w-pr-90 grid grid-cols-2 mx-auto h-full items-center">
   
      <div class="pl-pr-15">
        <h2 data-aos="fade-right" class="text-primary">Custody</h2>
        <p data-aos="fade-up" class="text-dark text-m -mt-px-30" style="max-width: 90%">
          Eget morbi nunc faucibus tellus hendrerit feugiat maecenas feugiat mattis. aliquam diam semper est enim vulputate. Viverra augamet, a quam porttitor sit eu. 
        </p>
        <Button data-aos="fade-right" theme="btn-primary" />
      </div>
       <div id="scene-container-custody" ref="sceneContainer" class="h-full w-full">
        
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/ExploreButton/Main.vue"
import scene from './scene.js';
import { ref, onMounted } from 'vue'

onMounted(() => {
  scene($('#scene-container-custody')[0]);
  

})
</script>