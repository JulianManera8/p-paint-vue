<template>
    <section class="container-hero" style="margin-top: 40px;">   

        <div class="container-titulo hola">
            <h1> <span class="print">Print</span> <span class="and">&</span> Paint</h1>
        </div>  

        <div class="container-img hola">
            <img class="imagen" src="../assets/imagenes/img-navbar/todos-SF.png" alt="">
        </div>

    </section>

</template>

<script setup>

</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    .container-hero {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: linear-gradient(to bottom, $fondo-navbar, rgba(255, 179, 0, 0));

        h1 {
            font-size: clamp(7vw,8vw,9vw);
            color: orange; 
            font-family: "Montserrat", sans-serif;
        }

        .and {
            color: rgba(255, 166, 0, 0.541); 

            font-size: clamp(5vw,6vw,7vw);
            font-family: "Montserrat", sans-serif;
        }

        .print {
            font-size: clamp(7vw,8vw,9vw);
            color: rgb(255, 248, 235); 
            font-family: "Montserrat", sans-serif;
        }

    }

    .container-titulo {
        position: relative;
        width: min-content;
    }

    .container-img {
        img {
            width: 65vw;
            margin-top: 10%;
            margin-left: 5%;
        }
    }
    
</style>