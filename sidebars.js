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
	            id: 'services/direct-request-jobs/mainnets/Celo-Mainnet-Jobs',
	            label: 'Celo',
            },
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Ethereum-Mainnet-Jobs',
	            label: 'Ethereum',
            },
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Fantom-Mainnet-Jobs',
	            label: 'Fantom',
            },
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Gnosis-Chain-Mainnet-Jobs',
	            label: 'Gnosis',
            },
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Linea-Mainnet-Jobs',
	            label: 'Linea',
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
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Polygon-zkEVM-Mainnet-Jobs',
	            label: 'Polygon zkEVM',
            },
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/Scroll-Mainnet-Jobs',
	            label: 'Scroll',
            },
            {
	            type: 'doc',
	            id: 'services/direct-request-jobs/mainnets/zkSync-Era-Mainnet-Jobs',
	            label: 'zkSync Era',
            }
          ]
        },
        {
          type: 'category',
          label: 'Testnets',
          link: {type: 'doc', id: 'services/direct-request-jobs/testnets/Testnets'},
          items: [
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Arbitrum-Sepolia-Testnet-Jobs',
  	            label: 'Arbitrum Sepolia',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Avalanche-Fuji-Testnet-Jobs',
  	            label: 'Avalanche Fuji',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Base-Sepolia-Testnet-Jobs',
  	            label: 'Base Sepolia',
              },              
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Binance-Testnet-Jobs',
  	            label: 'Binance',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Celo-Alfajores-Testnet-Jobs',
  	            label: 'Celo Alfajores',
              },
              {
	            type: 'doc',
	            id: 'services/direct-request-jobs/testnets/Ethereum-Sepolia-Testnet-Jobs',
	            label: 'Ethereum Sepolia',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Fantom-Testnet-Jobs',
  	            label: 'Fantom',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Optimism-Sepolia-Testnet-Jobs',
  	            label: 'Optimism Sepolia',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Polygon-Amoy-Testnet-Jobs',
  	            label: 'Polygon Amoy',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Polygon-zkEVM-Testnet-Jobs',
  	            label: 'Polygon zkEVM',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/Scroll-Sepolia-Testnet-Jobs',
  	            label: 'Scroll Sepolia',
              },
              {
  	            type: 'doc',
  	            id: 'services/direct-request-jobs/testnets/zkSync-Sepolia-Testnet-Jobs',
  	            label: 'zkSync Sepolia',
              }
          ]
        },
        {
            type: 'category',
            label: 'Real-World Examples',
            link: {type: 'doc', id: 'services/direct-request-jobs/Any-API-Guide'},
            items: [
                {
    	            type: 'doc',
    	            id: 'services/direct-request-jobs/examples/weather-data/AccuWeather',
    	            label: 'AccuWeather',
                },
                {
    	            type: 'doc',
    	            id: 'services/direct-request-jobs/examples/stock-price-data/Alpha-Vantage',
    	            label: 'Alpha-Vantage',
                },
                {
    	            type: 'doc',
    	            id: 'services/direct-request-jobs/examples/coin-price-data/CryptoCompare',
    	            label: 'CryptoCompare',
                },
                {
    	            type: 'doc',
    	            id: 'services/direct-request-jobs/examples/ipfs-data/IPFS',
    	            label: 'IPFS',
                },
                {
    	            type: 'doc',
    	            id: 'services/direct-request-jobs/examples/sports-data/SportsDataIO',
    	            label: 'SportsDataIO',
                },
                {
    	            type: 'doc',
    	            id: 'services/direct-request-jobs/examples/sports-data/TheRundown',
    	            label: 'TheRundown',
                },
            ]
          },
          {
              type: 'doc',
              id: 'services/direct-request-jobs/Pricing',
              label: 'Pricing Info',
          },
          {
              type: 'doc',
              id: 'services/direct-request-jobs/Service-Level-Agreement',
              label: 'Service-Level Agreement',
          },
      ],
    },
    {
        type: 'category',
        label: 'Staking',
        collapsible: false,
        items: [
            {
                type: 'doc',
                id: 'services/staking/Allora',
                label: 'Allora Network (ALLO)',
            },
        ],
      },
    {
  	  type: 'doc',
  	  id: 'services/Development-Services',
  	  label: 'Development & Support',
    },
    {
        type: 'html',
        value: '<div class="sidebarGroupTitle">Knowledgebase</div><hr class="sidebarGroupRuler">',
        defaultStyle: true
    },
    {
      type: 'doc',
      id: 'knowledgebase/Direct-Request-Guide',
      label: 'Direct Requests Explained',
    },
	{
	  type: 'doc',
	  id: 'knowledgebase/Verifiable-Random-Numbers-Guide',
	  label: 'Verifiable Random Numbers (VRN)',
	},
    {
      type: 'category',
      label: 'Chainlink FAQ',
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
	      label: 'Chainlink Oracle Operators',
	    },
      ]
    },
  ]
};