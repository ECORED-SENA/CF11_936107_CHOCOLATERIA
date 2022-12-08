<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Efectos del proceso de fermentación, secado y tostión en los sabores del cacao

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')     
      .col-lg-7.my-3
        p(data-aos="fade-down") El #[b.bwn sabor propio del cacao y sus notas especiales se obtienen desde el proceso de cultivo], ya que influyen: #[b.bwn el clima, las propiedades del suelo, las propiedades del material fitogenético sembrado y los llamados clones]; posteriormente #[b.bwn estas características se afianzan o se destruyen con el proceso de post cosecha], ya sea realizado adecuadamente o no. 

        p(data-aos="fade-down") En la #[b.bwn postcosecha], específicamente #[b.bwn en la fermentación y secado, se producen los sabores y aromas característicos del cacao al desarrollarse precursores químicos en la torrefacción o tostado.]  

        p(data-aos="fade-down") #[b.bwn Pero, esto ocurre solo si se ha realizado una cosecha adecuada], es decir, si se cortaron o cosecharon mazorcas de cacao (así se llama al fruto del cacao, ya que es de forma alargada parecida a una mazorca y en su interior están dispuestos los granos o almendras) en #[b.bwn la etapa ideal de maduración, como se observa en la tabla], cuando las #[b.bwn mazorcas están:]

    .row.justify-content-center.align-items-center.mb-3           
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
          h5 Tabla 2.
          span Maduración de la mazorca del cacao
    .row.justify-content-center.align-items-center.mb-5          
      .col-lg-8
        .tabla-a.color-secundario
          table
            thead
              tr.text-center
                th Mazorcas verdes
                th Mazorcas maduras 
            tbody
              tr.bgt1
                td.px-5 Esto (en cuanto a estado de maduración) hace que los granos sean resistentes a los efectos de la fermentación, ya que no han desarrollado todas las propiedades del mucílago o recubrimiento de las almendras afectando el sabor totalmente.
                td.px-5 Si se cosecha una mazorca sobre madura los sabores de fermentación serán más fuertes cambiando las notas deseables. Generalmente estas proporcionan sabores de tipo avinagrado (ácido acético).  

    p(data-aos="fade-down").mb-5 Dando claridad al tema, #[b.bwn la fermentación ocurre gracias a los carbohidratos y azúcares] presentes en #[b.bwn el mucílago por acción del calor] durante todo este proceso se presenta dos tipos, los cuales se describen a continuación: 
    .bg10  
      .row.justify-content-center.align-items-center.bg11.p-5 
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
            h5 Figura 5.
            span Fermentación 
        img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/36.svg', alt='')       
        img.img-a.img-t.d-block.d-lg-none(data-aos="zoom-in")(src='@/assets/curso/temas/37.svg', alt='') 

    p(data-aos="fade-down").mt-5 Algunos estudios han reportado que en la fase de fermentación los cambios ocurren a gran velocidad, por lo general en 120 horas se observaron múltiples cambios fisicoquímicos en el grano a nivel tanto interno como externo.   

    p(data-aos="fade-down").mb-5 A continuación, se presentan algunos de los atributos químicos que ocurren en el proceso de fermentación y que inciden sobre el sabor definidos por Chang Vera y otros autores (2021):

    .bg6
      .row.justify-content-center.align-items-center          
        .col-lg-10.py-4
          SlyderA(tipo="b").bgw.p-4.brad
            .row.justify-content-center.align-items-center.mt-4
                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/38.png', alt='')              
                .col-lg-6.mb-4.mb-md-0
                  h4.mb-4 #[b.bwn Metilxantinas]
                  p Son alcaloides de los cuales se destaca la teobromina y la cafeína, que tiene efectos #[b estimulantes sobre el sistema nervioso central].  Según #[i Barišić] (2019) calcula que estos alcaloides están presentes en los granos sin grasa entre un 4 % y 0.2 % del peso seco respectivamente.  
            .row.justify-content-center.align-items-center.mt-4
                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='')              
                .col-lg-6.mb-4.mb-md-0
                  h4.mb-4 #[b.bwn 2-metilpropanal, 2-metilbutanal y 3 metilbutanal]
                  p Son aldehídos de los azúcares y son los encargados de desarrollar #[b el sabor y el aroma].  
            .row.justify-content-center.align-items-center.mt-4
                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='')              
                .col-lg-6.mb-4.mb-md-0
                  h4.mb-4 #[b.bwn Esteres, tales como]
                  p Acetato de etilo, acetato de isobutilo, acetato de isoamilo, acetato de feniletilico, isopentanoato de metilo e isovalérico de metilo.
                  p Están presentes en granos no fermentados y tostados, algunos surgen en la fermentación aeróbica y otros en la producción del licor de cacao. 
            .row.justify-content-center.align-items-center.mt-4
                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/41.png', alt='')              
                .col-lg-6.mb-4.mb-md-0
                  h4.mb-4 #[b.bwn 2-methylbutanal y 2-methypropanal]
                  p Son aldehídos y aportan el #[b aroma a frutos y flores].  
            .row.justify-content-center.align-items-center.mt-4
                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/42.png', alt='')              
                .col-lg-6.mb-4.mb-md-0
                  h4.mb-4 #[b.bwn Vitaminas, tales como:]
                  p Vitamina E, C, Beta carotenos y polifenoles
                  p Están presentes en el #[b fruto y en el licor de cacao], son de especial interés a nivel #[b nutricional y farmacéutico].  
            .row.justify-content-center.align-items-center.mt-4
                .col-lg-5
                  img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='')              
                .col-lg-6.mb-4.mb-md-0
                  h4.mb-4 #[b.bwn Ácidos orgánicos, como:]
                  p Ácido acético, ácido láctico y ácido cítrico.
                  p Estos ácidos orgánicos volátiles y no volátiles generan cambios en el grano seco fermentado #[b cambiando el valor de acidez]  de valores entre 6 -6.5 a Ph de 4.5 -5.5.

    .row.justify-content-center.align-items-start.mb-4.mt-5
      .col-lg-8.my-3
        p(data-aos="fade-down") El proceso de #[b.bwn fermentado dura aproximadamente 120 horas], dependiendo de la variedad de cacao (la diferencia es causada por cambios en los tamaños del grano en algunas variedades haciendo más demorados los procesos de postcosecha). 

        p(data-aos="fade-down") A continuación, se presentan otras fases que se deben dar en el proceso de producción del cacao y que de igual manera deben ser tenidas en cuenta para que la calidad del producto final tenga estándares altos, por lo anterior, se invita a ver el siguiente contenido:
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/44.png', alt='')

    .row.justify-content-center.align-items-start      
      .col-lg-10(data-aos="fade-right")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg12")
          .row.justify-content-center.align-items-start(titulo="Fase de secado")
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/46.png', alt='')
            .col-lg-7
              p Sigue la #[b etapa de secado], que se realiza por medio de la acción del sol o artificialmente mediante hornos; el objetivo es restarles humedad a los granos para evitar contaminación de hongos y otros microorganismos no benéficos, esta no debe superar el 7 %.  En esta fase ocurren igualmente cambios fisicoquímicos.    
          .row.justify-content-center.align-items-start(titulo="Fase de tostado")
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/47.png', alt='')
            .col-lg-7
              p En la #[b fase de tostado] se logran aromas correspondientes a los siguientes descriptores: #[b nuez, tostado, terrosos y verdes].  

              p Químicamente se da por la acción de la serina y treonina que al estar expuestas al calor del tostado conforman las pirazinas, que genera #[b olores, sabores y colores marrones tostados agradables].  
          .row.justify-content-center.align-items-start(titulo="Fase de postcosecha")
            .col-lg-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='')
            .col-lg-7
              p Al realizar un #[b inadecuado proceso de postcosecha] hace que no se desencadenen estas reacciones #[b físico-químicas] dando como #[b resultado granos sin notas de sabores y olores que le den un rango de distinción a la hora de analizar sensorialmente o de degustar como consumidor final].                                                                
</template>

<script>
export default {
  name: 'Tema2',
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
