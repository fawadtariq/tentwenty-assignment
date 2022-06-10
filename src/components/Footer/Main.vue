<template>
  <div class="bg-light grid grid-rows-4 h-vp-70">
    <div class="row-cover-3 grid grid-cols-3">
      <div class="">Logo</div>
      <div class="grid grid-rows-6 p-px-50">
        <div><p data-aos="fade-down" data-aos-delay="100" class="footer-nav">The Firm</p></div>
        <div><p data-aos="fade-down" data-aos-delay="200" class="footer-nav">Solutions</p></div>
        <div><p data-aos="fade-down" data-aos-delay="300" class="footer-nav">News &amp; Insights</p></div>
        <div><p data-aos="fade-down" data-aos-delay="400" class="footer-nav">Locations</p></div>
        <div><p data-aos="fade-down" data-aos-delay="500" class="footer-nav">Careers</p></div>
        <div>
          <p data-aos="fade-up" data-aos-delay="600" class="footer-nav">
            <LinkedinIcon class="bg-primary p-px-5 text-light" />
          </p>
        </div>
      </div>
      <div
        id="cta_box"
        class="bg-secondary grid grid-cols-1 items-center justify-items-center"
      >
        <div class="align-self-end grid items-center justify-items-center">
          <div data-aos="fade-up" class="text-xl text-primary align-self-end">
            Want to Know More?
          </div>
          <div data-aos="fade-up"
            class="text-center text-xs text-primary align-self-start"
            style="max-width: 80%; text-align: center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, diam
            lectus sagittis
          </div>
        </div>

        <div data-aos="fade-down" class="align-self-start mt-px-20">
          <CTAButton />
        </div>
      </div>
    </div>
    <div
    
      class="row-cover-1 grid grid-rows-2"
      style="border-top: 1px solid #0000001f"
    >
      <div class="row-cover-1 px-pr-10 pt-px-20">
        <div data-aos="fade-up" class="text-xs text-dark-50">
          Wethaq (Capital Markets) Ltd is a limited liability company registered
          with the Dubai International Financial Centre (DIFC) with Company
          Registration No. 3254 and regulated by the Dubai Financial Services
          Authority (DFSA) under DFSA Reference Number F005322. Wethaq Capital
          Platform JSC operates under an Experimental Permit from the Capital
          Market Authority (CMA). Wethaq Solutions Ltd is a limited liability
          company registered in the United Kingdom.
        </div>
      </div>
      <div 
        class="row-cover-1 grid grid-cols-3 items-center justify-items-center"
      >
        <div data-aos="fade-right" data-aos-offset="-50" data-aos-delay="300" >© 2022 Wethaq. All rights reserved.</div>
        <div data-aos="fade-up" data-aos-offset="-50" data-aos-delay="300">Terms &amp; Conditions &nbsp; | &nbsp; Privacy Policy</div>
        <div data-aos="fade-left" data-aos-offset="-50" data-aos-delay="300">Made with <HeartIcon /> by TenTwenty</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CTAButton from "@/components/CTAButton/Main.vue";
</script>

<style>
#cta_box{
  background-image: url('@/assets/img/footer-cta-bg.png');
      background-size: contain;
    background-position-x: center;
    background-repeat: no-repeat;
    background-blend-mode: luminosity;
    background-position-y: center;
}
</style>