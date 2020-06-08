export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ede36a6c2dca90297379f1b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jmpfqs2a',
                  apiId: 'af23cef1-01a5-4011-840a-71bb764ede34'
                },
                {
                  buildHookId: '5ede36a6d28b06780e916355',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-e3qm1ox8',
                  apiId: 'eb25f015-01c6-4de0-b762-a797ae6dec8a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyutsav99/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-e3qm1ox8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
