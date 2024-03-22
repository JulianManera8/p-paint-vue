<template>
    <main>
        <div class="container-titulo">
            <h3> {{ props.infoFigura.nombre }}</h3>
        </div>
        <div class="container-foto">
            <img :src="props.imgFigura[0].url" alt="">
        </div>
    </main>

</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({ 
        infoFigura: Object, 
        imgFigura: Array
    })

    
</script>

<style lang="scss" scoped>

</style>