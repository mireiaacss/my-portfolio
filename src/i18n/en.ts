import type { ProjectSlug } from '../data/profile';

type ProjectCopy = {
  title: string;
  summary: string;
  bullets: string[];
  metricCaption?: string;
  status?: string;
  /** Extra, translatable stack terms appended after the shared stack. */
  stackExtra?: string[];
};

export type Dictionary = {
  meta: { role: string; description: string; ogImageAlt: string };
  a11y: { skip: string; home: string; primaryNav: string; languageNav: string; stack: string; repoOnGitHub: string };
  nav: { experience: string; projects: string; skills: string; contact: string };
  hero: {
    location: string;
    careerTarget: string;
    lead: string;
    selectedWork: string;
    email: string;
    trajectoryTitle: string;
    trajectory: { when: string; role: string; detail: string }[];
  };
  experience: {
    title: string;
    items: { role: string; context: string; location: string; bullets: string[] }[];
    educationTitle: string;
    degree: string;
    school: string;
    coursework: string[];
    distinctionsTitle: string;
    distinctions: string[];
  };
  projects: {
    title: string;
    kicker: string;
    featured: string;
    repository: string;
    noMetric: string;
    items: Record<ProjectSlug, ProjectCopy>;
  };
  skills: {
    title: string;
    groups: { group: string; items: string[] }[];
    spokenTitle: string;
    languages: { name: string; level: string }[];
  };
  contact: { title: string; callout: string; basedIn: string; location: string };
  footer: { colophon: string; backToTop: string };
};

