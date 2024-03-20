<template>

    <main style="margin-top: 75px;"> 
        <section class="container-figura"> 

            <aside class="container-descripcion">
                <div class="cont-titulo">
                    <h1> {{ infoFigura.nombre }}</h1>
                </div>
                <div class="cont-descripcion">
                    <h4>Especificaciones y datos</h4>
                    <div class="especs">
                        <ul>
                            <li> {{ infoFigura.medidas }}</li>
                            <li>{{ infoFigura.impresaPor }}</li>
                            <li>{{ infoFigura.pintadaCon }}</li>
                            <li>{{ infoFigura.barnizado }}</li>
                            <li>{{ infoFigura.base }}</li>
                            <li>{{ infoFigura.descripContexto }}</li>
                        </ul>
                    </div>
                </div>

                <div class="container-botones">
                    <div class="cont-cotizacion"></div>
                    <div class="cont-volver"></div>
                </div>

            </aside>

            <div class="container-fotos"> 
                <div class="cont-imgPrincipal">
                    <img src="" alt="">
                </div>
                <div class="cont-imgSec">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>

        </section>


        <section>
            <h2> Tambien te pueden interesar: </h2>
            <div class="container-swipper">
                <!-- <swiper
                    :slidesPerView="3"
                    :spaceBetween="30"
                    :pagination="{
                      clickable: true,
                    }"
                    :modules="Pagination"
                    class="mySwiper"
                >
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide>
                    <swiper-slide>Slide 6</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide>
                </swiper> -->
            </div>


        </section>
    
    </main>


</template>

<script setup>
//todo lo del carrusel
    // import { Swiper, SwiperSlide } from 'swiper/vue';
    // import 'swiper/css';
    // import 'swiper/css/pagination';
    // import { Pagination } from 'swiper/modules';

//resto del js
    import infoFigEs from '../assets/JSON/infoFigEs.json'
    import {useRoute } from 'vue-router';

    const route = useRoute();
    var idFigura = route.params.id
    const figuraSelected = infoFigEs[idFigura]

    //tengo q asignarle una variable al id, y q esa misma variable 
    //se vaya cambiando en los distintos elementos

    const infoFigura = {
        id: idFigura,
        nombre: figuraSelected.nombreFigura, 
        medidas: figuraSelected.medidas,
        impresaPor: figuraSelected.impresaPor,
        pintadaCon: figuraSelected.pintadaCon,
        barnizado: figuraSelected.barnizado,
        base: figuraSelected.base,
        descripContexto: figuraSelected.descripContexto
    }

    const imgFigura = {
        
    }
    

</script>

<style lang="scss" scoped>

</style>