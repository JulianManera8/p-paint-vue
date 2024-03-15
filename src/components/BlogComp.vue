<template>
    <div>
        <NavbarComp />

        <main style="height: 800px;">
            <div class="container-cards">
                <section class="content-blog blog1">

                </section>
                <section class="content-blog blog2">

                </section>

                <section class="content-blog blog3">
                
                </section>

                <section class="content-blog blog4">
                
                </section>
            </div>
        </main>

        <FooterComp />
    </div>
</template>

<script setup>
    import NavbarComp from './NavbarComp.vue';
    import FooterComp from './FooterComp.vue';

    import InfoBlogEs from '../assets/JSON/InfoBlogEs.json';
    console.log(InfoBlogEs);

</script>

<style lang="scss" scoped>

</style>