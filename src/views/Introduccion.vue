<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-start.mb-4
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')                  
      .col-lg-8.my-3
        p(data-aos="fade-down") El análisis de calidad del producto es muy importante para una empresa que produce cacao, ya que de ello depende su posicionamiento en el mercado nacional e internacional, por lo que es indispensable, mantener un sistema continuo de gestión de calidad según la normatividad vigente.

        p(data-aos="fade-down") Por todo lo anterior, se invita a ver el siguiente contenido: ejecución y evaluación de pruebas sensoriales para el cacao; que habla sobre las condiciones en que se deben realizar y los niveles solicitados según las métricas estandarizadas.             
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/6Hd8IfEfD_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
