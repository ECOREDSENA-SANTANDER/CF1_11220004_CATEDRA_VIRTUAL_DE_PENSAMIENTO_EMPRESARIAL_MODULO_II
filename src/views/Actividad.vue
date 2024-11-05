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
            '¿Por qué es importante el planteamiento adecuado del problema en un proyecto productivo?',
          imagen: require('@/assets/componentes/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque facilita la descripción precisa de la situación actual y orienta hacia la solución.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque ayuda a delimitar el cronograma de actividades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque permite identificar los recursos financieros necesarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque establece los procedimientos operacionales del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'En el proceso de planeación estratégica, ¿qué aspecto no forma parte de las preguntas fundamentales que guían la planeación de una empresa?',
          imagen: require('@/assets/componentes/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '¿Qué productos innovadores vamos a lanzar al mercado? ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                '¿Dónde están establecidas nuestras competencias organizacionales?',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '¿Cómo vamos a medir el logro de nuestros objetivos?',
              esCorrecta: false,
            },
            { id: 'd', texto: '¿A dónde queremos llegar?', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Un proyecto productivo debe considerar únicamente la rentabilidad económica, sin importar el impacto social o cultural.',
          imagen: require('@/assets/componentes/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'La misión de una empresa debe integrar tanto aspectos económicos como sociales, buscando siempre el desarrollo responsable de la comunidad.',
          imagen: require('@/assets/componentes/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes aspectos no es considerado fundamental para la definición del problema en un proyecto?',
          imagen: require('@/assets/componentes/img5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La metodología para alcanzar los objetivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El lugar donde se implementará el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los recursos financieros disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La descripción precisa de la condición actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué factor es fundamental para que una empresa logre destacarse en un mercado altamente competitivo?',
          imagen: require('@/assets/componentes/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Invertir en investigación y desarrollo (I+D).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir los precios drásticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ofrecer productos similares a los competidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la competencia directa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué caracteriza a las barreras de salida en el mercado?',
          imagen: require('@/assets/componentes/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incluyen la liquidación de activos y posibles pérdidas de reputación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se relacionan con los costos de permanecer en un mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Son fáciles de superar y no requieren un análisis profundo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo afectan a grandes empresas con presencia global.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'En mercados competitivos, la reducción de precios siempre garantiza un aumento en la cuota de mercado.',
          imagen: require('@/assets/componentes/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué estrategia de diferenciación permite agregar valor sin necesariamente crear un producto nuevo?',
          imagen: require('@/assets/componentes/img5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La mejora de productos existentes mediante actualizaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar los precios del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación de servicios complementarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir costos operativos al mínimo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'En el proceso de definición del alcance es importante definir objetivos específicos para cada fase del proyecto.',
          imagen: require('@/assets/componentes/img5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
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
