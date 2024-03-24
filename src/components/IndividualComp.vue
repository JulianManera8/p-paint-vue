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
                    <div class="cont-volver">
                        <button> Volver </button>
                    </div>
                    <div class="cont-cotiz">
                        <button class="cta">
                          <span>Pedir cotizacion</span>
                          <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                          </svg>
                        </button>
                    </div>
                </div>

            </section>

            <section class="container-fotos" :id="idFigura"> 
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

            <CarruselComp :idFigura="infoFigura.id" :idParaFondo="infoFigura.id"/>
            
            <div class="container-btn">
                <router-link id="a" to="/figuras">
                    <button class="learn-more">
                        <span class="circle" aria-hidden="true"  :id="infoFigura.id">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">VER TODOS</span>
                    </button>
                </router-link> 

            </div>
        </section>
    
    </main>


</template>

<script setup>
    //el carrusel de otras figuras abajo
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
        font-size: clamp(2vw, 4vw, 15px);
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
        margin:auto 50px;
        position: relative;
        @media (width < 828px) {
            width: 80vw;
        }

        border-top-right-radius: 10%;
        border-top-left-radius: 10%;
    }

    //color del fondo segun la figura
    #goku {
        background: linear-gradient(to bottom, rgb(255, 233, 154), white);
    }
    #ozaru {
        background: linear-gradient(to bottom, rgba(0, 94, 255, 0.35), white);
    }
    #kidbuu {
        background: linear-gradient(to bottom, rgba(212, 0, 255, 0.356), white);
    }
    #frieza {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.412), white);
    }
    #broly {
        background: linear-gradient(to bottom, rgba(132, 255, 0, 0.405), white);
    }
    #fatbuu {
        background: linear-gradient(to bottom, rgba(212, 0, 255, 0.356), white);
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

    .container-botones {
        display: flex;
        justify-content: right;
        align-items: center;
        width: 100%;
        text-align: right;
        flex-wrap: wrap-reverse;

        @media (width < 1015px) {
            justify-content: center;
            gap: 20px;
        }
    }

    .cont-volver {
        display: flex;
        text-align: center;
        margin-left: 10px;
        @media (width < 992px) {
            justify-content: center;
            margin: 0;
        }
    }

    .cont-cotiz {
        // min-width:170px;
        display: flex;
        width: fit-content !important;
        flex-wrap: nowrap;
    }

    .container-btn {
        text-align: center;
        margin: auto;
        margin-top: -110px;
        margin-bottom: 80px;
    }



    //estilos botones
    button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        background: transparent;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
        scale: 60%;
    }

    button.learn-more {
        width: 11rem;
        height: auto;
    }

    button.learn-more .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: relative;
        display: block;
        margin: 0;
        width: 3rem;
        height: 3rem;
        border-radius: 1.625rem;
    }
    

    button.learn-more .circle .icon {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #000000;
    }

    button.learn-more .circle .icon.arrow {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        left: 0.625rem;
        width: 1.125rem;
        height: 0.125rem;
        background: none;
    }

    button.learn-more .circle .icon.arrow::before {
        position: absolute;
        content: "";
        top: -0.29rem;
        right: 0.0625rem;
        width: 0.625rem;
        height: 0.625rem;
        border-top: 0.125rem solid #000000;
        border-right: 0.125rem solid #000000;
        transform: rotate(45deg);
    }

    button.learn-more .button-text {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0.75rem 0;
        margin: 0 0 0 1.85rem;
        color: #282936;
        font-weight: 700;
        line-height: 1.6;
        text-align: center;
        text-transform: uppercase;
    }

    button:hover .circle {
        width: 100%;
    }

    button:hover .circle .icon.arrow {
        background: #000000;
        transform: translate(1rem, 0);
    }

    button:hover .button-text {
        color: #000000;
    }

    .cta {
        position: relative;
        margin: auto;
        padding: 12px 18px;
        transition: all 0.2s ease;
        border: none;
        background: none;
        cursor: pointer;
    }
    
    .cta:before {
        content: "";
        position: absolute;
        top: -3px;
        left: 0;
        display: block;
        border-radius: 50px;
        background-color: rgb(252, 177, 36);
        width: 55px;
        height: 55px;
        transition: all 0.3s ease;
    }
    
    .cta span {
        position: relative;
        font-family: "Ubuntu", sans-serif;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 0.05em;
        color: #000000;
    }
    
    .cta svg {
        position: relative;
        top: -3px;
        margin-left: 30px;
        fill: none;
        scale: 200%;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: rgb(252, 177, 36);
        stroke-width: 2;
        transform: translateX(-5px);
        transition: all 0.3s ease;
    }
    
    .cta:hover:before {
        width: 100%;
        background: rgb(252, 177, 36);
    }
    .cta:hover span {
        color: white;
        transition: all 0.3s ease;
    }
    
    .cta:hover svg {
        transform: translateX(0);
        stroke: white;
        transition: all 0.3s ease;
    }
    
    .cta:active {
        transform: scale(0.95);
    }

</style>