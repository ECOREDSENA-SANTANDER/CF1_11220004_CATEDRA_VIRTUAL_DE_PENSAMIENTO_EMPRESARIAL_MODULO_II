<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 Estimado aprendiz bienvenido al componente formativo “Gestión Estratégica de Proyectos: de la planeación a la competitividad”. Para comenzar, le invitamos a consultar el siguiente video con el fin de conocer más información sobre las temáticas que se abordarán en este recurso educativo: 
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12.col-12.col-md-12
        figure(data-aos="fade-right").py-2
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2l8-PFOrAFY?si=kt1M8v60mXNGhPUV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Nota. Adaptado de Escalado de falda.


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
