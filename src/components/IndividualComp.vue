<template>

    <main style="margin-top: 75px;"> 
        <div class="cont-titulo">
            <h1> {{ infoFigura.nombre }}</h1>
        </div>

        <div class="container-figura"> 

            <section class="container-descripcion">
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

            </section>

            <section class="container-fotos"> 
                <div class="cont-imgPrincipal">
                    <img class="princFigura" :src="imgPrinc" :id="imgFigura[0].idImg1" :alt="infoFigura.nombre" :title="infoFigura.nombre">
                </div>
                <div class="cont-imgSec">
                    <img class="otraFigura" @click="cambiar(0)" :src="imgFigura[0].url1"  :alt="infoFigura.nombre" :id="imgFigura[0].idImg1" :title="infoFigura.nombre" width="75px"> 
                    <img class="otraFigura" @click="cambiar(1)" :src="imgFigura[1].url2"  :alt="infoFigura.nombre" :id="imgFigura[1].idImg2" :title="infoFigura.nombre" width="75px">
                    <img class="otraFigura" @click="cambiar(2)" :src="imgFigura[2].url3" :alt="infoFigura.nombre" :id="imgFigura[2].idImg3" :title="infoFigura.nombre" width="75px">
                    <img class="otraFigura" @click="cambiar(3)" :src="imgFigura[3].url4" :alt="infoFigura.nombre" :id="imgFigura[3].idImg4" :title="infoFigura.nombre"  width="75px">
                    <img class="otraFigura" @click="cambiar(4)" :src="imgFigura[4].url5" :alt="infoFigura.nombre" :id="imgFigura[4].idImg5" :title="infoFigura.nombre" width="75px">
                </div>
            </section>

        </div>

        <!-- <section>
            <h2> Tambien te pueden interesar: </h2>
            <div class="container-swipper">
                <swiper
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
                </swiper>
            </div>


        </section> -->
    
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
    import { ref } from 'vue';

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

    const imgFigura = [
        {idImg1: `${idFigura}1`, url1: require(`@/assets/imagenes/${idFigura}/1${idFigura}.png`)},
        {idImg2: `${idFigura}2`, url2: require(`@/assets/imagenes/${idFigura}/2${idFigura}.png`)},
        {idImg3: `${idFigura}3`, url3: require(`@/assets/imagenes/${idFigura}/3${idFigura}.png`)},
        {idImg4: `${idFigura}4`, url4: require(`@/assets/imagenes/${idFigura}/4${idFigura}.png`)},
        {idImg5: `${idFigura}5`, url5: require(`@/assets/imagenes/${idFigura}/5${idFigura}.png`)}
    ]
    
    var imgPrinc = ref(imgFigura[0].url1)

    const cambiar = (i) => {

        switch (i) {
            case i = 0:
                imgPrinc.value = imgFigura[i].url1
                break;
            case i = 1:
                imgPrinc.value = imgFigura[i].url2
                break;
            case i = 2:
                imgPrinc.value = imgFigura[i].url3
                break;
            case i = 3:
                imgPrinc.value = imgFigura[i].url4
                break;
            case i = 4:
                imgPrinc.value = imgFigura[i].url5
                break;
        }

    }

</script>

<style lang="scss" scoped>

    .cont-titulo{
        display: flex;
        text-align: center;
        justify-content: center;
    }

    .container-figura {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;

        @media (width < 828px) {
            flex-direction: column-reverse;
        }
    }

    .container-descripcion{
        width: 35vw;
        height: 100%;
        align-items: start;
        li {
            font-size: smaller;
        }
        
    }
    .container-fotos{
        display: flex;
        flex-direction: column;
        width: 55vw;
        justify-content: center;
        text-align: center;
        align-items: center;
    }

    .cont-imgPrincipal{
        height: 500px;
        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            filter: drop-shadow(0px 0px 70px rgb(255, 196, 0));
        }
    }
    
    .cont-imgSec {
        display: flex;
        flex-direction: row;
        gap: 20px;
        height: 100px;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }

</style>