<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-left") A continuación, se presenta una síntesis de las temáticas abordadas en el componente formativo, que profundiza en la formulación y estructuración de proyectos alineados con la planeación estratégica de la empresa. Abarca también la identificación y planteamiento del problema del proyecto, la evaluación de la competencia y la estructuración del proyecto para asegurar su alcance y efectividad. El componente enfatiza en la importancia de la competitividad y las barreras de entrada y salida para tomar decisiones informadas y garantizar la sostenibilidad y éxito empresarial. 

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La figura presenta la síntesis del componente formativo y las temáticas abordadas, desde la conceptualización del proyecto, la empresa, incluyendo conocimientos asociados a competencia y competitividad, hasta la estructura del proyecto en la empresa.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
