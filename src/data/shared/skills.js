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
      Object.freeze({ technologyId: 'javascript', level: 'comfortable' }),
      Object.freeze({ technologyId: 'react', level: 'comfortable' }),
      Object.freeze({ technologyId: 'react-router', level: 'familiar' }),
    ]),
  }),
  Object.freeze({
    id: 'backend',
    skills: Object.freeze([
      Object.freeze({ technologyId: 'node', level: 'familiar' }),
      Object.freeze({ technologyId: 'express', level: 'familiar' }),
      Object.freeze({ technologyId: 'rest-api', level: 'familiar' }),
      Object.freeze({ technologyId: 'postgresql', level: 'exploring' }),
    ]),
  }),
  Object.freeze({
    id: 'tools',
    skills: Object.freeze([
      Object.freeze({ technologyId: 'git', level: 'comfortable' }),
      Object.freeze({ technologyId: 'vite', level: 'comfortable' }),
      Object.freeze({ technologyId: 'figma', level: 'familiar' }),
    ]),
  }),
])

export { skillLevelScale }
export default skillGroups
