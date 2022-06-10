<template>
  <div
    style="transition: 300ms ease-in-out"
    @mouseover="state.isHovering = true"
    @mouseout="state.isHovering = false"
    :class="classObject"
    class="
      w-fit
      h-px-40
      items-center
      grid grid-cols-1
      text-light
      py-px-8
      px-px-26
      justify-items-center
      cursor-pointer
    "
  >
    <div class="grid grid-cols-2 justify-items-end">
      <span>{{ caption ? caption : "Explore" }}</span>
      <ArrowRightIcon :class="{textclassObject}" class="-intro-x" v-if="state.isHovering" />
    </div>
  </div>
</template>

<script setup>
import { reactive,computed } from "@vue/reactivity";

const props = defineProps(["theme", "caption"]);
const state = reactive({
  isHovering: false,
  hasTheme: false,
  theme: "btn-secondary",
});

if (props.theme) {
  state.hasTheme = true;
}

const classObject = computed(() => ({
  "btn-secondary": !state.hasTheme,
  "btn-primary": props.theme == 'btn-primary',
  "btn-accent": props.theme == 'btn-accent',
}));
const textclassObject = computed(() => ({
  "text-primary": !state.hasTheme,
  "text-secondary": props.theme == 'btn-primary',
  "text-primary": props.theme == 'btn-accent',
}));
</script>   
