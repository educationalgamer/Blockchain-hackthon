//https://eth-sepolia.g.alchemy.com/v2/sv-Y78bOhu-yFCuaWXRXKv0JcpjeRGnp


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/sv-Y78bOhu-yFCuaWXRXKv0JcpjeRGnp',
      accounts: ['4a340b7143d311775d1077cb60256b069461553f33361390343655d302707529'],
    },
  },
};