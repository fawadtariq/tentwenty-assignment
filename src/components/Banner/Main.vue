<template>
  <div v-if="state.reveal"
    class="
      bg-primary-acc
      h-viewport
      grid grid-cols-1
      justify-center
      items-center
    "
  >
    <div class="h-pr-50 w-pr-90 grid mx-auto">
      <p data-aos="fade-right" data-aos-delay="400" class="text-light-70 pl-pr-10 text-xs">Home / Solutions</p>
      <div class="pl-pr-10">
        <h1 data-aos='fade-right' class="text-light">Solutions</h1>
        <p data-aos='fade-right' data-aos-delay="200" style="max-width:30%" class="-mt-px-30 text-light-50 text-xs">
          Aliquet mauris est nascetur viverra. Rhoncus tellus quis felis ac
          venenatis urna elit eget.
        </p>
      </div>
    </div>
  </div>
  <div id="banner-scene" class=" w-viewport h-viewport" style="position:absolute;top:0"></div>
</template>

<script setup>
import scene from './scene.js';
import { onMounted, reactive } from 'vue'
const emit = defineEmits(['reveal'])
const state = reactive({reveal: false})

onMounted(() => {
  
  $(document).on('intro-complete', function(){
    console.log('emit')
    state.reveal = true;
    emit('reveal');
  });
  scene($('#banner-scene')[0]);

})
</script>