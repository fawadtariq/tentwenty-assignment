<template>
  <div
    style="position: absolute; left: 1.5%"
    class="bg-light mt-px-20 w-pr-97 h-px-81 mx-auto intro-y z-10"
  >
    <div class="grid grid-cols-5 items-center h-full px-px-50">
      <div class="justify-self-start col-cover-1 intro-y">LOGO</div>
      <div class="grid grid-cols-5 col-cover-3">
        <div class="intro-y">The Firm</div>
        <div class="intro-y">Solutions</div>
        <div class="intro-y">News &amp; Insights</div>
        <div class="intro-y">Careers</div>
        <div class="intro-y">Locations</div>
      </div>
      <div
      data-aos="left"
        style="display: flex;
          flex-flow: wrap;
          column-gap: 10px;
          align-items: center;"
        class="justify-self-end col-cover-1">
        <SearchIcon />
        <CTAButton />
      </div>
    </div>
  </div>
</template>

<script setup>
import CTAButton from "@/components/CTAButton/Main.vue";
</script>