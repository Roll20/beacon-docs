import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Beacon SDK",
  description: "This is the Official Beacon SDK main documentation",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: 'gettingstarted/introduction' }
    ],

    sidebar: [
      { 
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/gettingstarted/introduction' },
          { text: 'Installation', link: '/gettingstarted/installation' },
          { text: 'Glossary', link: '/gettingstarted/glossary' },
          { text: 'Contributing', link: '/gettingstarted/contributing' },
          { text: 'FAQ', link: '/gettingstarted/faq' }
        ]
      },
      { 
        text: 'Quick Start',
        collapsed: true,
        items: [
          { text: 'Beginner', link: '/gettingstarted/quickstart' },
          { text: 'Advance', link: '/gettingstarted/quickstartadvance' },
          { text: 'Release Sheet', link: '/gettingstarted/releasesheet' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Overview', link: '/components/components-overview' },
          { text: 'Actions', link: '/components/actions' },
          { text: 'Computed', link: '/components/computed' },
          { text: 'Handlers', link: '/components/handlers' },
          { text: 'Macros', link: '/components/macros' },
          { text: 'Rolls', link: '/components/roll' }
        ]
      },
      {
       
          text: 'Dispatch', link: '/dispatch',
        
      },
      {
        text: 'Types', link: '/types',
        
      },
      {
        text: 'Tutorials',
       
      },
      { 
        text: 'Changelog',
        collapsed: true,
        items: [
          { text: 'Version 1.0.0', link: '/changelog/version1.0.0' },
          { text: 'Version 2.0.0', link: '/changelog/version2.0.0' }
        ]
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
 
   
})
