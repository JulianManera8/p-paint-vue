<template>
    <footer class="footer">
        <div class="footer-content">
            <router-link id="a" to="/" style="text-decoration: none; color: black;">
                <div class="cont-logo-titulo"> 
                    <div class="imagen">
                        <img class="logo" src="../assets/imagenes/img-navbar/logo.png" width="170px">
                    </div>
                    <h3 class="titulo"> Print & Paint.</h3>
                </div>
            </router-link>

            <div class="container-navegacion">
                <h5>NAVEGACION</h5>
                <ul>
                    <li><router-link id="a" to="/">INICIO</router-link></li>
                    <li><router-link id="a" to="/figuras">FIGURAS</router-link></li>
                    <li><router-link id="a" to="/contacto">CONTACTO</router-link></li>
                    <li><router-link id="a" to="/blog">BLOG</router-link></li>
                </ul>
            </div>

            <div class="container-newsletter">
                <div class="newsletter">
                    <h5> NEWSLETTER</h5>
                    <input type="mail" placeholder="Correo Electronico" v-model="mail">
                    <button type="submit" id="btn" @click.prevent="guardarMail">Quiero novedades!</button>
                </div>
            </div>  
        </div>
    </footer>
</template>

<script setup>
    import {ref} from 'vue'
    var mail = ref('')


    const guardarMail = () => {
        var btn = document.getElementById('btn');
        btn.textContent = "GUARDADO!"

        setTimeout(() => {
            btn.textContent = "Quiero novedades!"

            mail.value = ''
        }, 3500);
        
    }

</script>

<style lang="scss" scoped>

    @import url('https://fonts.googleapis.com/css2?family=Madimi+One&family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&family=Nunito+Sans:opsz,wght@6..12,700&display=swap');
    
    footer {
        margin-bottom: 20px;
    }

    .footer-content {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        background-color: $fondo-navbar;
        width: 100%;
        min-width: 100%;
        height: 230px;
        box-sizing: border-box;
        padding: 30px;
        position: absolute;
        left: 0;
    }

    .cont-logo-titulo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        .logo{
            display: block;
            transition: 0.5s;
        }

        .logo:hover {
            scale: 110%;
            transition: 0.5s;
        }

        .titulo {
            margin: 0;
        }

        margin-bottom: 30px;
    }

    .container-navegacion {

        ul {
            display: flex;
            flex-direction: column;
            padding: 0;
        }

        li {
            list-style: none;
            display: flex;
            text-align: center;
            justify-content: center;
            margin-bottom: 7px;
        }

        a {
            font-size: 14px;
            font-weight: 500;
            margin: 0px 4px;
            font-family: "Noto Sans", sans-serif;
            text-decoration: none;
            color: $texto-navbar;
        }

        a:hover {
            color: $texto-navbar-hover;
        }

        h5 {
            margin-bottom: -10px;
            text-decoration: underline;

        }
    }


    .container-newsletter {
        display: flex;

        .newsletter {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 15px;
            margin: auto;

            h5 {
                margin-bottom: 0px;
                text-decoration: underline;
            }

            label {
                font-size: smaller;
            }

            input {
                background-color: $fondo-input-footer;
                height: 20px;
                border-radius: 0.8em;
                padding: 5px 8px;
                font-size: 15px;
            }

            button {
                background-color: $fondo-btn-footer;
                height: 30px;
                border-radius: 0.5em;
                padding: 5px 8px;
                font-size: 15px;
                cursor: pointer;
                transition: 0.5s;
                color: black
            };
        }
        
        margin-bottom: 30px;
    }

    @media (width < 750px) {

        .footer-content {
            flex-wrap: wrap;
            height: fit-content;
            gap: 5px;
        }
    }

</style>