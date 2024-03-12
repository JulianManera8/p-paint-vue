<template>
    <section id="footer">
        <div> Logo </div>

        <div class="container-navegacion">
            <a href="aca va la ruta">INICIO</a> 
            <a href="aca va la ruta">FIGURAS</a> 
            <a href="aca va la ruta">SOBRE MI</a> 
            <a href="aca va la ruta">CONTACTO</a> 
        </div>

        <div> Derecho reservados, pag creada por mi, etc...</div>
    </section>
</template>

<script setup>


</script>

<style lang="scss" scoped>

    @import url('https://fonts.googleapis.com/css2?family=Madimi+One&family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&family=Nunito+Sans:opsz,wght@6..12,700&display=swap');


    #footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: relative;
        background-color: $fondo-navbar;
        width: 100%;
        height: 120px;
        box-sizing: border-box;
        .logo {
            display: block;
            margin: 0px 0px 0px 5px;
        }
    }



    @media (width < 581px) {

        
    }

</style>