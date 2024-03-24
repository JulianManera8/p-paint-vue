<template>
    <section id="navbar">
        <div class="container-logo">
            <router-link to="/">
                <img class="logo" src="../assets/imagenes/img-navbar/logo.png" width="75px">
            </router-link>
        </div>

        <div class="container-navegacion">
            <router-link id="a" to="/">INICIO</router-link> 
            <router-link id="a" to="/figuras">FIGURAS</router-link> 
            <router-link id="a" to="/contacto">CONTACTO</router-link> 
            <router-link id="a" to="/blog">BLOG</router-link> 
        </div>

        <div class="container-nav-resp">
            <v-icon class="nav-resp-icono" @click="desplegarMenu" name="gi-hamburger-menu" scale="2" cursor="pointer"/>
            <transition name="navResp">
                <div v-if="menuVisible" class="nav-resp-lista" id="nav-resp-lista">
                    <ul>
                        <li><router-link @click="desplegarMenu" id="a" to="/">INICIO</router-link> </li>
                        <li><router-link @click="desplegarMenu" id="a" to="/figuras">FIGURAS</router-link></li>
                        <li><router-link @click="desplegarMenu" id="a" to="/contacto">CONTACTO</router-link></li>
                        <li><router-link @click="desplegarMenu" id="a" to="/blog">BLOG</router-link></li>
                    </ul>
                </div>
            </transition>
        </div>

        <div class="container-lenguaje">
            <router-link id="a" to="/figuras">
                <v-icon @click="lupaTocada = !lupaTocada" name="io-search-sharp" scale="1.5" animation="pulse"  title="Buscar" color="black" speed="slow"/>

                <transition name="inputBuscar"> 
                    <input v-if="lupaTocada" type="text" placeholder="Buscar Figura" class="inputBuscar" v-model="valorBusqueda" @keyup="handleSerch">
                </transition>
            </router-link>
        </div>

    </section>
    
</template>

<script setup>
    import {ref} from 'vue'
    var menuVisible = ref(false);

    const desplegarMenu = () => {
        menuVisible.value = !menuVisible.value;
    }

    //todo lo del search bar
    var lupaTocada = ref(true);

    var valorBusqueda = ref('');

    const handleSerch = () => {
        console.log(valorBusqueda.value)
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
        height: $altura-navbar;

        .logo {
            display: block;
            margin: 0px 0px 0px 5px;
        }

        z-index: 1000;
    }


    .container-navegacion {
        display: flex;
        gap: 20px;

        #a {
            font-size: 16px;
            font-weight: 500;
            margin: 0px 4px;
            font-family: "Noto Sans", sans-serif;
            text-decoration: none;
            color: $texto-navbar;
        }

        #a:hover {
            color: $texto-navbar-hover;
        }
    }
    
    .container-lenguaje {
        display: flex;  
        width: 60px;
        align-items: center;
    }
    
    .container-nav-resp {
        display: none;
    }

    .navResp-enter-from {
        position: absolute;
    }

    .navResp-enter-active, .navResp-leave-active {
        transition: all 0.3s ease;
    }

    .navResp-enter-from, .navResp-leave-to {
        opacity: 0;
    }

    .inputBuscar {
        position: absolute;
        right: 0;
        top: 74.5px;
        padding: 4px;
        border: 4px solid $fondo-navbar;
        border-bottom-left-radius: 0.5em;
    }

    .inputBuscar-enter-from {
        position: absolute;
    }

    .inputBuscar-enter-active, .inputBuscar-leave-active {
        transition: all 0.3s ease;
    }

    .inputBuscar-enter-from, .inputBuscar-leave-to {
        transform: translateX(300px);
    }

    

    @media (width < 581px) {

        #navbar {
            margin-bottom: 30px;
        }

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

                #a {
                    text-decoration: none;
                    color: $texto-navbar;
                    font-weight: 500;
                }
            }
        }
        
    }

</style>
