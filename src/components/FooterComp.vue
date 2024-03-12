<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="cont-logo-titulo"> 
                <div class="imagen">
                    <img class="logo" src="../assets/imagenes/img-navbar/logo.png" width="190px">
                </div>
                <h3 class="titulo"> Print & Paint.</h3>

            </div>

            <div class="container-navegacion">
                <h4>NAVEGACION</h4>
                <ul>
                    <li><a href="ruta">INICIO</a></li>
                    <li><a href="ruta">FIGURAS</a></li>
                    <li><a href="ruta">SOBRE MI</a></li>
                    <li><a href="ruta">CONTACTO</a></li>
                </ul>
            </div>

            <div class="container-newsletter">
                <div class="newsletter">
                    <h4> NEWSLETTER</h4>
                    <input type="email" placeholder="Correo Electronico">
                    <button type="submit">Quiero novedades!</button>
                </div>
            </div>

            
        </div>
    </footer>
</template>

<script setup>


</script>

<style lang="scss" scoped>

    @import url('https://fonts.googleapis.com/css2?family=Madimi+One&family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&family=Nunito+Sans:opsz,wght@6..12,700&display=swap');
    
    .footer-content {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        background-color: $fondo-navbar;
        width: 100%;
        min-width: 100%;
        height: 250px;
        box-sizing: border-box;
        padding: 20px;
        position: absolute;
        left: 0;
    }

    .cont-logo-titulo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 33%;

        .logo{
            display: block;
            transition: 0.5s;
        }

        .logo:hover {
            scale: 115%;
            transition: 0.5s;
        }

        .titulo {
            margin: 0;
        }
    }

    .container-navegacion {
        width: 33%;

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
            font-size: 18px;
            font-weight: 500;
            margin: 0px 4px;
            font-family: "Noto Sans", sans-serif;
            text-decoration: none;
            color: $texto-navbar;
        }

        a:hover {
            color: $texto-navbar-hover;
        }

        h4 {
            margin-bottom: -10px;
            text-decoration: underline;

        }
    }


    .container-newsletter {
        display: flex;
        width: 33%;
        margin: auto;

        .newsletter {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 15px;
            margin: auto;

            h4 {
                margin-bottom: 10px;
                text-decoration: underline;
            }

            label {
                font-size: smaller;
            }

            input {
                background-color: $fondo-input-footer;
                height: 40px;
                border-radius: 0.8em;
                padding: 5px 8px;
            }

            button {
                background-color: $fondo-btn-footer;
                height: 40px;
                border-radius: 0.5em;
                padding: 5px 8px;
                cursor: pointer;
                transition: 0.5s;
            }
            button:hover {
                background-color: $fondo-navbar;
                transition: 0.5s;
            }
        }
    }

    @media (width < 581px) {

        
    }

</style>