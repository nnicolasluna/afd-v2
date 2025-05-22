import { Component } from '@angular/core';
interface Municipio {
  nombre: string;
}

interface Region {
  nombre: string;
  municipios: Municipio[];
  municipioInicial: string; // El municipio que debe estar seleccionado al inicio
}
@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.scss']
})
export class TalleresComponent {
  primerapantalla = true
  taller2 = false
  tecerapantalla_participantes = false
  tecerapantalla_desarrollo = false
  datosMunicipioSelecionado: any;
  regiones: Region[] = [
    {
      nombre: 'La Paz',
      municipios: [{ nombre: 'Palos Blancos' }, { nombre: 'San Buenaventura' }],
      municipioInicial: 'Palos Blancos'
    },
    {
      nombre: 'Beni',
      municipios: [{ nombre: 'Rurrenabaque' }, { nombre: 'San Borja' }],
      municipioInicial: 'Rurrenabaque'
    },
    {
      nombre: 'Cochabamba',
      municipios: [{ nombre: 'Tiquipaya' }, { nombre: 'Vinto' }],
      municipioInicial: 'Tiquipaya'
    }
  ];
SubMenu_definicion = true
SubMenu_identificar = false
SubMenu_acciones = false
SubMenu_foda = false
SubMenu_acta = false

activeButton: number = 1; 
 botonActivomenu(buttonNumber: number) {
    this.activeButton = buttonNumber;
  }

  regionSeleccionada: Region | undefined;
  municipioSeleccionado: Municipio | undefined;

  constructor() {
    this.seleccionarRegion(this.regiones[0]);
    this.seleccionarMunicipio(this.regiones[0].municipios.find(m => m.nombre === this.regiones[0].municipioInicial)!);
  }

  seleccionarRegion(region: Region): void {
    this.regionSeleccionada = region;
    this.seleccionarMunicipio(region.municipios.find(m => m.nombre === region.municipioInicial)!);
  }

  seleccionarMunicipio(municipio: Municipio): void {
    this.municipioSeleccionado = municipio;
    const nombreMunicipio = this.municipioSeleccionado.nombre;
    if (this.datos_organizados.hasOwnProperty(nombreMunicipio)) {
      this.datosMunicipioSelecionado = this.datos_organizados[nombreMunicipio as keyof typeof this.datos_organizados];
    } else {
      this.datosMunicipioSelecionado = [];
    }
  }

  botonVertaller2() {
    this.primerapantalla = !this.primerapantalla
    this.taller2 = !this.primerapantalla
  }

  verParticipantes() {
    this.taller2 = !this.taller2
    this.tecerapantalla_participantes = !this.tecerapantalla_participantes
  }
  verDesarrollo() {
    this.taller2 = !this.taller2
    this.tecerapantalla_desarrollo = !this.tecerapantalla_desarrollo
  }



