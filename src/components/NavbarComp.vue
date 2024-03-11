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

        <div class="container-nav-resp esconder">
            <v-icon class="nav-resp-icono" name="gi-hamburger-menu" scale="2"/>

            <div class="nav-resp-lista">
                <ul>
                    <li class="nav-resp-item"> <a href="aca va la ruta">INICIO</a> </li>
                    <li class="nav-resp-item"> <a href="aca va la ruta">FIGURAS</a> </li>
                    <li class="nav-resp-item"> <a href="aca va la ruta">SOBRE MI</a> </li>
                    <li class="nav-resp-item"> <a href="aca va la ruta">CONTACTO</a> </li>
                </ul>
            </div>

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

    .nav-resp-lista {
        display: none;
    }

    @media (width < 581px) {
        .container-navegacion {
            display: none;
        }

        .container-nav-resp {
            display: flex;
        }

        
        
    }

</style>
