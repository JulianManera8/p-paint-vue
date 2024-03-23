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
                <div class="icon-left">
                    <v-icon @click="left" name="fa-chevron-left" scale="2.3"  animation="pulse" color="grey" speed="slow" />
                </div>
                <div class="cont-imgPrincipal">
                    <img class="princFigura" :src="imgPrinc" :id="imgFigura[0].idImg1" :alt="infoFigura.nombre" :title="infoFigura.nombre">
                </div>
                <div class="icon-right">
                    <v-icon @click="right" name="fa-chevron-right" scale="2.3" animation="pulse" color="grey" speed="slow"/> 
                </div>
                <div class="cont-imgSec">
                    <Swiper
                    v-if="mostrarSwiper" 
                    :slidesPerView="slidesPerView"
                    :spaceBetween="15"
                    :loop="true"
                    :modules="modules"
                    :autoplay="{
                        delay: 1750,
                        disableOnInteraction: true,
                    }"
                    class="mySwiper"
                    >
                
                        <SwiperSlide class="swiperslide">
                            <img @click="cambiar(0)" :src="imgFigura[0].url"  :alt="infoFigura.nombre" :id="imgFigura[0].idImg1" :title="infoFigura.nombre" > 
                        </SwiperSlide>
                        <SwiperSlide class="swiperslide">
                            <img @click="cambiar(1)" :src="imgFigura[1].url"  :alt="infoFigura.nombre" :id="imgFigura[1].idImg2" :title="infoFigura.nombre" >
                        </SwiperSlide>
                        <SwiperSlide class="swiperslide">
                            <img @click="cambiar(2)" :src="imgFigura[2].url" :alt="infoFigura.nombre" :id="imgFigura[2].idImg3" :title="infoFigura.nombre" >
                        </SwiperSlide>
                        <SwiperSlide class="swiperslide">
                            <img @click="cambiar(3)" :src="imgFigura[3].url" :alt="infoFigura.nombre" :id="imgFigura[3].idImg4" :title="infoFigura.nombre"  >
                        </SwiperSlide>
                        <SwiperSlide class="swiperslide">
                            <img @click="cambiar(4)" :src="imgFigura[4].url" :alt="infoFigura.nombre" :id="imgFigura[4].idImg5" :title="infoFigura.nombre" >
                        </SwiperSlide>
                    
                    </Swiper>
                    <section v-if="!mostrarSwiper">
                        <img @click="cambiar(0)" :src="imgFigura[0].url"  :alt="infoFigura.nombre" :id="imgFigura[0].idImg1" :title="infoFigura.nombre" width="65px"> 
                        <img @click="cambiar(1)" :src="imgFigura[1].url"  :alt="infoFigura.nombre" :id="imgFigura[1].idImg2" :title="infoFigura.nombre" width="65px">
                        <img @click="cambiar(2)" :src="imgFigura[2].url" :alt="infoFigura.nombre" :id="imgFigura[2].idImg3" :title="infoFigura.nombre" width="65px">
                        <img @click="cambiar(3)" :src="imgFigura[3].url" :alt="infoFigura.nombre" :id="imgFigura[3].idImg4" :title="infoFigura.nombre"  width="65px">
                        <img @click="cambiar(4)" :src="imgFigura[4].url" :alt="infoFigura.nombre" :id="imgFigura[4].idImg5" :title="infoFigura.nombre" width="65px">
                    </section>
                </div>
            </section>

        </div>

        <section>
            <h2 class="titulo-carrousel"> Tambien te pueden interesar: </h2>

            <CarruselComp :idFigura="infoFigura.id"/>
            
        </section>
    
    </main>


</template>

