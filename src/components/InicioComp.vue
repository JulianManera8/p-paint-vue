<template>

    <NavbarComp />

    <HeroComp />

    <main> 
        <section> 
            <CardsComp />
        </section>

        <!--<section> About me y mas info, aca meter homenaje a akira (componente de cards About mia y la de akira)</section> -->
        <section>
            <ContactoComp />
        </section>
    </main> 
    


    <FooterComp /> 



</template>

<script setup>
    import NavbarComp from './NavbarComp.vue';
    import FooterComp from './FooterComp.vue';
    import HeroComp from './HeroComp.vue';
    import CardsComp from './CardsComp.vue';
    import ContactoComp from './ContactoComp.vue';
</script>

<style lang="scss" scoped>

</style>