export const en: Dictionary = {
  meta: {
    role: 'Data Science & Machine Learning',
    description:
      'Aspiring Data Scientist and ML Engineer at Esade (BBA + AI). Applied machine learning, statistical analysis and data-driven systems that create measurable business value.',
    ogImageAlt: 'Mireia Calviño Saez, Data Science & Machine Learning',
  },
  a11y: {
    skip: 'Skip to content',
    home: 'Mireia Calviño Saez, home',
    primaryNav: 'Primary',
    languageNav: 'Language',
    stack: 'Stack:',
    repoOnGitHub: 'repository on GitHub',
  },
  nav: { experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
  hero: {
    location: 'Barcelona, Spain',
    careerTarget: 'Aspiring Data Scientist / Machine Learning Engineer',
    lead: 'I develop applied machine learning models, statistical analyses, and data-driven systems designed to solve real operational problems and create measurable business value.',
    selectedWork: 'Selected work',
    email: 'Email',
    trajectoryTitle: 'Current trajectory',
    trajectory: [
      { when: 'Now', role: 'Teaching Assistant, Agentic AI', detail: 'AI Bootcamp for MBA and Master’s cohorts' },
      { when: 'Summer 2026', role: 'Data & Business Strategy Intern', detail: 'MedTech · predictive acquisition models' },
      { when: 'Class of ’28', role: 'BBA + Artificial Intelligence', detail: 'Double degree, Universitat Ramon Llull' },
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Teaching Assistant, Agentic AI',
        context: 'AI Bootcamp · MBA, MKT & MSM, MIM & FIN',
        location: 'Barcelona',
        bullets: [
          'Ran hands-on labs on agentic AI tools (Claude Code, Codex, Antigravity and Kiro) for graduate business students.',
          'Coached students in writing skills, subagents and instruction files that automate their recurring workflows.',
          'Took cohorts from first agent to deployment: wiring external services through MCP connectors, scheduling tasks and shipping automations.',
        ],
      },
      {
        role: 'Data & Business Strategy Intern',
        context: 'MedTech',
        location: 'Remote',
        bullets: [
          'Automated the audit of strategy documentation with an AI-assisted workflow driven by structured instruction files, catching inconsistencies before investor review.',
          'Turned heterogeneous, unstructured HealthTech data into adoption-curve estimates and predictive customer-acquisition models for scenario planning.',
          'Built reproducible financial sensitivity models and structured the Virtual Data Room analytics used by investment committees.',
        ],
      },
    ],
    educationTitle: 'Education',
    degree: 'Double Degree in Business Administration and Artificial Intelligence',
    school: 'Esade Business & Law School, Universitat Ramon Llull',
    coursework: [
      'Statistical Inference',
      'Optimisation & Computational Modelling',
      'Data Structures & Algorithms',
      'Machine Learning',
      'Deep Learning',
      'Cloud Solutions',
    ],
    distinctionsTitle: 'Distinctions',
    distinctions: [
      'Matrícula de Honor in Introduction to Quantum Information, first in cohort',
      'Member of Enode: Transformer research and a year-long applied AI project',
      'Data Scientist in Python certification, DataCamp (in progress)',
    ],
  },
  projects: {
    title: 'Flagship Projects',
    kicker: 'Applied machine learning, from industrial sensors to computer vision and privacy-preserving training.',
    featured: 'Featured',
    repository: 'Repository',
    noMetric: 'Exploratory work: no headline metric claimed.',
    items: {
      'predictive-maintenance': {
        title: 'Industrial Predictive Maintenance & Telemetry Alerting',
        summary:
          'Machine sensor readings in, failure risk and an operator alert out: a prediction model wired straight into incident response.',
        bullets: [
          'Modelled machine failure from industrial sensor telemetry (air and process temperature, rotational speed, torque, tool wear) where failures are only 3.3% of 10,000 records, tuning on F1 with class weights in a 5-fold grid search.',
          'Mapped Random Forest failure probability to early-warning tiers (stable, inspection, critical) so faults are flagged before hardware fails.',
          'Automated incident alerting: an LLM writes a two-sentence diagnosis and an n8n workflow delivers it to the maintenance operator on Telegram.',
        ],
        metricCaption: 'ROC-AUC, Random Forest on a 3.3% failure rate',
      },
      'solar-dust': {
        title: 'AI Maintenance Tool for Solar Panels',
        summary:
          'Upload a photo of an installation; get a soiling diagnosis, maintenance advice and the cost of doing nothing.',
        bullets: [
          'Fine-tuned a Vision Transformer (ViT) to classify dust soiling from site imagery, reporting a confidence score with every prediction.',
          'Integrated a downstream Llama 3.3 70B layer that estimates localised monetary loss from power degradation, utility tariffs and system wattage.',
          'Deployed as a local Gradio app with zero image persistence, for privacy.',
        ],
        metricCaption: 'models in one pipeline: vision diagnoses, LLM prices the impact',
      },
      'poverty-vulnerability': {
        title: 'Costa Rican Household Poverty Vulnerability Analysis',
        summary:
          'When four poverty tiers would not separate, the useful question became: which households need help first?',
        bullets: [
          'Diagnosed structural distribution overlap among poverty tiers where standard multiclass models stalled at 0.42 macro-F1.',
          'Designed a combined three-way feature selection framework (correlation, mutual information, Random Forest importance) that isolated 17 high-signal predictors.',
          'Reframed the task as binary triage (poor vs. non-poor), reaching 0.81 ROC-AUC and 0.68 F1 on the vulnerable class with Logistic Regression and a household-level stratified split to prevent intra-household leakage.',
        ],
        metricCaption: 'ROC-AUC on binary triage, up from a 0.42 macro-F1 multiclass baseline',
        stackExtra: ['Statistical Inference', 'Research Paper'],
      },
      'federated-learning': {
        title: 'Privacy-Preserving Customer Acquisition',
        summary:
          'A subscription-uptake model trained across three banks without a single customer record leaving its owner.',
        bullets: [
          'Implemented Federated Averaging across three bank nodes, sharing only model weights while raw records stay decentralised.',
          'Addressed an 88/12 class imbalance with node-local SMOTE and F1-tuned decision thresholds.',
          'Surfaced federated vs. centralised benchmarks in an interactive Streamlit MLOps dashboard.',
        ],
        metricCaption: 'ROC-AUC with zero raw records shared',
      },
      'quantum-portfolio': {
        title: 'Quantum-Ready Portfolio Optimiser',
        status: 'Exploratory / Experimental',
        summary: 'A side exploration of how portfolio selection maps onto quantum annealing hardware.',
        bullets: [
          'Formulated cardinality-constrained Markowitz portfolio selection as a Quadratic Unconstrained Binary Optimisation (QUBO) Hamiltonian.',
          'Applied Ledoit-Wolf shrinkage to regularise covariance matrices in low sample-to-asset settings.',
          'Explored convergence behaviour using D-Wave Neal simulated annealing against classical baselines.',
        ],
      },
    },
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        group: 'Classical Machine Learning',
        items: ['Logistic Regression', 'Random Forest', 'XGBoost', 'SGD', 'Recommendation Systems'],
      },
      {
        group: 'Deep Learning & Vision',
        items: ['Deep Neural Networks', 'CNNs', 'Vision Transformers (ViT)', 'PyTorch', 'Hugging Face'],
      },
      {
        group: 'Data & Optimization',
        items: [
          'Genetic Algorithms',
          'Monte Carlo',
          'Imbalanced Learning (SMOTE & Class Weighting)',
          'Cross-Validation',
          'Feature Selection & Leakage Prevention',
        ],
      },
      {
        group: 'Tools, Orchestration & Cloud',
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
    spokenTitle: 'Spoken languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'Catalan', level: 'Native' },
      { name: 'English', level: 'C1' },
      { name: 'German', level: 'Basic' },
    ],
  },
  contact: {
    title: 'Contact',
    callout:
      'Open to roles in Data Science, Machine Learning, Applied AI, and Academic/Industry Research. Let’s get in touch.',
    basedIn: 'Based in',
    location: 'Barcelona, Spain',
  },
  footer: { colophon: 'Set in Newsreader & Geist. Built with Astro.', backToTop: 'Back to top' },
};
