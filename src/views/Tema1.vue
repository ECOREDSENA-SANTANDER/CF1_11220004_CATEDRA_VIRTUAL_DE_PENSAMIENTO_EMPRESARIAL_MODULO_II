<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptualización del proyecto 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-9.col-9.mb-4
        img.img-a.img-t(src='@/assets/curso/tema1/img1.png', alt='tema1')
      .col-lg-8.col-md-12.col-12.mb-4
        p.mb-4 Cuando se busca resolver un problema, satisfacer una necesidad o suplir la carencia de un bien o servicio, surge la posibilidad de crear una empresa o negocio. Esta iniciativa tiene como propósito no solo atender la situación identificada, sino también obtener un ingreso como compensación por la prestación del servicio o la elaboración del producto. A partir de este requerimiento, se establece la necesidad de estructurar la idea concebida a través de la formulación de un proyecto productivo. 
        p.mb-3 Según CINA RESEARCH (2018), “Un proyecto ha sido creado para satisfacer una necesidad y su desarrollo implica una ejecución adecuada. El intentar establecer el éxito desde la satisfacción de la necesidad o la ejecución del mismo es el punto de partida…” 
        p.mb-3 Respecto de la conceptualización de un proyecto productivo SERCA Corporativo (2013) lo define de la siguiente manera:
        .cajon.color-primario.bg.p-4
          p.mb-0 “Un proyecto se puede crear en base a una necesidad que se quiere cubrir o en alguna idea específica. Para que se considere productivo, debe cubrir esta necesidad o idea de la mejor manera y obtener resultados medibles y que tengan un impacto positivo. Un proyecto es una planificación de actividades interrelacionadas entre sí que tienen un fin en común. Algunos aspectos importantes que se deben considerar en un proyecto son: el presupuesto que se requiere para llevarlo a cabo y el lapso en que se va a desarrollar, entre algunos otros. Los objetivos de los proyectos productivos son el de buscar rentabilidad económica y obtener ganancias”.  
    
    p.mb-4 Con base en estas definiciones, se puede concluir que los proyectos productivos buscan no solo satisfacer necesidades, sino también obtener resultados medibles que generen un impacto positivo en el entorno. Por lo tanto, es fundamental tener en cuenta los siguientes elementos: 

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10.mb-3
        .row.justify-content-center(data-aos="fade-down")
          .col-md-6.col-lg.col-6.mb-3
            .tarjeta-avatar
              img.img-a.img-t(src='@/assets/curso/tema1/img2.svg' alt='')
              .tarjeta.bg1
                .p-4
                  h3.text-center.text-white.my-2.mb-0 1. Claridad sobre el proyecto que se desea desarrollar. 
              
          .col-md-6.col-lg.col-6.mb-3
            .tarjeta-avatar
              img.img-a.img-t(src='@/assets/curso/tema1/img3.svg' alt='')
              .tarjeta.bg1
                .p-4
                  h3.text-center.text-white.my-2.mb-0 2. Definición conceptual y sistemática de las metas y objetivos a alcanzar. 
              
          .col-md-6.col-lg.mb-3
            .tarjeta-avatar
              img.img-a.img-t(src='@/assets/curso/tema1/img4.svg' alt='')
              .tarjeta.bg1
                .p-4
                  h3.text-center.text-white.my-2.mb-3 3. Adecuada estructuración del planteamiento del problema, que constituye el punto de partida del proyecto. 
                  
    separador
    #t_1_1.titulo-segundo.color-primario
      h2 1.1 Identificación y planteamiento del problema 
    
    p.mb-4 El proceso de identificar y plantear el problema de un proyecto es un paso crítico en la formulación de cualquier iniciativa, especialmente en los proyectos productivos. Este proceso comienza con una idea general que se va afinando y detallando hasta convertirse en una idea particular y bien estructurada. La descripción del problema debe abordar con precisión la condición actual de la situación detectada y proyectar lo que se espera lograr como solución en el futuro.  
    p.mb-4 El planteamiento del problema implica la capacidad de delimitar el objeto de estudio o intervención de manera clara y fundamentada. Para lograr esto, se debe recurrir a diversas herramientas como la investigación documental, las encuestas, entrevistas y estudios de mercado. El emprendedor o gestor del proyecto debe realizar una descripción escrita precisa y contundente, que permita a todos los involucrados comprender la situación que se quiere abordar. 
    p.mb-4 El éxito en la definición del problema radica en la capacidad del proyectista para responder a una serie de preguntas clave, que facilitan la comprensión de la situación y orientan las acciones a seguir: 

    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img6.svg', alt='')

      .tarjeta.color-acento-contenido.p-3(x="15%" y="20%" numero="1")
        .h5.mb-2 ¿Qué se quiere hacer?: 
        p Define la acción o intervención específica que se propone. 

      .tarjeta.color-acento-contenido.p-3(x="5%" y="50%" numero="2")
        .h5.mb-2 ¿Por qué se quiere hacer?: 
        p Explica las razones y justificaciones que motivan el proyecto. 

      .tarjeta.color-acento-contenido.p-3(x="15%" y="70%" numero="3")
        .h5.mb-2 ¿Para qué se quiere hacer?: 
        p Clarifica los objetivos finales o metas que se buscan alcanzar. 
      
      .tarjeta.color-acento-contenido.p-3(x="30%" y="30%" numero="4")
        .h5.mb-2 ¿Cuánto se quiere hacer?: 
        p Determina la magnitud o alcance del proyecto.
      
      .tarjeta.color-acento-contenido.p-3(x="30%" y="60%" numero="5")
        .h5.mb-2 ¿Dónde se quiere hacer?:  
        p Establece el lugar o contexto geográfico donde se llevará a cabo el proyecto. 
        
      .tarjeta.color-acento-contenido.p-3(x="50%" y="15%" numero="6")
        .h5.mb-2 ¿Cómo se quiere hacer? :
        p Expone el enfoque metodológico o las estrategias que se emplearán para lograr los objetivos. 
        
      .tarjeta.color-acento-contenido.p-3(x="68%" y="30%" numero="7")
        .h5.mb-2 ¿Cuándo se va a hacer?: 
        p Fija el cronograma o tiempo estimado para la implementación del proyecto. 
      
      .tarjeta.color-acento-contenido.p-3(x="68%" y="60%" numero="8")
        .h5.mb-2 ¿A quiénes va dirigido?: 
        p Identifica el público objetivo o beneficiarios directos del proyecto. 
        
      .tarjeta.color-acento-contenido.p-3(x="82%" y="20%" numero="9")
        .h5.mb-2 ¿Quiénes lo van a hacer?: 
        p Determina los actores involucrados y sus roles. 
      
      .tarjeta.color-acento-contenido.p-3(x="82%" y="70%" numero="10")
        .h5.mb-2 ¿Con qué se va a hacer?: 
        p Establece los recursos materiales, humanos y financieros necesarios para la ejecución del proyecto. 
        
      .tarjeta.color-acento-contenido.p-3(x="95%" y="50%" numero="11")
        .h5.mb-2 ¿Con qué se va a costear?: 
        p Delimita las fuentes de financiamiento o inversión que harán posible la realización del proyecto. 
      
    
    p.mb-4 Responder adecuadamente a estas preguntas permite evaluar si la idea inicial es viable, y si se ajusta a los recursos y tiempos disponibles. La delimitación del problema debe considerar varios factores fundamentales, tales como: 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.mb-4
        LineaTiempoD.color-primario
          p(numero="1" titulo="El espacio físico-geográfico") ¿En qué lugar se implementará el proyecto? Es fundamental especificar la localización física para considerar el contexto cultural, social y económico. 
          p(numero="2" titulo="El tiempo") ¿Cuánto tiempo se tiene para la ejecución del proyecto? Establecer un marco temporal es crucial para la planificación y la asignación de recursos. 
          p(numero="3" titulo="Los recursos disponibles") ¿Qué recursos se tienen a disposición? La identificación y administración de los recursos son esenciales para asegurar que el proyecto sea sostenible.
          p(numero="4" titulo="El entorno sociopolítico") ¿Cómo impactan los factores externos, como la política y la sociedad, en el proyecto? El análisis del contexto sociopolítico permite anticipar desafíos y oportunidades que podrían influir en el desarrollo del proyecto.
      .col-11.col-lg-5.col-md-10
        figure
          img(src="@/assets/curso/tema1/img5.svg", alt="alt")
    
    .row.justify-content-center.align-items-center
      .col-lg-12
        .cajon.color-acento-contenido.p-4
          p.mb-0  En conjunto, este proceso culmina en la formulación de un diagnóstico. Este diagnóstico constituye la base sobre la cual se diseña el proyecto, ya que especifica la necesidad o problemática que se busca solucionar. De este modo, el planteamiento del problema no solo define el punto de partida del proyecto, sino que también establece una guía clara para la planificación y ejecución de las acciones necesarias. 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
