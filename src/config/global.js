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
        download: 'downloads/prueba.pdf',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
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
        'La innovación es la aplicación de nuevas técnicas, procesos productivos, productos o servicios para el mercado. Las innovaciones exitosas pueden darse: al producir los mismos bienes, pero con la utilización de menos recursos, o al producir bienes nuevos o de mejor calidad.',
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
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Cuellar',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Santiago Lozada Garcés',
          cargo: 'Líder línea de producción',
          centro:
            'Regional Santander - Centro Industrial de Mantenimiento Integral',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Asesora Pedagógica',
          centro:
            'Regional Santander - Centro Industrial de Mantenimiento Integral',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial de Mantenimiento Integral',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
