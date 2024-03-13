<template>
    <div>
        <h1>FIGURAS</h1>
        <section > 
            <div class="container-card" v-for="(figura, index) in infoFiguras" :key="index">
                <div class="container-titulo">
                    <h3 class="titulo"> {{ figura.nombre }}</h3>
                </div>
                <div class="container-foto">
                    <img :src="figura.img" :alt="figura.alt" style="width: 200px;" />
                </div>
                <div class="container-btn">
                    <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Mas Info.</span>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import infoFigEs from '../assets/JSON/infoFigEs.json'
    // import infoFigEn from '../assets/JSON/infoFigEn.json'


    const infoFiguras = [
        {img: require('@/assets/imagenes/img-goku/2gokussjSF.png'), alt: 'goku', nombre: infoFigEs.goku.nombreFigura, btn: 'ver mas'},
        {img: require('@/assets/imagenes/img-kidbuu/3kidbuuSF.png'), alt: 'kidbuu', nombre: infoFigEs.kidbuu.nombreFigura, btn: 'ver mas'},
        {img: require('@/assets/imagenes/img-frieza/2friezaSF.png'), alt: 'frieza', nombre: infoFigEs.frieza.nombreFigura, btn: 'ver mas'},
        {img: require('@/assets/imagenes/img-ozaru/4-ozaru.png'), alt: 'ozaru', nombre: infoFigEs.ozaru.nombreFigura, btn: 'ver mas'},
        {img: require('@/assets/imagenes/img-broly/6broly-gokuSF.png'), alt: 'broly', nombre: infoFigEs.broly.nombreFigura, btn: 'ver mas'},
        {img: require('@/assets/imagenes/img-fatbuu/2buufatSF.png'), alt: 'fatbuu', nombre: infoFigEs.fatbuu.nombreFigura, btn: 'ver mas'},
    ]

    console.log(infoFiguras)
    
</script>


<style lang="scss" scoped>

    h1 {
        display: flex;
        text-align: center;
        justify-content: center;
        font-size: clamp(4vw, 4vw, 20px);
    }

    section {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        margin: 20px 75px;
        justify-content: center;
        text-align: center;
    }

    .container-card {
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        width: min-content;
        height: min-content;
    }


    
    //ESTILOS BOTON MAS INFO
    
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
        scale: 70%;
    }

    button.learn-more {
        width: 12rem;
        height: auto;
    }

    button.learn-more .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: relative;
        display: block;
        margin: 0;
        width: 3rem;
        height: 3rem;
        background: #282936;
        border-radius: 1.625rem;
    }

    button.learn-more .circle .icon {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #fff;
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
        border-top: 0.125rem solid #fff;
        border-right: 0.125rem solid #fff;
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
        background: #fff;
        transform: translate(1rem, 0);
    }

    button:hover .button-text {
        color: #fff;
    }
</style>