require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.8",
  networks:{
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    },
    sepolia:{
      url: process.env.SEPOLIA_URL,
      accounts:[process.env.SEPOLIA_PRIVATEKEY],
      chainId:11155111
    }
  }, 
  etherscan:{
    apiKey:"2FA3HRTTFBM6Y7AFHZFVJXSJUAQQ2R41NP"
  }
};

      
