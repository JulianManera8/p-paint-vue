<template>
    <section id="navbar">

        <div class="container-logo">
            <a href="#top-page">
                <img class="logo" src="../assets/imagenes/img-navbar/logo.png" width="75px">
            </a>
        </div>

        <div class="container-navegacion">
            <a href="aca va la ruta">INICIO</a> 
            <a href="aca va la ruta">FIGURAS</a> 
            <a href="aca va la ruta">SOBRE MI</a> 
            <a href="aca va la ruta">CONTACTO</a> 
        </div>

        <div class="container-nav-resp">
            <v-icon class="nav-resp-icono" @click="desplegarMenu" name="gi-hamburger-menu" scale="2" cursor="pointer"/>
            <transition name="navResp">
                <div v-if="menuVisible" class="nav-resp-lista" id="nav-resp-lista">
                    <ul>
                        <li><a href="ruta">INICIO</a></li>
                        <li><a href="ruta">FIGURAS</a></li>
                        <li><a href="ruta">SOBRE MI</a></li>
                        <li><a href="ruta">CONTACTO</a></li>
                    </ul>
                </div>
            </transition>
        </div>

        <div class="container-lenguaje">
            <div>
                <img class="flag" src="../assets/imagenes/img-navbar/es.svg" alt="" width="25px">
            </div>
            <div>
                <img class="flag" src="../assets/imagenes/img-navbar/gb.svg" alt="" width="25px">
            </div>
        </div>

    </section>
</template>

<script setup>
    import {ref} from 'vue'
    var menuVisible = ref(false);

    const desplegarMenu = () => {
        menuVisible.value = !menuVisible.value;
    }


</script>

<style lang="scss" scoped>

    @import url('https://fonts.googleapis.com/css2?family=Madimi+One&family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&family=Nunito+Sans:opsz,wght@6..12,700&display=swap');

    #navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        background-color: $fondo-navbar;
        width: 100%;
        height: 75px;
        .logo {
            display: block;
            margin: 0px 0px 0px 5px;
        }
    }


    .container-navegacion {
        display: flex;
        gap: 20px;

        a {
            font-size: 16px;
            font-weight: 500;
            margin: 0px 4px;
            font-family: "Noto Sans", sans-serif;
            text-decoration: none;
            color: $texto-navbar;
        }

        a:hover {
            color: $texto-navbar-hover;
        }
    }
    
    .container-lenguaje {
        display: flex;
        gap: 10px;
        margin-right: 15px;
        width: 60px;
        align-items: center;

        .flag {
            display: block;
            cursor: pointer;
        }
    }
    
    .container-nav-resp {
        display: none;
    }

    .navResp-enter-from {
        position: absolute;
    }

    .navResp-enter-active, .navResp-leave-active {
        transition: all 0.5s ease;
    }

    .navResp-enter-from, .navResp-leave-to {
        opacity: 0;
    }

    @media (width < 581px) {

        .container-navegacion {
            display: none;
        }

        .container-nav-resp {
            display: flex;
        }

        .nav-resp-lista {
            display: flex;
            position: absolute;
            text-align: center;
            justify-content: center;
            left: 0;
            top: 73px;
            background-color: $fondo-navbar;
            width: 100%;
            z-index: 1;
            
            ul {
                padding: 0px !important;
            }
        
            li {
                list-style: none;
                margin-bottom: 15px;

                a {
                    text-decoration: none;
                    color: $texto-navbar;
                    font-weight: 500;
                }
            }
        }
        
    }

</style>
