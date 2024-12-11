const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const mockDeployments = require("../deployments/chain-31337/deployed_addresses.json");
const {networkConfig} = "../../helper-hardhat-config";

module.exports = buildModule("FundMe",  (m)=>{
    const chainId = hre.network.config.chainId;
    console.log("Chain ID: ", chainId)

    let ethUsdPriceAddress;
    if (chainId == 31337) {
        
        const mockAddress = mockDeployments["Mock#MockV3Aggregator"];
        
        ethUsdPriceAddress = mockAddress;
    } else {
        ethUsdPriceAddress = networkConfig[chainId]["ethUsdPriceAddress"];
    }

    const fundme = m.contract("FundMe", [ethUsdPriceAddress]);
    
    return { fundme };

})

module.exports.tags = ["all", "final"]