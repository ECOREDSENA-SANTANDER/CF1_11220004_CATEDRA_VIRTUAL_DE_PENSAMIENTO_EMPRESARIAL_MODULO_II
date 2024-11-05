export default {
  global: {
    componenteFormativo:
      'Gestión estratégica de proyectos: de la planeación a la competitividad.',
    descripcionCurso:
      'Este componente formativo profundiza en el proceso de la gestión de proyectos alineados con la planeación estratégica de la empresa. A través de la identificación del problema, la estructura del proyecto y la competitividad en el sector, se desarrollan habilidades para formular proyectos eficaces, siguiendo lineamientos y normas que impulsan la competitividad y el éxito organizacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptualización del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Identificación y planteamiento del problema',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'La planeación estratégica en la empresa',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Competencia y competitividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'La diferenciación en el sector',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estructura del proyecto en la empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Alcance del proyecto',
            hash: 't_4_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_11220004_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Conceptualización del proyecto',
      referencia:
        'Gallardo, D. y Maldonado, V. (2016). Proyectos organizacionales: (1 ed.). (pp. 51–61). Editorial Maipue.',
      tipo: 'Libro',
      link:
        'https://bibliotecaees1boulogne.wordpress.com/wp-content/uploads/2020/06/proyectos-organizacionales-gallardo-delia-maldonado-viv.pdf',
    },
    {
      tema: '1.1. Identificación y planteamiento del problema',
      referencia:
        'Innpulsa Colombia. Paso 1: Definir el problema - #EmprenderConMétodo: 5 pasos para emprender. [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=a732oiYiux4',
    },
    {
      tema: '2.1. La planeación estratégica en la empresa.',
      referencia:
        'Quintero, I y Matiz, F. (2019). Pensamiento estratégico: concepto, impulsores y práctica. (pp. 57–89). Alfaomega.',
      tipo: 'Libro',
      link:
        'https://books.google.es/books?hl=es&lr=&id=DH54EAAAQBAJ&oi=fnd&pg=PA9&dq=Quintero,+I+y+Matiz,+F.+(2019).+Pensamiento+estrat%C3%A9gico:+concepto,+impulsores+y+pr%C3%A1ctica.+(pp.+57%E2%80%9389).+Alfaomega&ots=Bkvjrp5H-h&sig=5h2Ms7IhRJWVgwwoLYz5gJsnXJg#v=onepage&q&f=false',
    },
    {
      tema: '3. Competencia y competitividad',
      referencia:
        'Fonseca Z., R. (2015). Competitividad, la clave del éxito empresarial. (pp. 9–29). Alfaomega.',
      tipo: 'Libro',
      link:
        'https://books.google.es/books?hl=es&lr=&id=8tFxEAAAQBAJ&oi=fnd&pg=PA1&dq=Fonseca+Z.,+R.+(2015).+Competitividad,+la+clave+del+%C3%A9xito+empresarial.+(pp.+9%E2%80%9329).+Alfaomega&ots=AFSzrOcxQU&sig=lfIiPTUrDyU_myKhqFgORCLBXFA#v=onepage&q&f=false',
    },
  ],
  glosario: [
    {
      termino: 'Competencias',
      significado:
        'Conocimientos, habilidades, actitudes y valores que están asociados con un desempeño superior dentro de la organización. Estas engloban aspectos técnicos y organizacionales, y deben tener definiciones operacionales, así como conductas observables.',
    },
    {
      termino: 'Emprendimiento',
      significado:
        'Ideas aplicadas a generar riqueza a partir de las oportunidades que se detectan en el entorno. Estas ideas se canalizan a través de planes de negocio y requieren verdaderos líderes con visión que las concreten en empresa.',
    },
    {
      termino: 'Empresa',
      significado:
        'Según el Código de Comercio de Colombia, una empresa es “toda actividad económica organizada para la producción, transformación, comercialización, administración o custodia de bienes o para la prestación de servicios” (Decreto 410 de 1971, Art. 25).',
    },
    {
      termino: 'Innovación',
      significado:
        'es la aplicación de nuevas técnicas, procesos productivos, productos o servicios para el mercado. Las innovaciones exitosas pueden darse: al producir los mismos bienes, pero con la utilización de menos recursos, o al producir bienes nuevos o de mejor calidad.',
    },
    {
      termino: 'Plan de mejoramiento',
      significado:
        'Acciones encaminadas a corregir desviaciones cuando éstas son identificadas, previa aplicación de un indicador de gestión.',
    },
    {
      termino: 'Plan estratégico',
      significado:
        'Documento que refleja los lineamientos y la estrategia a seguir por la empresa en el mediano plazo. Se establece para vigencias aproximadas de 3 años, pero puede oscilar entre 1 y 5 años.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asensio del Aco, E., & Vazquez,B. (2016). Empresa e Iniciativa Emprendedora. Madrid. España: Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Montero Moreno, C. (2014). Modelos Prácticos de Administración de Riegos. México: Ediciones Fiscales ISEF.',
      link: '',
    },
    {
      referencia:
        'Puchol, L. (2012). Dirección y Gestión de Recursos Humanos. Madrid-Buenos Aires-México: Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Veiga, J.F.C. (2015). La Gestión Financiera de la Empresa. Madrid: Esic Editorial.',
      link: '',
    },
    {
      referencia:
        'Salazar, I.P. (2010). Guía Práctica para la identificación, formulación y evaluación de proyectos. Bogotá. Editorial Universidad del Rosario.',
      link: '',
    },
    {
      referencia:
        'Atlassian – The work stream. (s.f.). Cómo puede salvarte el día la gestión del alcance del proyecto.',
      link:
        'https://www.atlassian.com/es/work-management/project-management/project-scope',
    },
    {
      referencia:
        'Instituto Europeo de Posgrados - IEP. (2022). Cómo definir el alcance de un proyecto paso a paso.',
      link:
        'https://www.iep-edu.com.co/como-definir-el-alcance-de-un-proyecto/',
    },
    {
      referencia:
        'Rincón-Guio, C. y Jaramillo Castaño, O. (2017). Proyectos, gestión y éxito. Una revisión de la literatura. CINA Research. 1. 34.',
      link:
        'https://www.researchgate.net/publication/321914745_Proyectos_gestion_y_exito_Una_revision_de_la_literatura',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Cuellar',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
