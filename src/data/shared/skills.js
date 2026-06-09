const skillLevelScale = Object.freeze({
  exploring: 1,
  familiar: 2,
  comfortable: 3,
})

const skillGroups = Object.freeze([
  Object.freeze({
    id: 'frontend',
    skills: Object.freeze([
      Object.freeze({ technologyId: 'html-css', level: 'comfortable' }),
      Object.freeze({ technologyId: 'javascript', level: 'familiar' }),
      Object.freeze({ technologyId: 'react', level: 'familiar' }),
      Object.freeze({ technologyId: 'react-router', level: 'familiar' }),
      Object.freeze({ technologyId: 'vite', level: 'familiar' }),
      Object.freeze({ technologyId: 'bootstrap', level: 'comfortable' }),
      Object.freeze({ technologyId: 'responsive-design', level: 'familiar' }),
      Object.freeze({ technologyId: 'accessibility', level: 'exploring' }),
      Object.freeze({ technologyId: 'motion', level: 'exploring' }),
      Object.freeze({ technologyId: 'i18next', level: 'exploring' }),
      Object.freeze({ technologyId: 'react-pdf', level: 'exploring' }),
    ]),
  }),
  Object.freeze({
    id: 'backend',
    skills: Object.freeze([
      Object.freeze({ technologyId: 'php', level: 'familiar' }),
      Object.freeze({ technologyId: 'laravel', level: 'familiar' }),
      Object.freeze({ technologyId: 'blade', level: 'familiar' }),
      Object.freeze({ technologyId: 'node', level: 'familiar' }),
      Object.freeze({ technologyId: 'express', level: 'familiar' }),
      Object.freeze({ technologyId: 'rest-api', level: 'familiar' }),
      Object.freeze({ technologyId: 'authentication', level: 'familiar' }),
      Object.freeze({ technologyId: 'rbac', level: 'familiar' }),
      Object.freeze({ technologyId: 'mysql', level: 'familiar' }),
      Object.freeze({ technologyId: 'mariadb', level: 'familiar' }),
      Object.freeze({ technologyId: 'postgresql', level: 'exploring' }),
    ]),
  }),
  Object.freeze({
    id: 'tools',
    skills: Object.freeze([
      Object.freeze({ technologyId: 'git', level: 'comfortable' }),
      Object.freeze({ technologyId: 'github', level: 'familiar' }),
      Object.freeze({ technologyId: 'npm', level: 'familiar' }),
      Object.freeze({ technologyId: 'composer', level: 'familiar' }),
      Object.freeze({ technologyId: 'postman', level: 'familiar' }),
      Object.freeze({ technologyId: 'railway', level: 'familiar' }),
      Object.freeze({ technologyId: 'eslint', level: 'familiar' }),
      Object.freeze({ technologyId: 'xampp', level: 'familiar' }),
      Object.freeze({ technologyId: 'wamp', level: 'familiar' }),
      Object.freeze({ technologyId: 'git-bash', level: 'familiar' }),
      Object.freeze({ technologyId: 'uml', level: 'familiar' }),
      Object.freeze({ technologyId: 'database-modeling', level: 'familiar' }),
      Object.freeze({ technologyId: 'figma', level: 'exploring' }),
    ]),
  }),
])

export { skillLevelScale }
export default skillGroups
