<template>
  <NavBar v-if="state.reveal" />
  <Banner @reveal="handleReveal" />
  <template v-if="state.reveal">
    <CorporateFinanceSection />
    <PrimaryInsuranceSection />
    <CustodySection />
    <DistributionSection />
    <BrokerageSection />
    <InvestmentSection />
    <FintechSection />
    <Footer />
  </template>
</template>


<script setup>
import { onMounted, reactive } from "vue";
import "aos/dist/aos.css";
import AOS from "aos";

import NavBar from "@/components/NavBar/Main.vue";
import Banner from "@/components/Banner/Main.vue";

//=======SECTIONS
import CorporateFinanceSection from "@/components/Sections/CorporateFinance/Main.vue";
import PrimaryInsuranceSection from "@/components/Sections/PrimaryInsurance/Main.vue";
import CustodySection from "@/components/Sections/Custody/Main.vue";
import DistributionSection from "@/components/Sections/Distribution/Main.vue";
import BrokerageSection from "@/components/Sections/Brokerage/Main.vue";
import InvestmentSection from "@/components/Sections/Investment/Main.vue";
import FintechSection from "@/components/Sections/Fintech/Main.vue";
import Footer from "@/components/Footer/Main.vue";
const state = reactive({ reveal: false });

onMounted(() => {
  

  AOS.init();
  
});

const handleReveal = () =>{
  console.log('reveal')
  state.reveal = true;
}
</script>