  datos_organizados = {
    "San Buenaventura": [
      {
        "Intro": "Durante el desarrollo de la mesa de trabajo en el municipio de San Buenaventura, se contó con la participación de representantes de comunidades indígenas, técnicos del SERNAP y técnicos del municipio, siendo esta mesa un espacio para la socialización y la validación de los criterios técnicos y socioambientales identificados, así como el intercambio de criterios y conocimientos respecto a las áreas que han sido afectadas por incendios forestales, y la identificación de las principales necesidades y acciones para restaurar y recuperar las áreas afectadas. En ese sentido, a continuación, se describen los principales aportes de los participantes de la mesa de trabajo.",
      },
      {
        "Contenido": "Definición de criterios técnicos y socioambientales",
        "Descripcion": {
          "Texto": "Se realizó la presentación de la metodología de construcción de criterios técnicos y socio-ambientales, donde se explicó las variables seleccionadas:",
          "Adicional": "En base al análisis de los criterios técnicos y socioambientales, los participantes consideraron de importancia alta incorporar un criterio adicional, siendo este la identificación de los Ojos de agua o toma de agua, consideradas como áreas de alto valor de conservación."
        }
      },
      {
        "Contenido": "Identificar y priorizar áreas para la restauración",
        "Descripcion": "Los participantes coincidieron que las áreas que deben ser priorizadas para la restauración o recuperación deben ser los ojos de agua o toma de agua, de aquellas comunidades que fueron afectadas por los incendios forestales, como ser: Buena Vista, San Isidro, Tumupasa, 25 de Mayo, Everest, Bella Vista y San Buenaventura. Argumentando que una vez que transcurrieron los incendios forestales en las fuentes de agua, la cantidad y calidad del agua fue disminuyendo, afectando al consumo local. Asimismo, estas áreas priorizadas, son factibles para implementar acciones de restauración, existe accesibilidad a los sitios y la predisposición de las comunidades."
      },
      {
        "Contenido": "Identificar acciones de restauración y/o recuperación y principales necesidades",
        "Descripcion": {
          "Texto": "Las acciones principales identificadas para la recuperación de los ojos de agua, fueron las siguientes:",
          "Acciones": [
            "Realizar acciones de reforestación con la combinación de especies nativas forestales como ser: i) Palma real, ii) Bibosi, iii) Gabun, iv) Ceibo, v) Papaya de Monte, vi) Mapajo, vii) Mara, entre otros.",
            "Coordinar e involucrar a las Fuerzas Armadas, en las actividades de reforestación.",
            "Fortalecer el vivero forestal del GAM San Buenaventura, a través de un Convenio Intergubernativo.",
            "Implementar tanques para el almacenamiento de agua y/o atajados en las comunidades afectadas por incendios forestales.",
            "Realizar el fortalecimiento de capacidades en temas como ser: i) prevención y sensibilización ante incendios forestales, ii) técnicas de quemas controladas y cortinas rompe fuegos, iii) formación de brigadas forestales comunales.",
            "Realizar o gestionar equipamiento para el control de incendios forestales, como ser: mochilas forestales, machetes, rastrillos, azadones para las comunidades."
          ]
        }
      },
      {
        "Contenido": "Identificación de las fortalezas, limitaciones, oportunidades, amenazas, prioridades identificadas",
        "Descripcion": {
          "Fortalezas": [
            "Las comunidades cuentan con normas comunales para un adecuado control de chaqueos, considerando prácticas como la realización de cortinas rompe fuegos.",
            "Las comunidades cuentan con técnicos de monitoreo comunal.",
            "El municipio cuenta con una Unidad de Gestión de Riesgos.",
            "El municipio y el SERNAP cuentan con sus Planes de contingencia elaborados."
          ],
          "Oportunidades": [
            "El municipio cuenta con un vivero forestal, el cual podría ser fortalecido a través de insumos (semillas, bolsas, entre otros), para la producción de plantines forestales.",
            "El municipio viene impulsando la creación de un área protegida municipal."
          ],
          "Debilidades": [
            "Débil coordinación con el municipio y las comunidades locales.",
            "Necesidad de conformar un equipo de trabajo para coordinar las actividades de recuperación y restauración.",
            "Dependencia de apoyo externo para articular acciones y llevar a cabo proyectos a largo plazo."
          ],
          "Amenazas": [
            "La minería ilegal y los asentamientos ilegales son las principales causas de los incendios forestales.",
            "Sequías e incendios forestales como los sufridos en 2023, representan riesgos constantes para los proyectos de restauración."
          ]
        }
      },
      {
        "Contenido": "Elaboración del acta de acuerdos y validación",
        "Descripcion": {
          "Texto":"En el marco de la mesa de trabajo efectuada en el municipio de San Buenaventura, los participantes de diferentes comunidades e instituciones participaron activamente en la identificación de las zonas más afectadas por los incendios forestales, generando la necesidad de implementar acciones inmediatas para su recuperación. Durante el desarrollo de la mesa, se analizó el estado de las áreas afectadas y se propusieron acciones de reforestación con especies nativas forestales maderables y no maderables, así como el fortalecimiento de capacidades en la prevención y control de incendios forestales. El acta de acuerdos fue elaborada en base a los aportes, discusiones y propuestas presentadas por los participantes, asegurando que las acciones fueran inclusivas, adaptadas a la realidad del municipio y alineadas con los objetivos del proyecto. Posteriormente, se socializó el acta elaborada y en base a ello se procedió con la validación del documento, mediante la firma de los representantes de las comunidades, autoridades municipales y otros actores presentes, garantizando así el compromiso colectivo para la ejecución de las acciones identificadas."
        }
      }
    ],
    "Palos Blancos": [
      {
        "Intro": "Durante el desarrollo de la mesa de trabajo en el municipio de Palo Blancos, se contó con la participación de técnicos del municipio, así mismo con representantes de la Gobernación, representantes de las comunidades, Representantes de la Conservación Internacional Bolivia, siendo esta mesa un espacio para la socialización y la validación de los criterios técnicos y socioambientales identificados, así como el intercambio de criterios y conocimientos respecto a las áreas que han sido afectadas por incendios forestales, la identificación de las principales necesidades y acciones para restaurar y recuperar las áreas afectadas. ",
      },
      {
        "Contenido": "Definición de criterios técnicos y socioambientales",
        "Descripcion": {
          "Texto": "Se realizó la presentación de la metodología de construcción de criterios técnicos y socio-ambientales, donde se explicó las variables seleccionadas:",
          "Adicional": "En base al análisis de los criterios técnicos y socioambientales, los participantes consideraron de importancia alta incorporar un criterio adicional, siendo este la identificación de los Ojos de agua, consideradas como áreas de alto valor de conservación. "
        }
      },
      {
        "Contenido": "Identificar y priorizar áreas para la restauración",
        "Descripcion": " Los participantes coincidieron que las áreas que deben ser priorizadas para la restauración o recuperación deben ser los ojos de agua, de aquellas comunidades que fueron afectadas por los incendios forestales, como ser: San José, Agua Dulce, Porvenir, Unión Omasuyo, Sayari, Copacabana, 05 de septiembre y Sapecho.  Argumentando que una vez que transcurrieron los incendios forestales en los ojos de agua, la cantidad y calidad del agua fue disminuyendo, afectando al consumo local. Asimismo, estas áreas priorizadas, son factibles para implementar acciones de reforestación, existe accesibilidad a los sitios y la predisposición de las comunidades",
      },
      {
        "Contenido": "Identificar acciones de restauración y/o recuperación y principales necesidades",
        "Descripcion": {
          "Texto": "Las acciones principales identificadas para la recuperación de los ojos de agua, fueron las siguientes:",
          "Acciones": [
            "Reforestación en áreas afectadas por incendios forestales, utilizando una combinación de especies forestales y frutales como ser: i) Mara, ii) Cedro, iii) Toco, iv) Majo, v) Asaí, vi) Cítricos, vii) Cacao, viii) Copoazú, ix) Especies melíferas, entre otros, como una alternativa productiva (sistemas agroforestales), y de beneficio para las comunidades.",
            "Recuperación de ojos de agua, utilizando una combinación de especies forestales y frutales, como ser: i) Tacuara, ii) Bambu, iii) Itapayu, entre otros. Este esfuerzo contribuirá a la restauración de áreas afectadas por incendios forestales y a la conservación de los recursos hídricos.",
            "En ese sentido, es importante conformar un equipo de trabajo articulado (GAM, SERNAP, APMT, comunidades y otros), para coordinar acciones y aunar esfuerzos, así mismo, el compromiso por parte de las comunidades para realizar las acciones de reforestación, también fortalecer los estatutos internos de las comunidades para el seguimiento y sostenibilidad de las acciones a implementar. ",
            "Fortalecimiento de viveros forestales, el GAM de Palos Blancos cuenta con un vivero forestal, se requiere un fortalecimiento, con insumos y herramientas para la producción de plantines forestales maderables y no maderables y frutales; se propone establecer un Convenio intergubernativo para mejorar el mismo.",
            "Asimismo, se podría considerar una contraparte de las comunidades para el fortalecimiento de viveros comunales (Por federación).",
            "Es importante reforzar la capacitación teórica y práctica de temas importantes como ser: i) chaqueo sin quema, ii) prevención de incendios forestales, iii) técnicas de manejo del fuego, iv) alternativas al uso del fuego, v) cortinas rompe fuegos y vi) quemas controladas a las comunidades, en coordinación con el GAM y SERNAP.",
            "Realizar campañas de concientización y sensibilización sobre el cuidado del medio ambiente, bosques, ojos de agua entre otros, a las diferentes comunidades y unidades educativas.",
            "Realizar la capacitación y conformación de brigadas forestales para el control de incendios forestales a las diferentes comunidades..",
            "Apoyar logísticamente en acciones de combate contra incendios forestales, con la provisión de mochilas forestales o fumigadoras, bombas de agua, motosierras, equipos de protección personal, bate fuegos, mascarillas, para los brigadistas y personal encargado del control y combate de incendios forestales, mejorando así la capacidad de respuesta en situaciones de emergencia.",
            "Es necesario realizar una planificación de quemas controladas en coordinación con las comunidades, el GAM y ABT.  ",
            "Es importante realizar acciones y planes, con los actores locales comprometidos, y respaldando los mismos mediante resoluciones normativas. ",
            "Es importante elaborar instrumentos de planificación post incendios, para determinar la producción de plantines.",
          ]
        }
      },
      {
        "Contenido": "Identificación de las fortalezas, limitaciones, oportunidades, amenazas, prioridades identificadas",
        "Descripcion": {
          "Fortalezas": [
            "El municipio cuenta con una Unidad de Gestión de Riesgos (UGR).",
            "El municipio cuenta con un vivero forestal, teniendo una planificación de producción de 5000 plantines, asimismo, la capacidad productiva del vivero es de 40.000 plantines/año.",
            "El municipio utiliza el Sistema de Información y Monitoreo de Bosques (SIMB), para determinar los focos de calor.",
            "La comunidad de San Miguel de Huachi, ha trabajado en la elaboración de normas locales de prohibición de quemas, donde se sanciona a aquellos comunarios que realizan chaqueos."
          ],
          "Oportunidades": [
            "Es importante contar con el compromiso de las comunidades para realizar las acciones de reforestación.",
            "Es importante realizar la socialización y sensibilización a las comunidades y Unidades Educativas, en temas de prevención de incendios forestales.",
            "Es necesario trabajar en una ley de cero mineria, ley del agua y de pausa ambiental.",
            "Existen propuestas tecnicas para equipar con herramientas para la atención de incendios forestales, por distrito.",
            "Las personas después de los incendios forestales de la gestión 2023, han tomado conciencia para realizar los chaqueos de manera planificada. ",
            "Existe la disponibilidad de las comunidades para dar una contraparte local, para el fortalecimiento de viveros comunales.",
            "Aterrizar planes de acción, instrumentos de gestión y políticas para dar continuidad a las acciones identificadas.",
            "Realizar una planificación de quemas controladas, en coordinación con las comunidades, GAM y ABT.",
            "Para el seguimiento y sostenibilidad, es necesario fortalecer los estatutos internos con acciones de reforestación productivo y ambiental."


          ],
          "Debilidades": [
            "El municipio no cuenta con estaciones meteorológicas, ni equipamiento para la atención de incendios forestales.",
            "Mejorar el sistema de alerta temprana del municipio.",
            "Presupuesto reducido para temas de prevención, control y combate de incendios forestales.",
            "Falta de recursos para el equipamiento de brigadas forestales, para la atención de incendios forestales.",
            "Falta de organización por parte de las organizaciones sociales.",
            "Débil coordinación interinstitucional",
            "La capacidad de respuesta ante incendios forestales es deficiente.",
            "No se cuenta con un Sistema de Alerta Temprana (SAT)."

          ],
          "Amenazas": [
            "Se tiene reclamos y quejas por las comunidades, siendo que no se les tiene permitido realizar chaqueos para la producción (pausa ambiental).",
            "Para la producción de arroz, es necesario realizar chaqueos. ",
            "La presencia de sequías e incendios son factores presentes en el municipio, los cuales representan riesgos constantes para los proyectos de restauración."
          ]
        }
      },
      {
        "Contenido": "Elaboración del acta de acuerdos y validación",
        "Descripcion": {
          "Texto": "En el marco de la mesa de trabajo efectuada en el municipio de Palos Blancos, los participantes de diferentes comunidades e instituciones participaron activamente en la identificación de las zonas más afectadas por los incendios forestales, generando la necesidad de implementar acciones inmediatas para su recuperación. Durante el desarrollo de la mesa, se analizó el estado de las áreas afectadas y se propusieron acciones de reforestación en sitios afectados por incendios forestales y ojos de agua, para ello se consideraron especies nativas forestales maderables y no maderables, así como la implementación de sistemas agroforestales, y el fortalecimiento de capacidades en la prevención y control de incendios forestales.",
        }
      }
    ],
    "Rurrenabaque ": [
      {
        "Intro": "Durante el desarrollo de la mesa de trabajo en el municipio de Rurrenabaque, se contó con la participación de representantes de comunidades indígenas, técnicos del municipio, representantes de Defensa Civil y representantes del Área Protegida Pilón Laja, siendo esta mesa un espacio importante para la socialización y validación de los criterios técnicos y socioambientales identificados, así como para el intercambio de conocimientos y perspectivas sobre las áreas afectadas por incendios forestales. Además, permitió identificar las principales necesidades y definir acciones estratégicas para la restauración y recuperación de las áreas afectadas. En ese sentido, a continuación, se presentan los principales aportes de los participantes de la mesa de trabajo.",
      },
      {
        "Contenido": "Definición de criterios técnicos y socioambientales",
        "Descripcion": {
          "Texto": "Se realizó la presentación de la metodología de construcción de criterios técnicos y socio-ambientales, donde se explicó las variables seleccionadas:",
          "Adicional": "En base al análisis de los criterios técnicos y socioambientales, los participantes consideraron de importancia alta incorporar un criterio adicional, siendo este la identificación de los Ojos de agua o toma de agua, consideradas como áreas de alto valor de conservación. "
        }
      },
      {
        "Contenido": "Identificar y priorizar áreas para la restauración",
        "Descripcion": "Los participantes coincidieron que las áreas que deben ser priorizadas para la restauración o recuperación deben ser los ojos o toma de agua, de aquellas comunidades que fueron afectadas por los incendios forestales, como ser: Retiro, El Paraíso, Carmen Florida, Real Bent, San Antonio de Sant, La Embocada del Quiquibey, Asunción del Quiquibey, Puerto Motor y Rurrenabaque. Siendo estas comunidades una vez que transcurrieron los incendios forestales. Asimismo, estas áreas identificadas son factibles para implementar acciones de restauración, existen caminos y la predisposición de las comunidades.",
      },
      {
        "Contenido": "Identificar acciones de restauración y/o recuperación y principales necesidades",
        "Descripcion": {
          "Texto": "Las acciones principales identificadas para la recuperación de los ojos de agua, fueron las siguientes:",
          "Acciones": [
            "Realizar acciones de reforestación con la combinación de especies nativas forestales, como ser: i) Palma Real, ii) Cuchi Verde, iii) Asaí, iv) Bibosi, v) Quecho, vi) Paquio, entre otros y dentro de las especies frutales se encuentra: i) Achachairu, ii) Pacay, iii) Rambuta, iv) Palta, v) Cacao, entre otros. Este esfuerzo contribuirá a la restauración de áreas afectadas por incendios forestales y a la conservación de los recursos hídricos.",
            "Conformar un equipo de trabajo articulado (GAM, ONGs, SERNAP, CRTM y otros), para coordinar acciones y aunar esfuerzos.",
            "Realizar la socialización con las comunidades, para coordinar las acciones que se identifiquen como prioritarias y consensuar acuerdos.",
            "Fortalecer los viveros del municipio de las zonas de: Colorados, Los Tigres y Asunción, mediante la implementación de un Convenio Intergubernativo, para mejorar con insumos, herramientas y materiales para estos viveros, incrementando su capacidad de producción y optimizando sus operaciones.",
            "Realizar el fortalecimiento de capacidades en temas como: i) prevención y sensibilización ante incendios forestales, ii) técnicas de quemas controladas y cortinas rompevientos, iii) formación de brigadas forestales comunales para una coordinación directa con los actores involucrados; y iv) chaqueo sin quemas.",
            "Desarrollo de sistemas agroforestales para contribuir a la restauración ecológica y conservación de los recursos hídricos.",
            "Realizar o gestionar equipamiento para el control de incendios forestales mediante la dotación de mochilas forestales y equipo especializado (ropa de protección), machetes, rastrillos, azadones para los brigadistas y personal encargado del combate de incendios forestales."
          ]
        }
      },
      {
        "Contenido": "Identificación de las fortalezas, limitaciones, oportunidades, amenazas, prioridades identificadas",
        "Descripcion": {
          "Fortalezas": [
            "Disponibilidad de 15 mochilas forestales operativas para tareas de restauración y manejo de incendios.",
            "Conocimiento acerca del chaqueo sin quema, capacitación por parte de la organización Cáritas.",
            "Existencia de viveros en las comunidades de Riondo y Alto Colorado para apoyar la reforestación.",
            "Presencia del comité de agua en la comunidad de Asunción, que puede liderar acciones locales.",
            "Identificación de las tomas de agua como zonas prioritarias para restauración, lo que permite planificar con enfoque estratégico.",
            "Disponibilidad de opciones como la regeneración natural para restaurar áreas afectadas."
          ],
          "Oportunidades": [
            "Posibilidad de reforestar y regenerar las tomas de agua como acción prioritaria para garantizar el acceso al recurso hídrico.",
            "Alianzas estratégicas con fundaciones como Cáritas, WCS, Fundación Natura, Construir, entre otras, para articular y coordinar acciones.",
            "Implementación de Sistemas Agroforestales (SAFs) como una medida para mejorar la economía del municipio mientras se reduce la deforestación."
          ],
          "Debilidades": [
            "26 mochilas forestales fuera de servicio por mantenimiento, limitando la capacidad operativa.",
            "Débil coordinación con el municipio y las comunidades locales.",
            "Falta de compromiso sostenible de algunas comunidades con el prendimiento de plantines.",
            "Necesidad de conformar un equipo de trabajo para liderar y coordinar las actividades de restauración.",
            "Falta de recursos económicos para apoyar acciones complementarias como los SAFs (Sistemas Agroforestales).",
            "Dependencia de apoyo externo para articular acciones y llevar a cabo proyectos a largo plazo."
          ],
          "Amenazas": [
            "Ampliación de la frontera agrícola, principal causa de deforestación en la zona.",
            "Sequías e incendios forestales como los sufridos en 2023, que representan riesgos constantes para los proyectos de restauración.",
            "Desafíos climáticos que afectan el crecimiento de plantines y limitan la efectividad de la reforestación"
          ]
        }
      },
      {
        "Contenido": "Elaboración del acta de acuerdos y validación",
        "Descripcion": {
          "Texto": "En el marco de la mesa de trabajo realizada para la restauración de áreas quemadas en el municipio de Rurrenabaque, se identificaron las comunidades más afectadas entre ellas: Retiro, El Paraíso, Carmen Florida, Real Bent, San Antonio de Sant, La Embocada del Quiquibey, Asunción del Quiquibey, Puerto Motor y Rurrenabaque, donde los representantes de diferentes comunidades participaron activamente en la identificación de las zonas más afectadas por los incendios forestales, generando la necesidad de implementar acciones para su recuperación. Durante la mesa, se analizó el estado de las áreas afectadas y se propusieron acciones de recuperación, como la reforestación con especies nativas forestales maderables, no maderables y frutales. El acta de acuerdos fue elaborada con base en las discusiones y propuestas presentadas por los comunarios, asegurando que las estrategias de restauración fueran inclusivas, adaptadas a la realidad del municipio y alineadas con los objetivos del proyecto. Posteriormente, el documento fue validado mediante la firma de los representantes de las comunidades, autoridades municipales y otros actores, garantizando así el compromiso colectivo para la ejecución de las acciones.",
        }
      }
    ],
    "Tiquipaya": [
      {
        "Intro": "Durante el desarrollo de la mesa de trabajo en el municipio de Tiquipaya, se contó con la participación de técnicos del municipio, así mismo con representantes de la Gobernación, representantes de las comunidades, representantes del Área Protegida Parque Nacional Tunari y técnicos de la Autoridad de Fiscalización y Control Social de Bosques y Tierra (ABT) departamental, siendo esta mesa un espacio para la socialización y la validación de los criterios técnicos y socioambientales identificados, así como el intercambio de criterios y conocimientos respecto a las áreas que han sido afectadas por incendios forestales, la identificación de las principales necesidades y acciones para restaurar y recuperar las áreas afectadas. En ese sentido, a continuación, se describen los principales aportes de los participantes de la mesa de trabajo.",
      },
      {
        "Contenido": "Definición de criterios técnicos y socioambientales",
        "Descripcion": {
          "Texto": "Se realizó la presentación de la metodología de construcción de criterios técnicos y socio-ambientales, donde se explicó las variables seleccionadas:",
          "Adicional": ""
        }
      },
      {
        "Contenido": "Identificar y priorizar áreas para la restauración",
        "Descripcion": "Los participantes coincidieron que las áreas que deben ser priorizadas para la restauración o recuperación deben estar relacionadas con acciones de prevención, como es el caso de la implementación de cortinas rompefuegos y vertientes artificiales, siendo estas acciones priorizadas por los representantes de la comunidad de Molinos. Asimismo, estas áreas identificadas son factibles para implementar estas acciones de restauración, existen caminos y la predisposición de la comunidad. ",
      },
      {
        "Contenido": "Identificar acciones de restauración y/o recuperación y principales necesidades",
        "Descripcion": {
          "Texto": "",
          "Acciones": [
            "Implementar cortinas rompefuegos,   para prevenir y controlar incendios forestales, para estas acciones se requiere materiales y herramientas como ser: motosierras, desbrozadoras, maclao, entre otros.",
            "Realizar la socialización con las organizaciones sociales, para coordinar las acciones que se identifiquen como prioritarias y consensuar acuerdos y el compromiso por parte de los beneficiarios.",
            "Conformar una plataforma articulada (GAM, GAD, ONGs, SERNAP, APMT y otros), para coordinar acciones y aunar esfuerzo y dar continuidad a las acciones que se van a realizar a través de un plan de acción.",
            "Implementar vertientes artificiales, con el uso de geomembranas, tanques de agua, materiales como cemento, tubos, entre otros; estas vertientes serán útiles para almacenar agua tanto para la atención de incendios forestales como para las acciones de reforestación. Para esta actividad se requiere realizar una visita in situ y efectuar una evaluación de factibilidad técnica, económica, ambiental y social.",
            "Identificar alternativas productivas para las comunidades, articuladas con la conservación, como por ejemplo reforestación con especies frutales, melíferas para la producción de miel, así como especies como la retama, tuna, entre otros.",
            "Realizar una articulación y aunar esfuerzos a nivel institucional (GAM, GAD, ABT, APMT, SERNAP, entre otros), para el fortalecimiento de capacidades en la sensibilización y concientización a Unidades Educativas.",
            "Realizar la capacitación en la valorización de los saberes ambientales, ancestrales para la conservación de los recursos naturales; así como, el fortalecimiento y conformación de brigadas comunales forestales, ",
            "Apoyo logístico en combate contra incendios forestales, existe la necesidad de contar con equipos de protección personal y equipamiento como ser: mochilas forestales y bate fuegos."
          ]
        }
      },
      {
        "Contenido": "Identificación de las fortalezas, limitaciones, oportunidades, amenazas, prioridades identificadas",
        "Descripcion": {
          "Fortalezas": [
            "Existencia de equipamiento y plantines forestales.",
            "Compromiso de actores locales en la restauración de las áreas afectadas.",
            "Presencia de una ley comunal en la comunidad de Molinos para garantizar la reforestación.",
            "Seguimiento y monitoreo de áreas reforestadas por el equipo de bomberos de Molinos.",
            "Mantenimiento de áreas reforestadas.",
            "Aproximadamente 230 afiliados en la comunidad de Molinos, permiten una base de apoyo para las acciones de restauración."
          ],
          "Oportunidades": [
            "Posibilidad de articular acciones de capacitación para mejorar la eficiencia en la restauración.",
            "Implementación de vertientes artificiales con geomembranas y tanques de agua para asegurar la hidratación de las áreas reforestadas.",
            "Identificación de áreas potenciales para reforestar con menor accesibilidad, asegurando el prendimiento de los plantines.",
            "Posibilidad de apoyo por parte del Gobierno Departamental en la capacitación y conformación de brigadas comunitarias."
          ],
          "Debilidades": [
            "Falta de apoyo o resultados satisfactorios con las Fuerzas Armadas y voluntarios en acciones de restauración.",
            "Necesidad de mayor compromiso de algunos actores locales para fortalecer el proceso de reforestación.",
            "Falta de estrategias claras para el mantenimiento continuo de las áreas reforestadas."
          ],
          "Amenazas": [
            "Mayor accesibilidad a las zonas afectadas incrementa la recurrencia de incendios.",
            "Expansión agrícola sin regulación, lo que puede impactar negativamente en los esfuerzos de restauración.",
            "Apertura de caminos en áreas donde está prohibido, generando riesgos ambientales adicionales.",
            "Falta de compromiso de algunos sectores que podrían ralentizar los esfuerzos de restauración."
          ]
        }
      },
      {
        "Contenido": "Elaboración del acta de acuerdos y validación",
        "Descripcion": {
          "Texto": "En el marco de la mesa de trabajo realizada para la restauración de áreas quemadas en el municipio de Tiquipaya, se identificó a la comunidad de Molinos como una de las más afectadas por los incendios forestales. Los representantes de esta comunidad participaron activamente en la identificación de las zonas dañadas, destacando acciones para su recuperación. Durante la mesa, en la que también estuvieron presentes personal de la ABT, SERNAP y Gobernación y otros actores, se analizó el estado de las áreas afectadas y se propusieron acciones inmediatas, como es el caso de la implementación de vertientes artificiales y cortinas rompefuegos, y reforestación con SAFs. El acta de acuerdos fue elaborada con base en las discusiones y propuestas presentadas por los comunarios, asegurando que las acciones fueran inclusivas, adaptadas a la realidad del municipio y alineadas con los objetivos del proyecto. Posteriormente, el documento fue validado mediante la firma de los representantes de las comunidades, autoridades municipales, personal de la ABT y otros actores involucrados, garantizando así el compromiso colectivo para la ejecución de las acciones.",
        }
      }
    ],
    "San Borja": [
      {
        "Intro": "Durante el desarrollo de la mesa de trabajo en el municipio de San Borja, se contó con la participación de representantes de comunidades indígenas, técnicos del SERNAP, ABT y técnicos del municipio, siendo esta mesa un espacio para la socialización y la validación de los criterios técnicos y socioambientales identificados, así como el intercambio de criterios y conocimientos respecto a las áreas que han sido afectadas por incendios forestales, y la identificación de las principales necesidades y acciones para restaurar y recuperar las áreas afectadas. En ese sentido, a continuación, se describen los principales aportes de los participantes de la mesa de trabajo."
      },
      {
        "Contenido": "Definición de criterios técnicos y socioambientales",
        "Descripcion": {
          "Texto": "Se realizó la presentación de la metodología de construcción de criterios técnicos y socio-ambientales, donde se explicó las variables seleccionadas",
          "Adicional": "En base al análisis de los criterios técnicos y socioambientales, los participantes consideraron de importancia alta incorporar un criterio adicional, siendo este la identificación de los Ojos de agua, consideradas como áreas de alto valor de conservación. Asimismo, el personal técnico de la ABT, indicó la importancia de considerar el tema normativo para identificar las áreas a priorizar, siendo que muchas de las áreas afectadas se encuentran con procesos administrativos sancionadores."
        }
      },
      {
        "Contenido": "Identificar y priorizar áreas para la restauración",
        "Descripcion": "Los participantes coincidieron que las áreas que deben ser priorizadas para la restauración o recuperación deben ser los ojos de agua, de aquellas comunidades que fueron afectadas por los incendios forestales, como ser: Pachiuval, Manguitas, San Ramon, Cara Cara, Puerto Yucumo, San Jose,  Rio Hondo, San Jacinto, San Miguel, Edén y Canan. Argumentando que una vez que transcurrieron los incendios forestales en las fuentes de agua, la cantidad y calidad del agua fue disminuyendo, afectando al consumo local. Asimismo, estas áreas priorizadas, son factibles para implementar acciones de restauración, existe accesibilidad a los sitios y manifestando el interés de las mismas.",
      },
      {
        "Contenido": "Identificar acciones de restauración y/o recuperación y principales necesidades",
        "Descripcion": {
          "Texto": "Las acciones principales identificadas para la recuperación de los ojos de agua, fueron las siguientes:",
          "Acciones": [
            "Reforestación con especies nativas forestales maderables y no maderables, así como frutales, como ser: i) Palma real; ii) Mara; iii) Cedro; iv) Palo Maria; v) Tajibo; vi) Trompillo; vii) Seke; ix) Tarumá; x) Ochoó; xi) Mapajo; xii) Cacao nativo; xiii) Asaí; xiv) Pitajaya; xv) Palta; xvi) Achachairú y xvii) Cítricos. Realizando una combinación de las diferentes especies descritas, para la implementación de sistemas agroforestales.",
            "Coordinar con la Subalcaldía El Palmar, para contar con una firma de convenio intergubernativo y fortalecer el vivero forestal a través de la dotación de insumos y herramientas para la producción de plantines forestales maderables, no maderables y frutales.",
            "Implementar proyectos productivos como ser: piscicultura, cultivos de cacao, sistemas agroforestales, entre otros, para que las comunidades sean las beneficiadas y se diversifique sus medios de vida.",
            "Apertura de sendas como cortinas rompefuegos, como una medida preventiva ante la presencia de incendios forestales.",
            "Fortalecimiento de capacidades: Reforzar la capacitación teórica y práctica de chaqueo sin quema, prevención de incendios forestales, técnicas del manejo del fuego, alternativas al uso del fuego, cortinas rompe fuegos y quemas controladas a las comunidades, en coordinación con el GAM y SERNAP.",
            "Así como realizar campañas de concientización y sensibilización sobre el cuidado del medio ambiente, bosques, ojos de agua entre otros, a las diferentes comunidades.",
            "Capacitación y conformación de brigadas forestales para el control de incendios forestales.",
            "Apoyo logístico en combate contra incendios forestales: Necesidad de provisión de mochilas forestales o fumigadoras, machetes, palas y baldes, para los brigadistas y personal encargado del control y combate de incendios forestales, mejorando así la capacidad de respuesta en situaciones de emergencia."
          ]
        }
      },
      {
        "Contenido": "Identificación de las fortalezas, limitaciones, oportunidades, amenazas, prioridades identificadas",
        "Descripcion": {
          "Fortalezas": [
            "Las comunidades se encuentran interesadas en la capacitación de alternativas al uso del fuego.",
            "El municipio cuenta con una Unidad de Gestión de Riesgos (UGR).",
            "El municipio cuenta con el Plan de Contingencia Municipal elaborado y su protocolo de alerta temprana."
          ],
          "Oportunidades": [
            "Es importante conformar grupos comunales o comités para el control de incendios forestales.",
            "Las comunidades se encuentran interesadas en la capacitación de alternativas al uso del fuego.",
            "Elaboración de un plan de acción para determinar la superficie a reforestar."
          ],
          "Debilidades": [
            "El municipio no cuenta con normas locales y comunales, en cuanto al manejo del fuego.",
            "La Subalcaldía de Yucumo, no cuenta con un vivero forestal.",
            "No existen capacitaciones a las comunidades respecto al control de incendios forestales.",
            "Falta de recursos económicos para la prevención, control y combate de incendios forestales y post evento.",
            "No se cuenta con un Sistema de Alerta Temprana (SAT), a nivel municipio."
          ],
          "Amenazas": [
            "Una de las principales amenazas son la presencia de sequías e incendios forestales, representan riesgos constantes para los proyectos de restauración.",
            "Escasez de agua en el subsuelo, provocando menor cantidad para el consumo, y siendo que el agua es un recurso vital.",
            "Existe migración de la población de las comunidades a las ciudades."
          ]
        }
      },
      {
        "Contenido": "Elaboración del acta de acuerdos y validación",
        "Descripcion": {
          "Texto": "En el marco de la mesa de trabajo efectuada en el municipio de San Borja, los participantes de diferentes comunidades e instituciones participaron activamente en la identificación de las zonas más afectadas por los incendios forestales, generando la necesidad de implementar acciones inmediatas para su recuperación. Durante el desarrollo de la mesa, se analizó el estado de las áreas afectadas y se propusieron acciones de reforestación en sitios con la presencia de ojos de agua, para ello se consideraron especies nativas forestales maderables y no maderables, así como la implementación de sistemas agroforestales, y el fortalecimiento de capacidades en la prevención y control de incendios forestales. El acta de acuerdos fue elaborada en base a los aportes, discusiones y propuestas presentadas por los participantes, asegurando que las acciones fueran inclusivas, adaptadas a la realidad del municipio y alineadas con los objetivos del proyecto. Posteriormente, se socializó el acta elaborada y en base a ello se procedió con la validación del documento, mediante la firma de los representantes de las comunidades, autoridades municipales y otros actores presentes, garantizando así el compromiso colectivo para la ejecución de las acciones identificadas.",
        }
      }
    ],
    "Vinto": [
       {
        "Intro": "Durante el desarrollo de la mesa de trabajo en el municipio de Vinto, se contó con la participación de representantes de entidades gubernamentales a nivel municipal y departamental, así como de comunidades locales e institucionales como el SERNAP y la ABT departamental de Cochabamba. Esta mesa de trabajo se consolidó como un espacio para la socialización y validación de criterios técnicos y socioambientales, así como para el intercambio de conocimientos sobre las áreas afectadas por incendios forestales. Además, permitió identificar las principales necesidades y definir acciones estratégicas para su restauración y recuperación. En ese sentido, a continuación, se describen los principales aportes de los participantes de la mesa de trabajo."
      },
      {
        "Contenido": "Definición de criterios técnicos y socioambientales",
        "Descripcion": {
          "Texto": "Se realizó la presentación de la metodología de construcción de criterios técnicos y socio-ambientales, donde se explicó las variables seleccionadas:",
          "Adicional": ""
        }
      },
      {
        "Contenido": "Identificar y priorizar áreas para la restauración",
        "Descripcion": "Los participantes coincidieron que las áreas que deben ser priorizadas para la restauración o recuperación deben ser las comunidades que fueron afectadas por los incendios forestales, como ser: Combuyo, Pairumani, Tajra. Asimismo, estas áreas identificadas son factibles para implementar acciones de restauración, existen caminos y la predisposición de las comunidades.",
      },
      {
        "Contenido": "Identificar acciones de restauración y/o recuperación y principales necesidades",
        "Descripcion": {
          "Texto": "Las acciones principales identificadas para la recuperación de los ojos de agua, fueron las siguientes:",
          "Acciones": [
            "Implementar brigadas comunales: para prevenir y controlar incendios forestales, para estas acciones se requiere materiales y herramientas como ser: mochilas forestales y batefuegos",
            "Realizar la socialización con las organizaciones sociales, para coordinar las acciones que se identifiquen como prioritarias y consensuar acuerdos y el compromiso por parte de los beneficiarios.",
            "Fortalecer el vivero municipal, a través de la provisión de insumos y materiales para la producción de plantines forestales de especies nativas, exóticas y frutales.",
            "Identificar alternativas productivas para las comunidades, articuladas con la conservación: como por ejemplo reforestación con especies frutales, melíferas para la producción de miel, así como especies como la retama, tuna, entre otros; como alternativas productivas.",
            "Realizar acciones de reforestación, para ello se debe coordinar una visita in situ al área a reforestar, con la finalidad de considerar que el área se encuentre saneada para evitar conflictos y la socialización con las comunidades.",
            "Reforestar con especies nativas y exóticas como ser: i) Pino radiata, ii) Ciprés, iii) Kewiña, iv) Kiswara, v) Retama; vi) Tuna, entre otros.",
            "Implementar brigadas comunales: para prevenir y controlar incendios forestales, para estas acciones se requiere materiales y herramientas como ser: mochilas forestales y batefuegos",
            "Es importante realizar la socialización con las organizaciones sociales, para coordinar las acciones que se identifiquen como prioritarias y consensuar acuerdos y el compromiso por parte de los beneficiarios.",
            "Fortalecimiento del vivero municipal: A través de la provisión de insumos y materiales para la producción de plantines forestales de especies nativas, exóticas y frutales.",
            "Identificar alternativas productivas para las comunidades, articuladas con la conservación: como por ejemplo reforestación con especies frutales, melíferas para la producción de miel, así como especies como la retama, tuna, entre otros; como alternativas productivas.",
            "Realizar acciones de reforestación: Es importante realizar la visita in situ al área a reforestar, con la finalidad de considerar que el área se encuentre saneada para evitar conflictos y la socialización con las comunidades.",
            "Asimismo, se tiene el interés por parte de la comunidad para reforestar con especies nativas y exóticas como ser: pino radiata, cipres, kewiña, kiswara, frutales, entre otros.",
            "Realizar el intercambio de experiencias a través de visitas a parcelas agroforestales exitosas, para incentivar la replicabilidad.",
            "Realizar una articulación y aunar esfuerzos a nivel institucional (GAM, GAD, ABT, APMT, SERNAP, entre otros), para el fortalecimiento de capacidades en la sensibilización y concientización a Unidades Educativas.",
            "Realizar la capacitación en la valorización de los saberes ambientales, ancestrales para la conservación de los recursos naturales.",
            "Fortalecer y conformar brigadas comunales forestales, y equipar con mochilas forestales y bate fuegos.",
            "Realizar un convenio multilateral con el GAM, GAD, SERNAP, APMT y otros para realizar acciones de capacitación en temas de prevención de incendios forestales.",
            "Gestionar un apoyo logístico en combate contra incendios forestales, se tiene la necesidad de equipos de protección personal."
          ]
        }
      },
      {
        "Contenido": "Identificación de las fortalezas, limitaciones, oportunidades, amenazas, prioridades identificadas",
        "Descripcion": {
          "Fortalezas": [
            "Existencia de un vivero municipal y un laboratorio de bionanotecnología.",
            "Presencia de una brigada municipal con 20 personas dedicadas a la restauración.",
            "Interés en implementar parcelas agroforestales.",
            "Existencia de plantaciones forestales con especies seleccionadas en la comunidad de Aguada.",
            "Coordinación con ONGs y entidades como Armonía, Voces Libres, SERNAP y GAM para la reforestación.",
            "Atajados disponibles en la comunidad de Combuyo Chico.",
            "Fortalecimiento del vivero municipal para la producción de especies destinadas a la recuperación de áreas afectadas."
          ],
          "Oportunidades": [
            "Posibilidad de capacitación en sensibilización sobre la gestión de riesgos en unidades educativas con apoyo del Gobierno Departamental, SERNAP, GAM y APMT.",
            "Implementación de reforestación con especies nativas y exóticas.",
            "Coordinación con responsables de agua potable para la construcción de atajados.",
            "Elaboración de un plan de acción para determinar la superficie a reforestar.",
            "Posibilidad de dotación de mochilas forestales y batefuegos para mejorar la capacidad de respuesta."
          ],
          "Debilidades": [
            "La brigada municipal carece de equipos adecuados para una respuesta eficiente.",
            "Falta de geomembranas y canalización en los atajados de la comunidad de Combuyo Chico.",
            "Necesidad de fortalecimiento de las medidas preventivas antes, durante y después de los incendios forestales.",
            "Falta de una estrategia clara para evitar conflictos en el uso de áreas saneadas."
          ],
          "Amenazas": [
            "Posibles conflictos por la falta de delimitación de áreas saneadas.",
            "Riesgo de insuficiente coordinación interinstitucional que pueda afectar la eficacia de las acciones de reforestación.",
            "Dependencia de financiamiento externo y apoyo institucional para la ejecución de planes de restauración.",
            "Falta de equipamiento adecuado que limite la acción efectiva ante nuevos incendios."
          ]
        }
      },
      {
        "Contenido": "Elaboración del acta de acuerdos y validación",
        "Descripcion": {
          "Texto": "En el marco de la mesa de trabajo realizada en el municipio de Vinto, se identificaron las comunidades de Combuyo, Pairumani y Tajra como las más afectadas por los incendios forestales, con base en la evaluación técnica y la participación activa de los representantes comunales. Durante la mesa de trabajo, donde participaron representantes de la Comunidad Combuyo Chico, técnicos del SERNAP, técnicos de la ABT, técnicos de la Gobernación y técnicos del gobierno municipal, se realizó la identificación de las áreas priorizadas. Como resultado, se propusieron acciones de recuperación, tales como la reforestación con especies nativas, exóticas y frutales, fortalecimiento de capacidades e intercambio de experiencias, entre otros. El acta de acuerdo se elaboró con base a las necesidades identificadas por los participantes, asegurando que las acciones de restauración estuvieran alineadas con los objetivos del proyecto, adaptadas a las condiciones socioambientales del municipio. Posteriormente, el documento fue validado mediante la firma de los representantes de las comunidades, autoridades municipales, representantes del Área Protegida Tunari, técnicos de la ABT, formalizando así el compromiso interinstitucional para la ejecución de las acciones propuestas. ",
        }
      }
    ]
  }
}


