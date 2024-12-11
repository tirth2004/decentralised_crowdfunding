const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const {DECIMALS, INITIAL_PRICE} = require("../../helper-hardhat-config");

module.exports = buildModule("Mock", (m) => {

    const deployer = m.getAccount(2);
    const chainId = hre.network.config.chainId;
    console.log("Chain ID: ", chainId);

    let mock;

    if(chainId==31337){
        console.log("Local network detected! Deploying mocks...");
        mock = m.contract("MockV3Aggregator", [DECIMALS, INITIAL_PRICE], {
            from: deployer
        })
        console.log("Mocks Deployed!")
        console.log("------------------------------------------------")
        
    }

    return {mock};
});
module.exports.tags = ["all", "mocks"]