<script setup>
    //el ccarrusel de otras figuras abajo
    import CarruselComp from "../components/CarruselComp.vue"

            //todo lo del carrusel responsive
    //swiper
    import {Swiper, SwiperSlide} from 'swiper/vue'
    import "swiper/css"
    import 'swiper/css/pagination'
    import {Autoplay} from 'swiper/modules';

    const modules = [Autoplay]

    //resto del js
    import infoFigEs from '../assets/JSON/infoFigEs.json'
    import {useRoute } from 'vue-router';
    import { ref } from 'vue';

    const route = useRoute();
    var idFigura = route.params.id
    const figuraSelected = infoFigEs[idFigura]

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
        {idImg1: `${idFigura}1`, url: require(`@/assets/imagenes/${idFigura}/1${idFigura}.png`)},
        {idImg2: `${idFigura}2`, url: require(`@/assets/imagenes/${idFigura}/2${idFigura}.png`)},
        {idImg3: `${idFigura}3`, url: require(`@/assets/imagenes/${idFigura}/3${idFigura}.png`)},
        {idImg4: `${idFigura}4`, url: require(`@/assets/imagenes/${idFigura}/4${idFigura}.png`)},
        {idImg5: `${idFigura}5`, url: require(`@/assets/imagenes/${idFigura}/5${idFigura}.png`)}
    ]
    
    //pasar figuras cuando doy click
    var imgPrinc = ref(imgFigura[0].url)

    var currentIndex = ref(0);

    const cambiar = (i) => {
        currentIndex.value = i
        imgPrinc.value = imgFigura[currentIndex.value].url
    }

    const left = () => {
        currentIndex.value = (currentIndex.value - 1 + imgFigura.length) % imgFigura.length;
        cambiar(currentIndex.value)
    }

    const right = () => {
        currentIndex.value = (currentIndex.value + 1 + imgFigura.length) % imgFigura.length;
        cambiar(currentIndex.value)
    }

    //activar el carrusel cuando sea responsive
    
    var mostrarSwiper = ref(false)
    var slidesPerView = ref(3)

    const updateSlidesPerView = () => {
            if (window.innerWidth < 354) {
                mostrarSwiper.value = true
                slidesPerView.value = 2; //  
            } else if (window.innerWidth < 450) {
                mostrarSwiper.value = true
                slidesPerView.value = 3; // Cambia a 1 en pantallas pequeñas
            } else if (window.innerWidth < 600) {
                mostrarSwiper.value = true
                slidesPerView.value = 4; // Cambia a 2 en pantallas medianas
            } else {
                mostrarSwiper.value = false
            }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    

</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

    .cont-titulo{
        display: flex;
        text-align: center;
        justify-content: center;
        font-family: "Montserrat", sans-serif;
        font-size: clamp(4vw, 4vw, 20px);
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
        display: flex;
        text-align: left;
        flex-direction: column;
        position: relative;
        width: 35vw;
        height: 100%;
        h4 {
            text-align: center;
            text-decoration: underline;
            font-family: "Roboto", sans-serif;
        }

        li {
            font-size: small;
            font-family: "Roboto", sans-serif;
            margin-top: 10px;
        }

        @media (width < 828px) {
            margin-top: 40px;
            width: 80vw;

            h4 {
                font-size: larger;
            }
        }
        
    }

    .container-fotos{
        display: flex;
        flex-direction: column;
        width: 55vw;
        justify-content: center;
        text-align: center;
        align-items: center;
        background: linear-gradient(to bottom, rgb(255, 233, 154), white);
        margin:auto 50px;
        position: relative;
        @media (width < 828px) {
            width: 80vw;
        }

        border-top-right-radius: 10%;
        border-top-left-radius: 10%;

    }

    .cont-imgPrincipal{
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            user-select: none;
        }
        
        #goku1 {
            margin-top: 20px;
            margin-bottom: 50px;
        }

        #frieza1 {
            margin-bottom: 0px;
        }

        #fatbuu1 {
            margin-bottom: 0px;
        }

        @media (width < 828px) {
            position: inherit;
            .icon-left{
            position: absolute;
            left: 120px;
            }
            .icon-right{
            position: absolute;
            right: 120px;
            }
        }
    }

    .icon-left{
        position: absolute !important;
        left: 10px;
        cursor: pointer;
        z-index: 900;
    }
    .icon-right{
        position: absolute !important;
        right: 10px;
        cursor: pointer;
        z-index: 900;
    }
    
    .cont-imgSec {
        display: flex;
        flex-direction: row;
        height: 100px;
        width: 60vw;
        justify-content: center;
        user-select: none;

        img {
            height: 79px;
            object-fit: contain;
            filter: drop-shadow(10px 3px 3px rgba(0, 0, 0, 0.281));
            cursor: pointer;
            user-select: none;
        }

        section {
            display: flex;
            width: 80%;
            justify-content: space-evenly;
        }

        @media (width < 828px) {
            width: 65vw;
            overflow: none;
            height: 100%;
            width: 100%;
        }
    }

    .titulo-carrousel {
        text-align: center;
        margin-top: 100px;
        text-transform: uppercase;
        font-size: clamp(4vw, 4vw, 20px);
        margin-bottom: 20px;
    }

</style>