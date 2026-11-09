import type { Dictionary } from './en';

export const es: Dictionary = {
  meta: {
    role: 'Ciencia de Datos y Machine Learning',
    description:
      'Aspirante a Data Scientist y ML Engineer en Esade (ADE + IA). Machine learning aplicado, análisis estadístico y sistemas basados en datos que generan valor de negocio medible.',
    ogImageAlt: 'Mireia Calviño Saez, Ciencia de Datos y Machine Learning',
  },
  a11y: {
    skip: 'Saltar al contenido',
    home: 'Mireia Calviño Saez, inicio',
    primaryNav: 'Principal',
    languageNav: 'Idioma',
    stack: 'Tecnologías:',
    repoOnGitHub: 'repositorio en GitHub',
  },
  nav: { experience: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', contact: 'Contacto' },
  hero: {
    location: 'Barcelona, España',
    careerTarget: 'Aspirante a Data Scientist / Machine Learning Engineer',
    lead: 'Desarrollo modelos de machine learning aplicado, análisis estadísticos y sistemas basados en datos para resolver problemas operativos reales y generar valor de negocio medible.',
    selectedWork: 'Proyectos seleccionados',
    email: 'Correo',
    trajectoryTitle: 'Trayectoria actual',
    trajectory: [
      { when: 'Ahora', role: 'Asistencia docente en IA agéntica', detail: 'AI Bootcamp para programas MBA y de máster' },
      { when: 'Verano 2026', role: 'Prácticas en Data y Estrategia de Negocio', detail: 'MedTech · modelos predictivos de captación' },
      { when: 'Promoción 2028', role: 'ADE + Inteligencia Artificial', detail: 'Doble grado, Universitat Ramon Llull' },
    ],
  },
  experience: {
    title: 'Experiencia',
    items: [
      {
        role: 'Asistencia docente en IA agéntica',
        context: 'AI Bootcamp · MBA, MKT & MSM, MIM & FIN',
        location: 'Barcelona',
        bullets: [
          'Impartí laboratorios prácticos sobre herramientas de IA agéntica (Claude Code, Codex, Antigravity y Kiro) para estudiantes de posgrado en negocios.',
          'Guié al alumnado en la creación de skills, subagentes y archivos de instrucciones para automatizar sus flujos de trabajo recurrentes.',
          'Acompañé a cada grupo desde su primer agente hasta el despliegue: conexión de servicios externos mediante conectores MCP, programación de tareas y puesta en marcha de automatizaciones.',
        ],
      },
      {
        role: 'Prácticas en Data y Estrategia de Negocio',
        context: 'MedTech',
        location: 'En remoto',
        bullets: [
          'Automaticé la auditoría de documentación estratégica con un flujo asistido por IA basado en archivos de instrucciones estructurados, detectando incoherencias antes de la revisión por parte de inversores.',
          'Transformé datos HealthTech heterogéneos y no estructurados en estimaciones de curvas de adopción y modelos predictivos de captación de clientes para la planificación de escenarios.',
          'Construí modelos reproducibles de sensibilidad financiera y estructuré la analítica de la Virtual Data Room para los comités de inversión.',
        ],
      },
    ],
    educationTitle: 'Formación',
    degree: 'Doble Grado en Administración de Empresas e Inteligencia Artificial',
    school: 'Esade Business & Law School, Universitat Ramon Llull',
    coursework: [
      'Inferencia estadística',
      'Optimización y modelización computacional',
      'Estructuras de datos y algoritmos',
      'Machine learning',
      'Deep learning',
      'Soluciones cloud',
    ],
    distinctionsTitle: 'Distinciones',
    distinctions: [
      'Matrícula de Honor en Introducción a la Información Cuántica, mejor nota de la promoción',
      'Miembro de Enode: investigación sobre Transformers y un proyecto de IA aplicada de un año',
      'Certificación Data Scientist in Python de DataCamp (en curso)',
    ],
  },
  projects: {
    title: 'Proyectos destacados',
    kicker: 'Machine learning aplicado: de sensores industriales a visión por computador y entrenamiento que preserva la privacidad.',
    featured: 'Destacado',
    repository: 'Repositorio',
    noMetric: 'Trabajo exploratorio: sin métrica principal.',
    items: {
      'predictive-maintenance': {
        title: 'Mantenimiento predictivo industrial y alertas de telemetría',
        summary:
          'Entran lecturas de sensores; salen el riesgo de fallo y una alerta a mantenimiento: un modelo predictivo conectado directamente a la respuesta ante incidencias.',
        bullets: [
          'Modelé el fallo de máquinas a partir de telemetría de sensores industriales (temperatura del aire y de proceso, velocidad de rotación, par y desgaste de herramienta), con solo un 3,3 % de fallos en 10.000 registros, optimizando F1 con ponderación de clases en una búsqueda en rejilla con validación cruzada de 5 particiones.',
          'Traduje la probabilidad de fallo del Random Forest a niveles de alerta temprana (estable, inspección, crítico) para detectar averías antes de que falle el equipo.',
          'Automaticé las alertas de incidencias: un LLM redacta un diagnóstico de dos frases y un flujo de n8n lo envía por Telegram al equipo de mantenimiento.',
        ],
        metricCaption: 'ROC-AUC del Random Forest con un 3,3 % de fallos',
      },
      'solar-dust': {
        title: 'Herramienta de mantenimiento con IA para paneles solares',
        summary:
          'Sube una foto de la instalación y obtén un diagnóstico de suciedad, recomendaciones de mantenimiento y el coste de no actuar.',
        bullets: [
          'Ajusté (fine-tuning) un Vision Transformer (ViT) para clasificar la suciedad por polvo a partir de imágenes de la instalación, con una puntuación de confianza en cada predicción.',
          'Integré una capa posterior con Llama 3.3 70B que estima la pérdida económica local a partir de la degradación de potencia, las tarifas eléctricas y la potencia instalada.',
          'Desplegada como aplicación local en Gradio sin almacenar ninguna imagen, para proteger la privacidad.',
        ],
        metricCaption: 'modelos en un mismo pipeline: la visión diagnostica y el LLM cuantifica el impacto',
      },
      'poverty-vulnerability': {
        title: 'Análisis de vulnerabilidad y pobreza en hogares de Costa Rica',
        summary:
          'Cuando los cuatro niveles de pobreza no se dejaban separar, la pregunta útil pasó a ser: ¿qué hogares necesitan ayuda primero?',
        bullets: [
          'Diagnostiqué un solapamiento estructural de las distribuciones entre niveles de pobreza, donde los modelos multiclase estándar se estancaban en 0,42 de macro-F1.',
          'Diseñé un marco combinado de selección de variables en tres vías (correlación, información mutua e importancia en Random Forest) que aisló 17 predictores de alta señal.',
          'Replanteé el problema como triaje binario (hogares pobres frente a no pobres) y alcancé 0,81 de ROC-AUC y 0,68 de F1 en la clase vulnerable con regresión logística y una partición estratificada por hogar para evitar fugas de información entre miembros del mismo hogar.',
        ],
        metricCaption: 'ROC-AUC en triaje binario, frente a 0,42 de macro-F1 en multiclase',
        stackExtra: ['Inferencia estadística', 'Artículo de investigación'],
      },
      'federated-learning': {
        title: 'Captación de clientes con preservación de la privacidad',
        summary:
          'Un modelo de contratación entrenado en tres bancos sin que ningún registro de cliente salga de su entidad.',
        bullets: [
          'Implementé Federated Averaging en tres nodos bancarios, compartiendo solo los pesos del modelo mientras los datos en bruto permanecen descentralizados.',
          'Abordé un desbalanceo de clases 88/12 con SMOTE local en cada nodo y umbrales de decisión ajustados por F1.',
          'Presenté las comparativas entre entrenamiento federado y centralizado en un dashboard MLOps interactivo en Streamlit.',
        ],
        metricCaption: 'ROC-AUC sin compartir ningún registro en bruto',
      },
      'quantum-portfolio': {
        title: 'Optimizador de carteras preparado para computación cuántica',
        status: 'Exploratorio / Experimental',
        summary: 'Una exploración paralela de cómo la selección de carteras se traslada al hardware de recocido cuántico.',
        bullets: [
          'Formulé la selección de carteras de Markowitz con restricción de cardinalidad como un hamiltoniano QUBO (optimización binaria cuadrática sin restricciones).',
          'Apliqué el shrinkage de Ledoit-Wolf para regularizar matrices de covarianza con pocas observaciones por activo.',
          'Exploré el comportamiento de convergencia con el recocido simulado de D-Wave Neal frente a métodos clásicos de referencia.',
        ],
      },
    },
  },
  skills: {
    title: 'Habilidades',
    groups: [
      {
        group: 'Machine learning clásico',
        items: ['Regresión logística', 'Random Forest', 'XGBoost', 'SGD', 'Sistemas de recomendación'],
      },
      {
        group: 'Deep learning y visión',
        items: ['Redes neuronales profundas', 'CNN', 'Vision Transformers (ViT)', 'PyTorch', 'Hugging Face'],
      },
      {
        group: 'Datos y optimización',
        items: [
          'Algoritmos genéticos',
          'Monte Carlo',
          'Aprendizaje con clases desbalanceadas (SMOTE y ponderación de clases)',
          'Validación cruzada',
          'Selección de variables y prevención de fugas de datos',
        ],
      },
      {
        group: 'Herramientas, orquestación y cloud',
        items: [
          'Python',
          'SQL',
          'pandas',
          'NumPy',
          'scikit-learn',
          'n8n',
          'Streamlit',
          'Gradio',
          'Git',
          'Docker',
          'Claude Code',
          'MCP',
          'Telegram Bot API',
        ],
      },
    ],
    spokenTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Catalán', level: 'Nativo' },
      { name: 'Inglés', level: 'C1' },
      { name: 'Alemán', level: 'Básico' },
    ],
  },
  contact: {
    title: 'Contacto',
    callout:
      'Disponible para puestos en Data Science, Machine Learning, IA aplicada e investigación académica o industrial. Hablemos.',
    basedIn: 'Ubicación',
    location: 'Barcelona, España',
  },
  footer: { colophon: 'Compuesto en Newsreader y Geist. Hecho con Astro.', backToTop: 'Volver arriba' },
};
