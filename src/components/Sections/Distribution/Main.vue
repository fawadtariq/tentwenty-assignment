<template>
  <div
    class="
      bg-light
      h-vp-60
      grid grid-cols-2
      justify-center
      items-center
    "
  >
  <div id="scene-container-distribution" class="h-full w-full">
        
      </div>
    <div class=" w-pr-90 grid mx-auto">
   
      <div class="pl-pr-10">
        <h2 data-aos="fade-right" class="text-dark">Distribution</h2>
        <p data-aos="fade-up" class="text-dark-50 text-m -mt-px-30" style="max-width: 70%">
          Eget morbi nunc faucibus tellus hendrerit feugiat maecenas feugiat mattis. aliquam diam semper est enim vulputate. Viverra augamet, a quam porttitor sit eu. 
        </p>
        <Button data-aos="fade-up" theme="btn-primary" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/ExploreButton/Main.vue"
import scene from './scene.js';
import { ref, onMounted } from 'vue'

onMounted(() => {
  scene($('#scene-container-distribution')[0]);
  

})
</script>