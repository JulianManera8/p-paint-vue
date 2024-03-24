<template>
    <div id="todo">
        <h1>FIGURAS</h1>
        <section> 

            <div  v-for="(figura, id) in infoFiguras" :key="id">
                <router-link class="container-card" :id="figura.id" :to="{name: 'individual', params: {id: figura.id}}">

                    <div class="container-foto">
                        <img class="img" :src="figura.img" :alt="figura.alt"/>
                    </div>

                    <div class="container-titulo">
                        <h4 class="titulo"> {{ figura.nombre }}</h4>
                    </div>

                    <div class="container-btn">
                        <button class="learn-more">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">Mas Info</span>
                        </button>
                    </div>

                </router-link>


            </div>
        </section>
    </div>
</template>

<script setup>
    import infoFigEs from '../assets/JSON/infoFigEs.json'
    // import infoFigEn from '../assets/JSON/infoFigEn.json'


    const infoFiguras = [
        {img: require('@/assets/imagenes/goku/1goku.png'), alt: 'goku', id:"goku", nombre: infoFigEs.goku.nombreFigura, btn: 'ver mas'},
        {img: require('@/assets/imagenes/kidbuu/1kidbuu.png'), alt: 'kidbuu', id:"kidbuu", nombre: infoFigEs.kidbuu.nombreFigura, btn: 'ver mas'},
        {img: require('@/assets/imagenes/frieza/1frieza.png'), alt: 'frieza', id:"frieza", nombre: infoFigEs.frieza.nombreFigura, btn: 'ver mas'},
        {img: require('@/assets/imagenes/ozaru/1ozaru.png'), alt: 'ozaru', id:"ozaru", nombre: infoFigEs.ozaru.nombreFigura, btn: 'ver mas'},
        {img: require('@/assets/imagenes/broly/1broly.png'), alt: 'broly', id:"broly", nombre: infoFigEs.broly.nombreFigura, btn: 'ver mas'},
        {img: require('@/assets/imagenes/fatbuu/1fatbuu.png'), alt: 'fatbuu', id:"fatbuu", nombre: infoFigEs.fatbuu.nombreFigura, btn: 'ver mas'},
    ]
    
</script>

<style lang="scss" scoped>

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    

    h1 {
        display: flex;
        text-align: center;
        justify-content: center;
        // font-size: clamp(4vw, 4vw, 20px);
        font-family: "Montserrat", sans-serif;
        margin-top: 70px;
        margin-bottom: 40px;
    }

    section {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        margin: 20px 75px 120px 75px;
        justify-content: center;
        text-align: center;
    }

    .container-card {
        display: flex;
        flex-direction: column;
        width: 350px;
        height: 420px !important;
        height: min-content;
        font-family: "Montserrat", sans-serif;
        border-radius: 2em;
        box-shadow: 0px 0px 20px rgba(138, 138, 138, 0.711);
        margin-top: 30px;
        margin: 10px 10px;
        text-decoration: none;
        color: black;
    }

    #goku {
        background: linear-gradient(to bottom, rgb(255, 233, 154), white);
        .circle {
            background-color: rgb(255, 233, 154);
        }
    }
    #kidbuu {
        background: linear-gradient(to bottom, rgba(212, 0, 255, 0.356), white);
        .circle {
            background-color: rgba(212, 0, 255, 0.356);
        }
    }
    #frieza {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.412), white);
        .circle {
            background-color: rgba(0, 0, 0, 0.412);
        }
    }
    #ozaru {
        background: linear-gradient(to bottom, rgba(0, 94, 255, 0.35), white);
        .circle {
            background-color: rgba(0, 94, 255, 0.35);
        }
    }
    #broly {
        background: linear-gradient(to bottom, rgba(132, 255, 0, 0.405), white);
        .circle {
            background-color: rgba(132, 255, 0, 0.405);
        }
    }
    #fatbuu {
        background: linear-gradient(to bottom, rgba(212, 0, 255, 0.356), white);
        .circle {
            background-color: rgba(212, 0, 255, 0.356);
        }
    }

    .container-titulo {
        display: flex;
        justify-content: center;
        height: 25px !important;
        align-items: center;
        padding-top: 10px;
        h4 {
            margin-top: 40px;;
        }
    }

    .container-foto {
        height: 315px;
        width: 350px;
        img {
            height: 100%;
            object-fit: cover;
            transition: 0.4s;
            filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.418));
        }
        border-top-right-radius: 2em;
        border-top-left-radius: 2em;
    }

    img:hover {
        scale: 110%;
        transform: translateY(-15px);
        transition: .4s;
    }

    .container-btn {
        margin-top: 7px;
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


    @media (width < 400px) {

        h1 {
            font-size: large;
        }

        .container-card {
            width: 250px !important;
        }

        .container-foto {
            height: 315px;
            width: min-content;
            width: auto;
            img {
                width: 250px !important;
                object-fit: scale-down;
            }
        }

    }
</style>