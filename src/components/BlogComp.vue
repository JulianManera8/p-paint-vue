<template>
    <section style="margin-top:100px; margin-bottom: 200px;">

        <h1 >ARTICULOS DE INTERES</h1>

        <div v-for="blog in blogs" :key="blog.id">

            <article class="container-card">

                <div class="container-img">
                    <img :src="blog.url" width="200px" class="img"/>
                </div>
                
                <div class="container-texto" @click="verId(blog.id)">
                    

                        <div class="cont-front" :id="blog.id">
                            <h3>{{ blog.titulo }}</h3>
                            <p> {{ blog.desc }}</p>

                            <div class="container-btn">
                              <button class="cta">
                                <span class="hover-underline-animation"> Leer más </span>
                                <svg
                                  id="arrow-horizontal"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="10"
                                  viewBox="0 0 46 16"
                                >
                                  <path
                                    id="Path_10"
                                    data-name="Path 10"
                                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                    transform="translate(30)"
                                  ></path>
                                </svg>
                              </button>
                            </div>

                        </div>

                    

                        <div class="cont-back" :id="blog.id+10">
                            <p> {{ blog.decpBack }}</p>
                            <div class="container-btn">
                                <button class="volver">
                                    <svg
                                      id="arrow-horizontal"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="30"
                                      height="10"
                                      viewBox="0 0 46 16"
                                      style="transform: scaleX(-1);"
                                    >
                                      <path
                                        id="Path_10"
                                        data-name="Path 10"
                                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                        transform="translate(30)"
                                      ></path>
                                    </svg>
                                <span class="hover-underline-animation-volver"> Volver </span>
                                </button>
                            </div>
                        </div>

                    

                </div>

            </article>
        </div>
    </section>
</template>

<script setup>

  import InfoBlogEs from '../assets/JSON/InfoBlogEs.json';
  import {ref} from 'vue';
  
  const blogs = [
    {id: 1, url: require('@/assets/imagenes/img-navbar/tecnica.png'), titulo: InfoBlogEs.tecnicas.titulo, desc: InfoBlogEs.tecnicas.descripcionFront, decpBack: InfoBlogEs.tecnicas.descripcionBack},
    {id: 2, url: require('@/assets/imagenes/img-navbar/pinceles.png'),titulo: InfoBlogEs.materiales.titulo, desc: InfoBlogEs.materiales.descripcionFront, decpBack: InfoBlogEs.materiales.descripcionBack},
    {id: 3, url: require('@/assets/imagenes/img-navbar/dragonball.png'),titulo: InfoBlogEs.dragonball.titulo, desc: InfoBlogEs.dragonball.descripcionFront, decpBack: InfoBlogEs.dragonball.descripcionBack},
    {id: 4, url: require('@/assets/imagenes/img-navbar/akira.png'),titulo: InfoBlogEs.ripAkira.titulo, desc: InfoBlogEs.ripAkira.descripcionFront, decpBack: InfoBlogEs.ripAkira.descripcionBack}
  ]

  var mostrarFront = ref(true)

  const verId = (id) => {

    mostrarFront.value = !mostrarFront.value

    const id10 = id+10
    const blogFront = document.getElementById(id);
    const blogBack = document.getElementById(id10);
    

    if(!mostrarFront.value) {
        blogFront.style.opacity = '0'
        blogFront.style.transition = 'opacity 0.3s ease-in'

        setTimeout(() => {
            blogFront.style.display = 'none';
            blogBack.style.display= 'flex';
        }, 500);

        setTimeout(() => {
            blogBack.style.opacity = '1'
            blogBack.style.transition = 'all 0.3s'
        }, 1000);


    } else if (mostrarFront.value) {

        blogBack.style.opacity = '0'
        blogBack.style.transition = 'opacity 0.3s ease-in'

        setTimeout(() => {
            blogBack.style.display = 'none';
            blogFront.style.display= 'block';
        }, 500);

        setTimeout(() => {
            blogFront.style.opacity = '1'
            blogFront.style.transition = 'all 0.2s'
        }, 1000);
    }

  }


