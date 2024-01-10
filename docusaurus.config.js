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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          {to: '/about', label: 'About Us', position: 'left'},  
          {to: '/blog', label: 'Blog', position: 'left'},                  
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
                label: 'Website',
                href: 'https://linkwellnodes.io',
              },
              {
                label: 'Request a data feed',
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
                label: 'Direct Request listings',
                to: '/services/direct-request-jobs/Jobs-and-Pricing',
              },
              {
                label: 'User FAQ',
                to: '/knowledgebase/faq/Chainlink-Users',
              },              
              {
                label: 'Node Operator FAQ',
                to: '/knowledgebase/faq/Chainlink-Operators',
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
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: '/blog',
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
    	// Redirect specific pages
        redirects: [
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
          }
        ],
        // Redirect entire paths
        createRedirects(existingPath) {
            if (existingPath.includes('/services/jobs')) {
              return [
        	    // Redirect from /old/path/X to /newPath/X (it seems backward, but this is correct)
            	// existingPath.replace('/newPath', '/old/path'),
                existingPath.replace('/services/direct-request-jobs', '/services/jobs'),
              ];
            }
            return undefined; // Return a falsey value: no redirect created
          },
      },
    ],
  ],
};

module.exports = config;
