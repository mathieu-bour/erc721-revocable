import { config as loadConfig } from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
import { join } from 'path';
import '@nomicfoundation/hardhat-toolbox';
import set from "lodash/set";

loadConfig({ path: join(process.cwd(), '.env.local') });

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
      },
    }
  },

  typechain: {
    outDir: 'typings',
    target: 'ethers-v5',
  },

  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://matic-mumbai.chainstacklabs.com',
      chainId: 80001,
      accounts: process.env.MUMBAI_PRIVATE_KEY ? [process.env.MUMBAI_PRIVATE_KEY] : [],
    }
  },


  gasReporter: {
    enabled: Boolean(process.env.REPORT_GAS),
    currency: 'USD',
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
};

if (process.env.POLYSCAN_API_KEY) {
  set(config, 'etherscan.apiKey.polygon', process.env.POLYSCAN_API_KEY);
  set(config, 'etherscan.apiKey.polygonMumbai', process.env.POLYSCAN_API_KEY);
}

export default config;
