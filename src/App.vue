<template>
  <div>

    <NavbarComp />
    
    <main>
      <router-view />
    </main>
    
    <FooterComp />  


  </div>
</template>





<script setup>
  import NavbarComp from './components/NavbarComp.vue'
  import FooterComp from './components/FooterComp.vue'

</script>





<style lang="scss">
  body {
    padding: 0 !important;
    margin: 0 !important;
  }
</style>
