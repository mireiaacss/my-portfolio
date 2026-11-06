/**
 * Locale-independent facts: names, links, dates, stacks and metric values.
 * All translatable copy lives in src/i18n/{en,es,ca}.ts and is matched to
 * these entries by index (experience, trajectory) or slug (projects).
 *
 * Sources: CV_Mireia_Calvino.pdf, public GitHub repositories (github.com/mireiaacss)
 * and the content briefs of 2026-11-06. Metrics come from READMEs / notebook outputs.
 */

export const profile = {
  name: 'Mireia Calviño Saez',
  givenName: 'Mireia',
  familyName: 'Calviño Saez',
  worksFor: { name: 'Esade Business School', url: 'https://www.esade.edu' },
  location: { locality: 'Barcelona', country: 'ES' },
  email: 'mireia.calvino@gmail.com',
  links: {
    github: 'https://github.com/mireiaacss',
    linkedin: 'https://www.linkedin.com/in/mireia-calvino/',
    // TODO: add Bluesky or X/Twitter profile URL when available.
    social: null as string | null,
  },
  knowsAbout: [
    'Data Science',
    'Machine Learning',
    'Statistical Analysis',
    'Predictive Maintenance',
    'Deep Learning',
    'Computer Vision',
    'Vision Transformers',
    'Imbalanced Learning',
    'Feature Selection',
    'Recommendation Systems',
    'Federated Learning',
    'Large Language Models',
    'Agentic AI',
    'Model Context Protocol',
    'Workflow Automation',
    'Python',
    'SQL',
    'PyTorch',
    'Hugging Face',
    'scikit-learn',
    'XGBoost',
    'n8n',
    'Docker',
    'Streamlit',
  ],
};

/** Hero "current trajectory" rows; copy in dictionary `hero.trajectory[i]`. */
export const trajectory = [
  { org: 'Esade', current: true, href: '#experience' },
  { org: 'Oncoviva', current: false, href: '#experience' },
  { org: 'Esade', current: false, href: '#education-title' },
];

/** Experience entries; copy in dictionary `experience.items[i]`. */
export const experience = [
  { org: 'Esade', start: '2026-10', end: '2026-11' },
  { org: 'Oncoviva', start: '2026-07', end: '2026-08' },
];

export const education = { start: '2023-09', end: '2028-06' };

export type ProjectSlug =
  | 'predictive-maintenance'
  | 'solar-dust'
  | 'poverty-vulnerability'
  | 'federated-learning'
  | 'quantum-portfolio';

export type ProjectFacts = {
  slug: ProjectSlug;
  stack: string[];
  metric?: { value: number; decimals: number };
  exploratory?: boolean;
  repo: string;
};

/** Display order = array order. */
export const projects: ProjectFacts[] = [
  {
    slug: 'predictive-maintenance',
    stack: ['Python', 'scikit-learn', 'Streamlit', 'Llama 3.1 via Groq', 'n8n', 'Telegram API'],
    metric: { value: 0.98, decimals: 2 },
    repo: 'https://github.com/mireiaacss/predictive-maintenance-alerts',
  },
  {
    slug: 'solar-dust',
    stack: ['PyTorch', 'Hugging Face', 'ViT', 'Llama 3.3', 'Gradio'],
    metric: { value: 2, decimals: 0 },
    repo: 'https://github.com/mireiaacss/solar-dust-analysis',
  },
  {
    slug: 'poverty-vulnerability',
    // Localised stack terms ("Statistical Inference", "Research Paper") come from the dictionary.
    stack: ['Python', 'scikit-learn', 'pandas'],
    metric: { value: 0.81, decimals: 2 },
    repo: 'https://github.com/mireiaacss/costa-rican-household-poverty-prediction',
  },
  {
    slug: 'federated-learning',
    stack: ['Python', 'scikit-learn', 'imbalanced-learn', 'Streamlit', 'Plotly'],
    metric: { value: 0.9, decimals: 2 },
    repo: 'https://github.com/mireiaacss/federated_learning',
  },
  {
    slug: 'quantum-portfolio',
    stack: ['Python', 'PyQUBO', 'D-Wave Neal', 'scikit-learn'],
    exploratory: true,
    repo: 'https://github.com/mireiaacss/quantum_portfolio_optimiser',
  },
];
