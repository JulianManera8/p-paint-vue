<template>
    <div>
        <NavbarComp />

        <main>
            <div class="container-cards" v-for="blog in blogs" :key="blog.id">
                <article>
                    <img :src="blog.url" width="200px" height="200px"/>
                    <h3>{{ blog.titulo }}</h3>
                    <p> {{ blog.desc }}</p>
                    <p> {{ blog.decpBack }}</p>
                </article>
                
            </div>
        </main>

        <FooterComp />
    </div>
</template>

<script setup>
    import NavbarComp from './NavbarComp.vue';
    import FooterComp from './FooterComp.vue';

    import InfoBlogEs from '../assets/JSON/InfoBlogEs.json';
    
    const blogs = [
        {id: 1, url: require('@/assets/imagenes/img-navbar/tecnica.png'), titulo: InfoBlogEs.tecnicas.titulo, desc: InfoBlogEs.tecnicas.descripcionFront, decpBack: InfoBlogEs.tecnicas.descripcionBack},
        {id: 2, url: require('@/assets/imagenes/img-navbar/pinceles.png'),titulo: InfoBlogEs.materiales.titulo, desc: InfoBlogEs.materiales.descripcionFront, decpBack: InfoBlogEs.materiales.descripcionBack},
        {id: 4, url: require('@/assets/imagenes/img-navbar/dragonball.png'),titulo: InfoBlogEs.dragonball.titulo, desc: InfoBlogEs.dragonball.descripcionFront, decpBack: InfoBlogEs.dragonball.descripcionBack},
        {id: 3, url: require('@/assets/imagenes/img-navbar/akira.png'),titulo: InfoBlogEs.ripAkira.titulo, desc: InfoBlogEs.dragonball.descripcionFront, decpBack: InfoBlogEs.ripAkira.descripcionBack}
    ]


</script>

<style lang="scss" scoped>

</style>