module.exports = {
  docsSidebar: [
	{
	    type: 'doc',
	    id: 'index',
	    label: 'Docs Home',
	},
    {
        type: 'html',
        value: '<div class="sidebarGroupTitle">Services</div><hr class="sidebarGroupRuler">',
        defaultStyle: true
    },
    {
      type: 'category',
      label: 'Chainlink Data Feeds',
      collapsible: false,
      link: {type: 'doc', id: 'services/direct-request-jobs/Jobs-and-Pricing'},
      items: [
        {
          type: 'category',
          label: 'Mainnets',
          link: {type: 'doc', id: 'services/direct-request-jobs/mainnets/Mainnets'},
          items: [
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Arbitrum-One-Mainnet-Jobs',
	            label: 'Arbitrum One',
            },
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Avalanche-CChain-Mainnet-Jobs',
	            label: 'Avalanche',
            },
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Base-Mainnet-Jobs',
	            label: 'Base',
            },
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Binance-Mainnet-Jobs',
	            label: 'Binance',
            },
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Ethereum-Mainnet-Jobs',
	            label: 'Ethereum',
            },
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Optimism-Mainnet-Jobs',
	            label: 'Optimism',
            },
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Polygon-Mainnet-Jobs',
	            label: 'Polygon',
            },
          ]
        },
        {
          type: 'category',
          label: 'Testnets',
          link: {type: 'doc', id: 'services/direct-request-jobs/testnets/Testnets'},
          items: [
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Arbitrum-Goerli-Testnet-Jobs',
  	            label: 'Arbitrum Goerli',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Avalanche-Fuji-Testnet-Jobs',
  	            label: 'Avalanche Fuji',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Base-Goerli-Testnet-Jobs',
  	            label: 'Base Goerli',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Binance-Testnet-Jobs',
  	            label: 'Binance',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Ethereum-Goerli-Testnet-Jobs',
  	            label: 'Ethereum Goerli',
              },
              {
	            type: 'doc',
	            id: 'services/direct-request-jobs/testnets/Ethereum-Sepolia-Testnet-Jobs',
	            label: 'Ethereum Sepolia',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Optimism-Goerli-Testnet-Jobs',
  	            label: 'Optimism Goerli',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Polygon-Mumbai-Testnet-Jobs',
  	            label: 'Polygon Mumbai',
              },
          ]
        },
	    {
	      type: 'doc',
	      id: 'services/direct-request-jobs/Pricing',
	      label: 'Pricing',
	    },
	    //{
	    //  type: 'doc',
	    //  id: 'knowledgebase/Any-API-Guide',
	    //  label: 'Examples',
	    //},
      ],     
    },
    {
        type: 'html',
        value: '<div class="sidebarGroupTitle">Knowledgebase</div><hr class="sidebarGroupRuler">',
        defaultStyle: true
    },
    {
      type: 'doc',
      id: 'knowledgebase/Any-API-Guide',
      label: 'Any API Examples',
    },
    {
      type: 'doc',
      id: 'knowledgebase/Direct-Request-Guide',
      label: 'Direct Request Guide',
    },
    {
      type: 'category',
      label: 'FAQ',
      link: {type: 'doc', id: 'knowledgebase/FAQ'},
      items: [
	    {
	      type: 'doc',
	      id: 'knowledgebase/faq/Chainlink-Users',
	      label: 'Chainlink Users',
	    },
	    {
	      type: 'doc',
	      id: 'knowledgebase/faq/Chainlink-Operators',
	      label: 'Chainlink Oracles',
	    },
      ]
    },
  ]
};