// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LinkWell Nodes',
  tagline: 'Chainlink Node Operations Team',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.linkwellnodes.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LinkWellNodes', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
        en: {
          label: 'English',
          direction: 'ltr',
        },
      },
  },
  
  themes: [
	  '@saucelabs/theme-github-codeblock'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: './docs', // this should be the path to your docs folder
          routeBasePath: '/',  // this should be the word that you want to set
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Blog',
          blogDescription: 'A blog about anything related to Chainlink, Web3, and oracle smart contract solutions. LinkWell Nodes is a U.S.-based Chainlink oracle specializing in secure, timely delivery of real-world data onto the blockchain.',
        },
        theme: {
          customCss: require.resolve('./src/css/style.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig: {
      // Replace with your project's social card
      image: 'img/linkwell-logo-276x237.webp',
      colorMode: {
          defaultMode: 'light',
          disableSwitch: true
        },
      navbar: {
        title: 'LinkWell Nodes',
        logo: {
          alt: 'LinkWell Nodes',
          src: 'img/linkwell-logo-276x237.webp',
        },
        hideOnScroll: true,
        items: [
          {
            href: 'https://linkwellnodes.io',
            label: 'Home',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},                  
          {to: '/about', label: 'About Us', position: 'left'},  
          // {
        	//   href: 'https://discord.gg/Xs6SjqVPUA',
        	//   label: 'Discord',
        	//   position: 'right',
          // },
          // {
        	//   href: 'https://twitter.com/LinkWell_Nodes',
        	//   label: 'Twitter',
        	//   position: 'right',
          // },   
          {
            href: 'https://discord.gg/Xs6SjqVPUA',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord',
          },            
          {
            href: 'https://twitter.com/LinkWell_Nodes',
            position: 'right',
            className: 'header-x-link',
            'aria-label': 'Twitter',
          },                            
          {
            href: 'https://github.com/LinkWellNodes/Documentation',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Home',
            items: [
              {
                label: 'Home',
                href: 'https://linkwellnodes.io',
              },
              {
                label: 'Request a Data Feed',
                href: 'https://linkwellnodes.io/Getting-Started.html',
              },
              {
                label: 'Contact Us',
                href: 'https://linkwellnodes.io/#contact-us',
              },
            ],
          },
          {
            title: 'Documentation',
            items: [
              {
                label: 'Our Data Feeds',
                to: '/services/direct-request-jobs/Jobs-and-Pricing',
              },
              {
                  label: 'Development Services',
                  to: '/services/Development-Services',
              },
              {
                label: 'Chainlink FAQ',
                to: '/knowledgebase/FAQ',
              }              
            ],
          },
          {
              title: 'Blog',
              items: [
                {
                  label: 'Blog',
                  href: '/blog',
                },
              ],
            },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Xs6SjqVPUA',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/LinkWell_Nodes',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/linkwell-nodes',
              },              
              {
                label: 'GitHub',
                href: 'https://github.com/LinkWellNodes/Documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LinkWell Nodes`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,      
        additionalLanguages: ['solidity'],        
      },
    },
    
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
          // Redirect entire paths
          createRedirects(existingPath) {
          	  // NOTE: order matters, as the below block will return at the first match
              // Redirect from /old/path/X to /newPath/X (it seems backward, but this is correct)
              // if (existingPath.includes('/newPath')) {	 // correct path
              //     // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
              //     return [
              //       existingPath.replace('/newPath', '/old/path'),	   // new (correct) path, old path
              //     ];
              // }
              if (existingPath.includes('/v1/mainnets')) {
                  return [
                    existingPath.replace('/v1/mainnets', '/mainnets-v1'),
                  ];
              }
              if (existingPath.includes('/v1/testnets')) {
                  return [
                    existingPath.replace('/v1/testnets', '/testnets-v1'),
                  ];
              }
              if (existingPath.includes('/services/direct-request-jobs')) {
                return [
                  existingPath.replace('/services/direct-request-jobs', '/services/jobs'),
                ];
              }
              return undefined; // Return a falsey value: no redirect created
          },
      	  // Redirect specific pages
          redirects: [
            // {
            //   from: '/old/page',
            //   to: '/new/page',
            // }
            {
                from: '/knowledgebase/Chainlink-Consumers-FAQ',
                to: '/knowledgebase/faq/Chainlink-Users',
            },
            {
                from: '/knowledgebase/Chainlink-Operators-FAQ',
                to: '/knowledgebase/faq/Chainlink-Operators',
            },
            {
                from: '/knowledgebase/Any-API-Guide',
                to: '/services/direct-request-jobs/Any-API-Guide',
            },
            {
          	    from: '/services/direct-request-jobs/testnets/Arbitrum-Goerli-Testnet-Jobs',
          	    to: '/services/direct-request-jobs/testnets/Arbitrum-Sepolia-Testnet-Jobs',
            },
            {
          	    from: '/services/jobs/testnets/Arbitrum-Goerli-Testnet-Jobs',
          	    to: '/services/direct-request-jobs/testnets/Arbitrum-Sepolia-Testnet-Jobs',
            },
            {
          	    from: '/services/direct-request-jobs/testnets/Avalance-Fuji-Testnet-Jobs',
          	    to: '/services/direct-request-jobs/testnets/Avalanche-Fuji-Testnet-Jobs',
            },
            {
          	    from: '/services/jobs/testnets/Avalance-Fuji-Testnet-Jobs',
          	    to: '/services/direct-request-jobs/testnets/Avalanche-Fuji-Testnet-Jobs',
            },
            {
          	    from: '/services/direct-request-jobs/testnets/Base-Goerli-Testnet-Jobs',
            	to: '/services/direct-request-jobs/testnets/Base-Sepolia-Testnet-Jobs',
            },
            {
          	    from: '/services/direct-request-jobs/testnets/Polygon-Mumbai-Testnet-Jobs',
          	    to: '/services/direct-request-jobs/testnets/Polygon-Amoy-Testnet-Jobs',
            },
            {
          	    from: '/services/jobs/testnets/Polygon-Mumbai-Testnet-Jobs',
          	    to: '/services/direct-request-jobs/testnets/Polygon-Amoy-Testnet-Jobs',
            },
            {
                from: '/services/direct-request-jobs/External-Adapters',
                to: '/services/Development-Services',
            },
            {
                from: '/services/jobs/testnets/Testnets',
                to: '/services/direct-request-jobs/testnets',
            },
            {
                from: '/blog/introduction',
                to: '/blog/Introduction',
            },
            {
                from: '/blog/welcome',
                to: '/blog/Welcome',
            },
            {
                from: '/blog/Chainlink_Direct_Request_Vs_Functions',
                to: '/blog/Chainlink-Any-API-Direct-Requests-Vs-Functions',
            },
            {
                from: '/blog/requesting_a_custom_chainlink_data_feed',
                to: '/blog/Requesting-A-Custom-Chainlink-Data-Feed-Using-Any-API',
            },
            {
                from: '/services/jobs/Direct-Request-Guide',
                to: '/knowledgebase/Direct-Request-Guide',
            },
          ],
      },
    ],
  ],
};

module.exports = config;
