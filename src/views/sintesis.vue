<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-down").mb-5 Al ser Colombia un país que busca aumentar la exportación de cacao al 2030 al exterior, se hace necesario que se incrementen los estándares de calidad en toda la trazabilidad del proceso desde el cultivo hasta que llega al cliente final, por tal razón, este contenido, es importante para que se conozca grosso modo qué hace un líder de panel, cómo se eligen los jueces, cuáles son sus funciones, cómo se realizan los registros, cómo se sacan los resultados y qué se hace con ellos, por lo que a continuación se deja un mapa conceptual con la información necesaria para sintetizar el tema.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
