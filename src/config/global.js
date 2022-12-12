export default {
  global: {
    componenteFormativo: 'Ejecución y evaluación de pruebas sensoriales',
    descripcionCurso:
      'En este componente formativo afianzará los conceptos sobre el panel sensorial, las funciones, las pruebas analíticas, los formatos en los que se registran los atributos y cómo presentarlos bajo un gráfico radial. Igualmente, sobre cuál es la base química de los atributos durante el procesamiento y la incidencia de los defectos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Panel sensorial',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Efectos del proceso de fermentación, secado y tostión en los sabores del cacao',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Prueba sensorial en el cacao y chocolate',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Resultados interpretación y gráficas radial (de araña)',
        desarrolloContenidos: true,
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
      tema: '3. Prueba sensorial en el cacao y chocolate',
      referencia:
        'Murcia-Artunduaga, K., Gasca-Torres, L., & Castañeda, M. del R. (2022). Evaluación físico-sensorial de granos de cacao (Theobroma cacao L.), región sur del Huila (Colombia). <b><i>Informador Técnico</b></i>, 86 (2), 194-204. https://doi.org/10.23850/22565035.4358',
      tipo: 'Artículo ',
      link:
        'https://revistas.sena.edu.co/index.php/inf_tec/article/view/evaluacion-fisico-sensorial-de-granos-de-cacao-theobroma-cacao-l/5035',
    },
    {
      tema: '3. Prueba sensorial en el cacao y chocolate',
      referencia:
        'USAID, Equal Exchange & TCHO. (2018). <i>Guía para la ficha de catación para análisis sensorial del cacao</i>.   ',
      tipo: 'PDF',
      link:
        'https://equalexchange.coop/sites/default/files/Tasting-Guide_vF-JUNIO2018-ESP.pdf',
    },
    {
      tema: '3. Prueba sensorial en el cacao y chocolate',
      referencia:
        'AgrosaviaTV. (2022). <i>Análisis sensorial en licor de cacao</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LcQnKbldJP8',
    },
    {
      tema: '4. Resultados interpretación y gráficas radial (de araña)',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2017). <i>Agricultura al día- Cata de cacao</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7Lr7VEQ3QPM',
    },
  ],
  glosario: [
    {
      termino: 'Atributos',
      significado:
        'Características de sabor, olor y color de un alimento o sustancia que se recibe por los órganos de los sentidos.',
    },
    {
      termino: 'Categorías',
      significado:
        'En análisis sensorial se refiere a la agrupación de descriptores que comparten características.',
    },
    {
      termino: 'Gráfica radial',
      significado:
        'En análisis sensorial es la gráfica que permite presentar visualmente los datos de una muestra en cuanto a dos tipos de variables, descriptores e intensidad. Es muy usada para pruebas descriptivas con el fin de comparar dos o más productos.',
    },
    {
      termino: 'Higroscópico',
      significado:
        'Propiedad de un cuerpo u objeto de absorber la humedad del medio que lo rodea, el cacao se considera altamente higroscópico y por ello se debe tener cuidado en su almacenamiento.',
    },
    {
      termino: 'Intensidad',
      significado:
        'En análisis sensorial se refiere a la fuerza o no con que se presenta un atributo en un alimento.',
    },
    {
      termino: 'Mucílago',
      significado:
        'En el cacao es el recubrimiento natural de los granos de cacao, compuesto por carbohidratos y azúcares; su apariencia es blanca y gelatinosa y se puede consumir.',
    },
    {
      termino: 'Torrefacción',
      significado:
        'Proceso de tostado que se realiza a los granos de cacao una vez han pasado por la fermentación y el secado. Se realiza a 130 grados centígrados por aprox. 15 a 20 min. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez Fernández, C.; Liconte Salgado, N.; Pérez Silva, E.; Lares Amaíz, M.; Perozo González, J. (2022). Revisión sobre los atributos químicos, físicos y sensoriales como indicadores de la calidad comercial del cacao. <i>Petroglifos. Revista Crítica Transdisciplinar</i>. 5(1):12-25 enero-junio.',
      link:
        'https://petroglifosrevistacritica.org.ve/revista/revision-sobre-los-atributos-fisicos-quimicos-y-sensoriales-como-indicadores-de-la-calidad-comercial-del-cacao/',
    },
    {
      referencia:
        'Chang Vera, J., Álvarez Escaleras, M. Ibáñez Astaburuaga, A. (2021).  <i>Sistema de producción de la almendra y del cacao: Una caracterización necesaria.</i> Revista de Ciencias Sociales (Ve), vol. 27, núm. Esp.3, pp. 372-390.',
      link: 'https://www.redalyc.org/journal/280/28068276029/html/',
    },
    {
      referencia:
        'Peña. González, M. A. & Prado Monje, P.B. (2021). <i>Propuesta de una metodología para el análisis sensorial del cacao tostado.</i>',
      link: 'https://dspace.uazuay.edu.ec/handle/datos/11270',
    },
    {
      referencia:
        'Peña González M. A. & León Durán, T. V. (2022). <i>Desarrollo de una metodología para la formación de jueces e identificación de las características organolépticas del chocolate.</i> [Trabajo de graduación, Universidad Azuay].',
      link: 'https://dspace.uazuay.edu.ec/handle/datos/11775',
    },
    {
      referencia:
        'Quintana Fuentes, L.F. & García Jerez, A. (2021). <i>Evaluación integral de la calidad sensorial del cacao</i>. UNAD.',
      link: 'https://hemeroteca.unad.edu.co/index.php/book/article/view/4852',
    },
    {
      referencia:
        'Quintana Fuentes, L.F., García Jerez, A., Coronado R. A. & Rodríguez L. G. (2022). <i>La selección de candidatos a evaluador sensorial para determinar la calidad de licor de cacao</i>. Crecer Empresarial Journal of Management and Development. Universidad Surcolombiana.',
      link:
        'https://journalusco.edu.co/index.php/cempresarial/article/view/3512',
    },
    {
      referencia:
        'Sociedad de Agricultores de Colombia- SAC. (2022). El principal Objetivo de la iniciativa es producir 126 toneladas del grano en el 2030, para abastecer el mercado interno y posicionar al país en el exterior. <i>Revista Nacional de Agricultura</i>. Edición 1026 - Junio 2022.',
      link:
        'https://sac.org.co/la-cadena-cacao-chocolate-nuevo-acuerdo-por-la-competitividad/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Pachón Meneses',
        cargo: 'Experta temática',
        centro:
          'Regional Norte de Santander. - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica ',
        centro: 'Regional Distrito Capital - Centro de Diseño y metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Eugenia Mejia Lopez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
