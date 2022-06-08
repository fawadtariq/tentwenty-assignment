<template>
    <div
    @mouseover="state.isHovering = true" 
      @mouseout="state.isHovering = false" 
      :class="{'bg-primary-90': state.isHovering, 'bg-primary': !state.isHovering}"
    class="w-px-180 h-px-40 items-center grid text-light py-px-8 px-px-26 cursor-pointer">
        Speak to An Expert
    </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity"

    const state = reactive({isHovering:false})
    
</script>
