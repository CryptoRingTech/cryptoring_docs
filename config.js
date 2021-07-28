const config = {
  gatsby: {
    pathPrefix: '/doc',
    siteUrl: 'https://cryptoring.tech',
    gaTrackingId: 'G-3YXWX9Q5E6',
    trailingSlash: false,
  },
  header: {
      logo: 'https://cryptoring.tech/images/logo.png',
      logoLink: '/',
    title: "CryptoRing",
    githubUrl: 'https://github.com/CryptoRingTech/cryptoring_docs',
    darkmodeSwitch: false,
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/CryptoRingTech" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
      links: [
          { text: 'Docs', link: '/docs' },
          { text: 'Marketplace', link: '#', disabled: true }
      ],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/getting_started',
    ],
    collapsedNav: [
        //'/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: '', link: '' }],
    frontline: false,
    ignoreIndex: true,
    title: false,
      //"<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
  },
    siteMetadata: {
        title: 'CryptoRing Platform Documentation',
        description: 'Documentation for CryptoRing Platform developers',
        ogImage: null,
        docsLocation: 'https://github.com/CryptoRingTech/cryptoring_docs/blob/master/content',
        favicon: '',
    },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
