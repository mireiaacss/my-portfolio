import type { Dictionary } from './en';

export const ca: Dictionary = {
  meta: {
    role: 'Ciència de Dades i Machine Learning',
    description:
      'Aspirant a Data Scientist i ML Engineer a Esade (ADE + IA). Aprenentatge automàtic aplicat, anàlisi estadística i sistemes basats en dades que generen valor de negoci mesurable.',
    ogImageAlt: 'Mireia Calviño Saez, Ciència de Dades i Machine Learning',
  },
  a11y: {
    skip: 'Salta al contingut',
    home: 'Mireia Calviño Saez, inici',
    primaryNav: 'Principal',
    languageNav: 'Idioma',
    stack: 'Tecnologies:',
    repoOnGitHub: 'repositori a GitHub',
  },
  nav: { experience: 'Experiència', projects: 'Projectes', skills: 'Habilitats', contact: 'Contacte' },
  hero: {
    location: 'Barcelona',
    careerTarget: 'Aspirant a Data Scientist / Machine Learning Engineer',
    lead: 'Desenvolupo models d’aprenentatge automàtic aplicat, anàlisis estadístiques i sistemes basats en dades per resoldre problemes operatius reals i generar valor de negoci mesurable.',
    selectedWork: 'Projectes seleccionats',
    email: 'Correu',
    trajectoryTitle: 'Trajectòria actual',
    trajectory: [
      { when: 'Ara', role: 'Assistència docent en IA agèntica', detail: 'AI Bootcamp per a programes MBA i de màster' },
      { when: 'Estiu 2026', role: 'Pràctiques en Dades i Estratègia de Negoci', detail: 'MedTech · models predictius de captació' },
      { when: 'Promoció 2028', role: 'ADE + Intel·ligència Artificial', detail: 'Doble grau, Universitat Ramon Llull' },
    ],
  },
  experience: {
    title: 'Experiència',
    items: [
      {
        role: 'Assistència docent en IA agèntica',
        context: 'AI Bootcamp · MBA, MKT & MSM, MIM & FIN',
        location: 'Barcelona',
        bullets: [
          'Vaig impartir laboratoris pràctics sobre eines d’IA agèntica (Claude Code, Codex, Antigravity i Kiro) per a estudiants de postgrau en negocis.',
          'Vaig guiar l’alumnat en la creació de skills, subagents i fitxers d’instruccions per automatitzar els seus fluxos de treball recurrents.',
          'Vaig acompanyar cada grup des del primer agent fins al desplegament: connexió de serveis externs mitjançant connectors MCP, programació de tasques i posada en marxa d’automatitzacions.',
        ],
      },
      {
        role: 'Pràctiques en Dades i Estratègia de Negoci',
        context: 'MedTech',
        location: 'En remot',
        bullets: [
          'Vaig automatitzar l’auditoria de documentació estratègica amb un flux assistit per IA basat en fitxers d’instruccions estructurats, detectant incoherències abans de la revisió per part d’inversors.',
          'Vaig transformar dades HealthTech heterogènies i no estructurades en estimacions de corbes d’adopció i models predictius de captació de clients per a la planificació d’escenaris.',
          'Vaig construir models reproduïbles de sensibilitat financera i vaig estructurar l’analítica de la Virtual Data Room per als comitès d’inversió.',
        ],
      },
    ],
    educationTitle: 'Formació',
    degree: 'Doble Grau en Administració d’Empreses i Intel·ligència Artificial',
    school: 'Esade Business & Law School, Universitat Ramon Llull',
    coursework: [
      'Inferència estadística',
      'Optimització i modelització computacional',
      'Estructures de dades i algorismes',
      'Aprenentatge automàtic',
      'Aprenentatge profund',
      'Solucions al núvol',
    ],
    distinctionsTitle: 'Distincions',
    distinctions: [
      'Matrícula d’Honor a Introducció a la Informació Quàntica, millor nota de la promoció',
      'Membre d’Enode: recerca sobre Transformers i un projecte d’IA aplicada d’un any',
      'Certificació Data Scientist in Python de DataCamp (en curs)',
    ],
  },
  projects: {
    title: 'Projectes destacats',
    kicker: 'Aprenentatge automàtic aplicat: de sensors industrials a visió per computador i entrenament que preserva la privacitat.',
    featured: 'Destacat',
    repository: 'Repositori',
    noMetric: 'Treball exploratori: sense mètrica principal.',
    items: {
      'predictive-maintenance': {
        title: 'Manteniment predictiu industrial i alertes de telemetria',
        summary:
          'Entren lectures de sensors; surten el risc d’avaria i una alerta a manteniment: un model predictiu connectat directament a la resposta davant d’incidències.',
        bullets: [
          'Vaig modelar les avaries de màquines a partir de telemetria de sensors industrials (temperatura de l’aire i de procés, velocitat de rotació, parell i desgast de l’eina), amb només un 3,3 % d’avaries en 10.000 registres, optimitzant F1 amb ponderació de classes en una cerca en graella amb validació creuada de 5 particions.',
          'Vaig traduir la probabilitat d’avaria del Random Forest a nivells d’alerta primerenca (estable, inspecció, crític) per detectar avaries abans que falli l’equip.',
          'Vaig automatitzar les alertes d’incidències: un LLM redacta un diagnòstic de dues frases i un flux d’n8n l’envia per Telegram a l’equip de manteniment.',
        ],
        metricCaption: 'ROC-AUC del Random Forest amb un 3,3 % d’avaries',
      },
      'solar-dust': {
        title: 'Eina de manteniment amb IA per a plaques solars',
        summary:
          'Puja una foto de la instal·lació i obtén un diagnòstic de brutícia, recomanacions de manteniment i el cost de no actuar.',
        bullets: [
          'Vaig ajustar (fine-tuning) un Vision Transformer (ViT) per classificar la brutícia per pols a partir d’imatges de la instal·lació, amb una puntuació de confiança per a cada predicció.',
          'Vaig integrar una capa posterior amb Llama 3.3 70B que estima la pèrdua econòmica local a partir de la degradació de potència, les tarifes elèctriques i la potència instal·lada.',
          'Desplegada com a aplicació local amb Gradio sense emmagatzemar cap imatge, per protegir la privacitat.',
        ],
        metricCaption: 'models en un mateix pipeline: la visió diagnostica i l’LLM quantifica l’impacte',
      },
      'poverty-vulnerability': {
        title: 'Anàlisi de vulnerabilitat i pobresa de llars a Costa Rica',
        summary:
          'Quan els quatre nivells de pobresa no es deixaven separar, la pregunta útil va passar a ser: quines llars necessiten ajuda primer?',
        bullets: [
          'Vaig diagnosticar un solapament estructural de les distribucions entre nivells de pobresa, on els models multiclasse estàndard s’estancaven en 0,42 de macro-F1.',
          'Vaig dissenyar un marc combinat de selecció de variables en tres vies (correlació, informació mútua i importància en Random Forest) que va aïllar 17 predictors d’alt senyal.',
          'Vaig replantejar el problema com un triatge binari (llars pobres i no pobres) i vaig assolir 0,81 de ROC-AUC i 0,68 de F1 en la classe vulnerable amb regressió logística i una partició estratificada per llar per evitar fuites d’informació entre membres d’una mateixa llar.',
        ],
        metricCaption: 'ROC-AUC en triatge binari, davant de 0,42 de macro-F1 en multiclasse',
        stackExtra: ['Inferència estadística', 'Article de recerca'],
      },
      'federated-learning': {
        title: 'Captació de clients que preserva la privacitat',
        summary:
          'Un model de contractació entrenat en tres bancs sense que cap registre de client surti de la seva entitat.',
        bullets: [
          'Vaig implementar Federated Averaging en tres nodes bancaris, compartint només els pesos del model mentre les dades en brut romanen descentralitzades.',
          'Vaig abordar un desequilibri de classes 88/12 amb SMOTE local a cada node i llindars de decisió ajustats per F1.',
          'Vaig presentar les comparatives entre entrenament federat i centralitzat en un tauler MLOps interactiu amb Streamlit.',
        ],
        metricCaption: 'ROC-AUC sense compartir cap registre en brut',
      },
      'quantum-portfolio': {
        title: 'Optimitzador de carteres preparat per a computació quàntica',
        status: 'Exploratori / Experimental',
        summary: 'Una exploració paral·lela de com la selecció de carteres es trasllada al maquinari de recuit quàntic.',
        bullets: [
          'Vaig formular la selecció de carteres de Markowitz amb restricció de cardinalitat com un hamiltonià QUBO (optimització binària quadràtica sense restriccions).',
          'Vaig aplicar el shrinkage de Ledoit-Wolf per regularitzar matrius de covariància amb poques observacions per actiu.',
          'Vaig explorar el comportament de convergència amb el recuit simulat de D-Wave Neal davant de mètodes clàssics de referència.',
        ],
      },
    },
  },
  skills: {
    title: 'Habilitats',
    groups: [
      {
        group: 'Aprenentatge automàtic clàssic',
        items: ['Regressió logística', 'Random Forest', 'XGBoost', 'SGD', 'Sistemes de recomanació'],
      },
      {
        group: 'Aprenentatge profund i visió',
        items: ['Xarxes neuronals profundes', 'CNN', 'Vision Transformers (ViT)', 'PyTorch', 'Hugging Face'],
      },
      {
        group: 'Dades i optimització',
        items: [
          'Algorismes genètics',
          'Monte Carlo',
          'Aprenentatge amb classes desequilibrades (SMOTE i ponderació de classes)',
          'Validació creuada',
          'Selecció de variables i prevenció de fuites de dades',
        ],
      },
      {
        group: 'Eines, orquestració i núvol',
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
    spokenTitle: 'Idiomes',
    languages: [
      { name: 'Castellà', level: 'Natiu' },
      { name: 'Català', level: 'Natiu' },
      { name: 'Anglès', level: 'C1' },
      { name: 'Alemany', level: 'Bàsic' },
    ],
  },
  contact: {
    title: 'Contacte',
    callout:
      'Disponible per a posicions en Data Science, Machine Learning, IA aplicada i recerca acadèmica o industrial. Parlem-ne.',
    basedIn: 'Ubicació',
    location: 'Barcelona',
  },
  footer: { colophon: 'Compost en Newsreader i Geist. Fet amb Astro.', backToTop: 'Torna a dalt' },
  jobTitle: 'Assistència docent en IA agèntica',
};
