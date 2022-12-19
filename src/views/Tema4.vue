<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Resultados, interpretación y gráficas radial (de araña)
    .bg15
      p(data-aos="fade-down").mb-5.text-center.pt-5 Un elemento importante en el proceso es sacar resultados e interpretarlos, por lo que se invita a ver el siguiente video: 
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12(data-aos="fade-left")     
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/TY6sxaVz7MI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    p(data-aos="fade-down") Para afianzar el conocimiento son importantes las siguientes precisiones: 

    p(data-aos="fade-down") En esta figura se evidencia que #[b.bwn es un licor con un atributo marcado en aroma frutal y floral, que no presenta defectos relevantes y con atributos bajos para:  acidez, amargor y astringencia.] 
    .bg16
      p(data-aos="fade-down").mb-5 También se puede observar que la #[b.bwn calidad de la muestra es de carácter superior.]  
      img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/63.svg', alt='')
      p(data-aos="fade-down") En esta otra figura se hace una comparación, con el fin de demostrar la utilidad del tipo de gráfico radial o tela de araña para estos fines; entre la muestra anterior y una nueva.

      p(data-aos="fade-down").mb-5 Donde la última muestra atributos de menor calidad, con preponderancia astringente (recuerde que es el sabor y la sensación de resequedad en la boca) de igual forma se evidencian notas frutales y florales en menor intensidad que la primera muestra.       
      img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/64.svg', alt='')  
      p(data-aos="fade-down").mb-5 Como conclusión se puede observar que el estado colombiano ha fortalecido el cultivo y producción de cacao con estándares de calidad internacional, por lo cual se invita a revisar el siguiente video:
      .row.justify-content-center.align-items-center         
        .col-lg-10(data-aos="flip-down")
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/57.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4 Producción de cacao en Colombia
                    p.mb-0 Ministerio de Agricultura y Desarrollo Rural
                    p.mb-0 Agricultura al día- Cata de cacao
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=7Lr7VEQ3QPM" target="_blank")
                      span Ver video
                      i.fas.fa-play-circle                              
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
