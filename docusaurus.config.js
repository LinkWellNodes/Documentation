// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LinkWell Nodes',
  tagline: 'Chainlink Node Operations Team',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://LinkWellNodes.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LinkWell Nodes', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/LinkWellLogo.png',
      navbar: {
        title: 'LinkWell Nodes',
        logo: {
          alt: 'LinkWell Nodes',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/LinkWellNodes/Documentation',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discordapp.com/invite/docusaurus',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://twitter.com/LinkWell_Nodes',
            label: 'Twitter',
            position: 'right',
          },                    
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs',
              },
              {
                label: 'Services',
                to: '/services/direct-request-jobs/Jobs-and-Pricing',
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
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
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
      },
      themeConfig: {
        prism: {
          additionalLanguages: ['solidity'],	// not sure if this is supported? https://lucidar.me/en/web-dev/list-of-supported-languages-by-prism/
        },
        // github codeblock theme configuration
        codeblock: {
          showGithubLink: true,
          githubLinkLabel: 'View on GitHub',
          showRunmeLink: false,
          runmeLinkLabel: 'Checkout via Runme'
        },
      },
    }),
};

module.exports = config;
