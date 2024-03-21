<template>
    <div id="todo">
        <section class="container-hero" style="margin-top: 40px">   

            <div class="container-titulo hola">
                <h1> <span class="print">Print</span> <span class="and">&</span> Paint</h1>
            </div>  

            <div class="container-img hola">
                <img class="imagen" src="../assets/imagenes/img-navbar/todos-SF.png" alt="">
            </div>

        </section>
    </div>


</template>

<script setup>

</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    #todo {
        width: 100%;
        position: relative;
    }

    .container-hero {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to bottom, $fondo-navbar, rgba(255, 179, 0, 0));
        width: 100%;

        padding-top: 3%;
        @media (width > 1200px) {
            padding-top: 1%;;
        } 
        @media (width < 950px) {
            padding-top: 2%;;
        }
        @media (width < 750px) {
            padding-top: 5%;;
        }
        @media (width < 550px) {
            padding-top: 5%;
        }
        @media (width < 380px) {
            padding-top: 12%;;
        }

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
            width: 60vw;
            margin-left: 5%;
        }
    }

    @media (width < 555.56px) {
        .container-hero {
            display: flex;
            flex-direction: column !important;

            background: linear-gradient(to bottom, $fondo-navbar, rgba(255, 179, 0, 0));
            width: 100%;

            @media (width < 550px) {
                padding-top: 7%;;
            }

        }

        .container-titulo {
            display: flex;
            text-align: center;
            justify-content: center;
            width: 100%;
            
        }
        h1, span {
            font-size: 10vw !important;
            color: white !important;
        }
        .container-img {
            img {
                width: 100vw;
                margin: -40px !important;
            }   
        }

    }
    
</style>