<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Gestión estratégica de proyectos: de la planeación a la competitividad.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fortalecer conocimientos asociados al proceso de gestión de proyectos.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Proceso planificado con el objetivo de satisfacer una necesidad o resolver un problema.',
          imagen: require('@/assets/componentes/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Proyecto productivo', esCorrecta: true },
            { id: 'b', texto: 'Misión', esCorrecta: false },
            { id: 'c', texto: 'Competencia', esCorrecta: false },
            { id: 'd', texto: 'Barreras de entrada', esCorrecta: false },
            { id: 'e', texto: 'Planeación estratégica', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Definición clara de la razón de ser de una empresa y su actividad principal.',
          imagen: require('@/assets/componentes/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Misión', esCorrecta: true },
            { id: 'b', texto: 'Proyecto productivo', esCorrecta: false },
            { id: 'c', texto: 'Competencia', esCorrecta: false },
            { id: 'd', texto: 'Barreras de entrada', esCorrecta: false },
            { id: 'e', texto: 'Planeación estratégica', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Empresas que compiten en el mismo mercado ofreciendo productos o servicios similares.',
          imagen: require('@/assets/componentes/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Competencia', esCorrecta: true },
            { id: 'b', texto: 'Misión', esCorrecta: false },
            { id: 'c', texto: 'Proyecto productivo', esCorrecta: false },
            { id: 'd', texto: 'Barreras de entrada', esCorrecta: false },
            { id: 'e', texto: 'Planeación estratégica', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Obstáculos que enfrentan las nuevas empresas al ingresar a un mercado.',
          imagen: require('@/assets/componentes/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Barreras de entrada', esCorrecta: true },
            { id: 'b', texto: 'Misión', esCorrecta: false },
            { id: 'c', texto: 'Competencia', esCorrecta: false },
            { id: 'd', texto: 'Proyecto productivo', esCorrecta: false },
            { id: 'e', texto: 'Planeación estratégica', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Un proceso que permite a la empresa formular un plan para alcanzar sus objetivos considerando el entorno interno y externo.',
          imagen: require('@/assets/componentes/img5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Planeación estratégica', esCorrecta: true },
            { id: 'b', texto: 'Misión', esCorrecta: false },
            { id: 'c', texto: 'Competencia', esCorrecta: false },
            { id: 'd', texto: 'Barreras de entrada', esCorrecta: false },
            { id: 'e', texto: 'Proyecto productivo', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
