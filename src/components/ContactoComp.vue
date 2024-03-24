<template>
    
    <h1 id="contacto">CONTACTO</h1>

    <div class="container-contacto">
        <div class="container-email">
            <h4>Email</h4>
            <div class="container-icon">
                <a href="mailto:julianmanera@hotmail.com?subject=Consulta%20sobre%20una%20figura&body=Hola%20,%20me%20gustaría%20saber%20más%20sobre...">
                    <v-icon name="ri-mail-send-line" scale="3"/>
                </a>
            </div>
        </div>

        <div class="container-wsp">
            <h4>WhatsApp</h4>
            <div class="container-icon">
                <a href="https://wa.me/543413076880"  target="_blank" >
                    <v-icon name="bi-whatsapp" width="70px" scale="3" class="icono-wsp" @click="enviarWsp" />
                </a>
            </div>
        </div>

        <div class="container-ig">
            <h4>Instagram</h4>
            <div class="container-icon">
                <a href="https://instagram.com/juli.manera">
                    <v-icon name="bi-instagram" scale="3"/>
                </a>
            </div>
        </div>

    </div>
    
    <div class="wsp-container" v-show="mostrar"> 
        <div class="wsp-fondo">
            <div class="wsp-content"> 
                <a href="https://wa.me/543413076880"  @click="enviarWsp" class="wsp" target="_blank" >
                    <v-icon name="bi-whatsapp" scale="3"/>
                </a>
            </div>  
        </div>    
    </div>
</template>

<script setup>
    
    const enviarWsp = () => {

        var numerowsp = 543413076880
        var mensaje = `Hola, quisiera información y cotizacion de la figura: `;
        var whatsappLink = 'whatsapp://send?phone=' + numerowsp + '&text=' + encodeURIComponent(mensaje);
        window.location.href = whatsappLink;

        return;
    }  

    const mostrar = true;




</script>



<style lang="scss" scoped>

    @import url('https://fonts.googleapis.com/css2?family=Madimi+One&family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&family=Nunito+Sans:opsz,wght@6..12,700&display=swap');
    
    h1 {
        text-align: center;
        font-family: "Noto Sans", sans-serif;
        // font-size: clamp(4vw, 4vw, 20px);
    }
    .container-contacto {
        margin: 0px 100px 200px 100px;
        display: flex;
        justify-content: center !important;
        flex-wrap: wrap;
        text-align: center;
        gap: 30px;
    }

    .container-email, .container-wsp, .container-ig {
        margin: 0 30px;
        width: 200px;
    }

    .container-icon {
        background-color: $fondo-navbar;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.791);
        border-radius: 50%;
        width: 100px;
        height: 100px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: auto;
        transition: 0.3s;

        a {
            text-decoration: none;
            color: white;
            transition: all 0.3s;
        }
    }

    .container-icon:hover {
        background-color: rgba(255, 238, 207, 0.65);
        box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.791);
        cursor: pointer;
        a {
            color: rgb(255, 140, 0);
            transition: all 0.3s;
        }
        transition: all 0.3s;
    }

    .wsp {
        position: fixed;
        bottom: 20px;
        right: 25px;
        z-index: 0.6;
        border-radius: 50%;
        opacity: 0.7;
        color: green;
    }
    .wsp:hover {
        scale: 120%;
        opacity: 1;
        transition: 0.3s;
    }
    .wsp:not(:hover) {
        transition: 0.5s;
    }
</style>