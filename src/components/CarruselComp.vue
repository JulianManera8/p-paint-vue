<template>
    <main class="container-todo">

        <Swiper 
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

            <SwiperSlide class="swiperslide" v-for="figura in nuevoArr" :key="figura.id">
                <div class="container-card">
                    <div class="container-foto" :id="figura.id" @click="verFigura({name: 'individual', params: {id: figura.id}})">
                        <img :src="figura.img" :alt="figura.img">
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
       
    </main>

</template>

<script setup>
    import infoFigEs  from '../assets/JSON/infoFigEs.json'
    import { defineProps, ref } from 'vue';
    import { useRouter } from 'vue-router';

    //swiper
    import {Swiper, SwiperSlide} from 'swiper/vue'
    import "swiper/css"
    import 'swiper/css/pagination'
    import {Autoplay} from 'swiper/modules';

    const modules = [Autoplay]

    const props = defineProps({ 
        idFigura: String
    })


    const infoFiguras = [
        {img: require('@/assets/imagenes/goku/1goku.png'), alt: 'goku', id:"goku", nombre: infoFigEs.goku.nombreFigura},
        {img: require('@/assets/imagenes/kidbuu/1kidbuu.png'), alt: 'kidbuu', id:"kidbuu", nombre: infoFigEs.kidbuu.nombreFigura},
        {img: require('@/assets/imagenes/frieza/1frieza.png'), alt: 'frieza', id:"frieza", nombre: infoFigEs.frieza.nombreFigura},
        {img: require('@/assets/imagenes/ozaru/1ozaru.png'), alt: 'ozaru', id:"ozaru", nombre: infoFigEs.ozaru.nombreFigura},
        {img: require('@/assets/imagenes/broly/1broly.png'), alt: 'broly', id:"broly", nombre: infoFigEs.broly.nombreFigura},
        {img: require('@/assets/imagenes/fatbuu/1fatbuu.png'), alt: 'fatbuu', id:"fatbuu", nombre: infoFigEs.fatbuu.nombreFigura},
    ]

    var nuevoArr = infoFiguras.filter(figuras => figuras.id != props.idFigura)

    const slidesPerView = ref(3); // Valor inicial

    const updateSlidesPerView = () => {
        if (window.innerWidth < 450) {
            slidesPerView.value = 1; // Cambia a 1 en pantallas pequeñas
        } else if (window.innerWidth <= 680) {
            slidesPerView.value = 2; // Cambia a 2 en pantallas medianas
        } else {
            slidesPerView.value = 3; // Mantiene 3 en pantallas grandes
        }
    };
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView);
    
    

    //lo de la ruta
    const router = useRouter()
    const verFigura = (path) => {
        router.push(path)
        setTimeout(() => {
            window.location.reload();
        }, 1);
    }

    // :to="
</script>

<style lang="scss" scoped>

    .container-todo {
        background: linear-gradient(to bottom, rgba(255, 208, 0, 0), rgb(255, 236, 169), rgb(255, 227, 151), rgba(255,255,0,0));
    }

    .mySwiper {
        width: 100%;
        margin-bottom: 120px;
        text-align: center;
        height:250px;
        cursor: grab;
        user-select: none;
    }

    .swiperslide {
        margin: auto;
        display: flex;
        justify-content: center !important;
        align-items: center;
        height: 100%;
        margin: 0;
        flex-direction: column;
    }
    
    .container-foto {
        display: flex;
        align-items: center;
        height: 80%;
        img {
            height: 200px;
            object-fit: contain;
            margin-bottom: -30px;
            align-items: top;
            transition: 0.3s;
            filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.75));
        };
        cursor: pointer;

    }

    .container-foto:hover {
        img {
            scale: 110%;
            transition: 0.3s;
        }
    }



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
</style>