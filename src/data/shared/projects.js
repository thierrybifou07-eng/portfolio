import projectPlaceholder from '../../assets/images/projects/project-placeholder.svg'

const emptyProjectLinks = Object.freeze({
  demo: null,
  repository: null,
})

const projects = Object.freeze([
  Object.freeze({
    slug: 'arms',
    categoryId: 'operations',
    technologyIds: Object.freeze([
      'react',
      'react-router',
      'javascript',
      'rest-api',
    ]),
    image: projectPlaceholder,
    featured: true,
    status: 'concept',
    links: emptyProjectLinks,
  }),
  Object.freeze({
    slug: 'h-market',
    categoryId: 'commerce',
    technologyIds: Object.freeze([
      'react',
      'javascript',
      'node',
      'express',
      'postgresql',
    ]),
    image: projectPlaceholder,
    featured: true,
    status: 'concept',
    links: emptyProjectLinks,
  }),
  Object.freeze({
    slug: 'bustix',
    categoryId: 'mobility',
    technologyIds: Object.freeze([
      'react',
      'react-router',
      'javascript',
      'node',
      'rest-api',
    ]),
    image: projectPlaceholder,
    featured: true,
    status: 'concept',
    links: emptyProjectLinks,
  }),
])

export default projects
