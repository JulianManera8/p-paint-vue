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
                    <img class="otraFigura" @click="cambiar(0)" :src="imgFigura[0].url"  :alt="infoFigura.nombre" :id="imgFigura[0].idImg1" :title="infoFigura.nombre" width="75px"> 
                    <img class="otraFigura" @click="cambiar(1)" :src="imgFigura[1].url"  :alt="infoFigura.nombre" :id="imgFigura[1].idImg2" :title="infoFigura.nombre" width="75px">
                    <img class="otraFigura" @click="cambiar(2)" :src="imgFigura[2].url" :alt="infoFigura.nombre" :id="imgFigura[2].idImg3" :title="infoFigura.nombre" width="75px">
                    <img class="otraFigura" @click="cambiar(3)" :src="imgFigura[3].url" :alt="infoFigura.nombre" :id="imgFigura[3].idImg4" :title="infoFigura.nombre"  width="75px">
                    <img class="otraFigura" @click="cambiar(4)" :src="imgFigura[4].url" :alt="infoFigura.nombre" :id="imgFigura[4].idImg5" :title="infoFigura.nombre" width="75px">
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
    import CarruselComp from "../components/CarruselComp.vue"
    //todo lo del carrusel

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
        {idImg1: `${idFigura}1`, url: require(`@/assets/imagenes/${idFigura}/1${idFigura}.png`)},
        {idImg2: `${idFigura}2`, url: require(`@/assets/imagenes/${idFigura}/2${idFigura}.png`)},
        {idImg3: `${idFigura}3`, url: require(`@/assets/imagenes/${idFigura}/3${idFigura}.png`)},
        {idImg4: `${idFigura}4`, url: require(`@/assets/imagenes/${idFigura}/4${idFigura}.png`)},
        {idImg5: `${idFigura}5`, url: require(`@/assets/imagenes/${idFigura}/5${idFigura}.png`)}
    ]
    
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



</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

    .cont-titulo{
        display: flex;
        text-align: center;
        justify-content: center;
        font-family: "Montserrat", sans-serif;

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
        margin-bottom: 30px;
        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            user-select: none;
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
        gap: 20px;
        height: 100px;
        width: 40vw;
        margin: auto;
        justify-content: center;
        user-select: none;

        

        img {
            height: 100%;
            object-fit: contain;
            filter: drop-shadow(10px 3px 3px rgba(0, 0, 0, 0.281));
            cursor: pointer;
            user-select: none;
        }

        @media (width < 828px) {
            width: 65vw;
            overflow: none;
            flex-wrap: wrap;
            height: 100%;
            width: 100%;

            #goku5 {
                height: 140px !important;
                object-fit: fill;
            }
        }
    }

    .titulo-carrousel {
        text-align: center;
        margin-top: 120px
    }

</style>