</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Madimi+One&family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&family=Nunito+Sans:opsz,wght@6..12,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
  
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    text-align: center;
  }   

  h1 {
    font-family: "Noto Sans", sans-serif;
  }

  .container-card {
    width: 600px;
    height: 265px;
    display: flex;
    flex-direction: row;
    border-radius: 1.5em;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.739);
    transition: 0.2s ease-out;

    
  }

  .container-card:hover {
    box-shadow: 0px 0px 12px rgb(0, 0, 0);
    transition: 0.2s ease-out;
    cursor: pointer;

    .cta {
        .hover-underline-animation:after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }

    .cta svg {
        transform: translateX(0);
    }

    .volver {
        .hover-underline-animation-volver:after {
            transform: scaleX(1);
            transform-origin: bottom right;
        }
    }

    .volver svg {
        transform: translateX(0);
    }

        
  }

  button .volver {
   color: red;
  }

  .img {
    display: block;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 1.5em;
    border-bottom-left-radius: 1.5em;
  }

  .container-texto {
    font-family: 'Roboto', sans-serif;
    margin-left: 30px;
    margin-right: 20px;
    text-align: left;
    height: 250px;
    position: relative;
    width: 100%;

    h3 {
        margin-top: 40px;
        margin-bottom: 30px;
    }

    p {
        color: grey;
        font-size: 15px;
        margin-bottom: 30px;
        line-height: 22px;
    }

    .container-btn {
        text-align: center;
        position: absolute;
        bottom: 0px !important;
        width: 100%;
    }
        
  }

  .cont-back {
    display: none;
    opacity: 0;
  }

  @media (width < 650px) {
    .container-card {
        width: 60vw;
        height: auto;
        display: flex;
        flex-direction: column;
        border-radius: 1.5em;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.739);
        transition: 0.2s ease-out;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .img {
        display: block;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 1.5em;
        border-top-right-radius: 1.5em;
        border-bottom-left-radius: 0;
        width: 100%;
    }

    .container-texto {
        text-align: center;
        height: auto;
        margin: 0 auto;
        h3 {
            margin-top: 40px;
            margin-bottom: 30px;
        }

        p {
            color: grey;
            font-size: 15px;
            margin-bottom: 80px;
            margin-left: 15px;
            margin-right: 15px;
            line-height: 22px;
        }

        .container-btn {
            text-align: center;
            position: absolute;
            bottom: 15px !important;
            width: 100%;
        }
    }
  }
  


//parte del boton de leer mas
    .cta, .volver {
        border: none;
        background: none;
        cursor: pointer;
    }

    .cta span, .volver span {
        padding-bottom: 7px;
        letter-spacing: 4px;
        font-size: 14px;
        padding-right: 15px;
    }

    .volver span {
        padding-right: 0;
        padding-left: 15px;
    }

    .cta svg {
        transform: translateX(-8px);
        transition: all 0.3s ease;
    }

    .volver svg {
        transform: translateX(8px);
        transition: all 0.3s ease;
    }

    .cta:hover svg {
        transform: translateX(0);
    }

    .volver:hover svg {
        transform: translateX(0);
    }

    .hover-underline-animation {
        position: relative;
        color: black;
        padding-bottom: 20px;
    }

    .hover-underline-animation-volver {
        position: relative;
        color: black;
        padding-bottom: 20px;
    }

    .hover-underline-animation:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000000;
        transform-origin: bottom left;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation-volver::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000000;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .cta:hover .hover-underline-animation:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    .volver:hover .hover-underline-animation-volver:after {
        transform: scaleX(1);
        transform-origin: bottom right;
    }

    .volver:hover .hover-underline-animation-volver:after {
        transform: scaleX(1);
        transform-origin: bottom right;
    }

</style>