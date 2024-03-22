<template>
    <main>
        <section class="container-card" v-for="figura in nuevoArr" :key="figura.id">
            <!-- ACA VA EL CARRUSEL CON ESTOS DATOS -->
            <div class="container-titulo">
                <h3> {{ figura.nombre }}</h3>
            </div>
            <div class="container-foto">
                <img :src="figura.img" :alt="figura.img" width="75px">
            </div>
        </section>
    </main>

</template>

<script setup>
    import infoFigEs  from '../assets/JSON/infoFigEs.json'
    import { defineProps } from 'vue';

    
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

    
</script>

<style lang="scss" scoped>

</style>