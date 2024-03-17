<template>
    <section style="margin-top:100px; margin-bottom: 200px;">

        <h1 >ARTICULOS DE INTERES</h1>

        <div v-for="blog in blogs" :key="blog.id">

            <article :id="blog.id" class="container-card">

                <div class="container-img">
                    <img :src="blog.url" width="200px" class="img"/>
                </div>
                <div class="container-texto">
                    <div class="cont-front">
                        <h4>{{ blog.titulo }}</h4>
                        <p> {{ blog.desc }}</p>
                    </div>
                    <div class="cont-back">
                        <p> {{ blog.decpBack }}</p>
                    </div>

                    <div class="container-btn">
                        <button> ver mas </button>
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
        {id: 3, url: require('@/assets/imagenes/img-navbar/akira.png'),titulo: InfoBlogEs.ripAkira.titulo, desc: InfoBlogEs.ripAkira.descripcionFront, decpBack: InfoBlogEs.ripAkira.descripcionBack}
    ]


</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Madimi+One&family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&family=Nunito+Sans:opsz,wght@6..12,700&display=swap');

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        text-align: center;
    }

    h1 {
        font-family: "Noto Sans", sans-serif;
    }

    .container-card {
        width: 600px;
        height: 250px;
        display: flex;
        flex-direction: row;
        border: 3px solid black;
    }

    .img {
        display: block;
        height: 100%;
        object-fit: cover;
    }


    .cont-back {
        display: none;
    }
</style>