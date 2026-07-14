export const experience = [
  {
    role: 'AI/ML Intern',
    company: 'Allegis Group',
    location: 'Hanover, MD',
    dates: 'May 2025 – Present',
    sections: [
      {
        label: 'Clario — Career Intelligence Platform',
        accent: 'mauve',
        bullets: [
          'Built and deployed a 5,100+ line full-stack platform (Streamlit + Snowflake Cortex) across 10 features, shipped via GitHub Actions CI/CD to Azure App Service with Checkmarx SAST/SCA security gates.',
          'Implemented a RAG chatbot orchestrating 14 Cortex AI endpoints over 7 Cortex Search object types for personalized career guidance and skill-gap analysis.',
          'Built role-based access with Microsoft SSO for a manager coaching view, plus AI headshot generation via Google Vertex AI and session summaries across 5+ Snowflake tables.',
        ],
      },
      {
        label: 'Ingestion Pipeline',
        accent: 'teal',
        bullets: [
          'Ingested 716+ job files with zero data loss via a Snowflake stored procedure using CORTEX.PARSE_DOCUMENT with page-splitting and row-per-page flattening.',
          'Achieved parallel ingestion across 14 concurrent sessions with queue-driven orchestration (RUNNING / COMPLETE / FAILED tracking), eliminating 4 production-blocking bugs.',
        ],
      },
      {
        label: 'ML / NLP',
        accent: 'peach',
        bullets: [
          'Cut annual costs ~$3.5K migrating the Win Probability Model to a Snowflake ML pipeline; raised F1 from 70% to 80% via Bayesian hyperparameter optimization.',
          'Eliminated 83% of false positives in message filtering with a content-moderation model, reaching 100% true-positive detection across 12M+ rows using Snowflake Cortex AI.',
        ],
      },
    ],
  },
]

// Standout numbers pulled from the work above — rendered as stat chips.
export const stats = [
  { value: '5,100+', label: 'lines shipped to prod', accent: 'mauve' },
  { value: '70→80%', label: 'F1 improvement', accent: 'peach' },
  { value: '12M+', label: 'rows moderated', accent: 'teal' },
  { value: '~$3.5K', label: 'annual costs cut', accent: 'green' },
]
