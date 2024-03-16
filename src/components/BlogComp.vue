<template>
    <section>
        <div v-for="blog in blogs" :key="blog.id">
            <article :id="blog.id" class="container-card">
                <div class="container-img">
                    <img :src="blog.url" width="200px" height="200px"/>
                </div>
                <div class="container-texto">
                    <div class="cont-front">
                        <h3>{{ blog.titulo }}</h3>
                        <p> {{ blog.desc }}</p>
                    </div>
                    <div class="cont-back">
                        <p> {{ blog.decpBack }}</p>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>

    import InfoBlogEs from '../assets/JSON/InfoBlogEs.json';
    
    const blogs = [
        {id: 1, url: require('@/assets/imagenes/img-navbar/tecnica.png'), titulo: InfoBlogEs.tecnicas.titulo, desc: InfoBlogEs.tecnicas.descripcionFront, decpBack: InfoBlogEs.tecnicas.descripcionBack},
        {id: 2, url: require('@/assets/imagenes/img-navbar/pinceles.png'),titulo: InfoBlogEs.materiales.titulo, desc: InfoBlogEs.materiales.descripcionFront, decpBack: InfoBlogEs.materiales.descripcionBack},
        {id: 4, url: require('@/assets/imagenes/img-navbar/dragonball.png'),titulo: InfoBlogEs.dragonball.titulo, desc: InfoBlogEs.dragonball.descripcionFront, decpBack: InfoBlogEs.dragonball.descripcionBack},
        {id: 3, url: require('@/assets/imagenes/img-navbar/akira.png'),titulo: InfoBlogEs.ripAkira.titulo, desc: InfoBlogEs.dragonball.descripcionFront, decpBack: InfoBlogEs.ripAkira.descripcionBack}
    ]


</script>

<style lang="scss" scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        text-align: center;
    }

    .container-card {
        width: 400px;
    }


    .cont-back {
        display: none;
    }
</style>