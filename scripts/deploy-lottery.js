const { network } = require("hardhat")
const {developmentChains, networkConfig} = require("../helper-hardhat-config")

module.exports = async function({getNamedAccounts, deployments}) {
  const {deploy, log} = deployments
  const {deployer} = await getNamedAccounts()
  const chainId = network.config.chainId

  if (developmentChains.includes(network.name)) {
    log("Local network detected! Prepare to deploy...")
  } else {
    // Nothing needed
  }
  const args = []

  const lottery = await deploy("Lottery", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  })

}

module.exports.tags = ["all", "mocks"]
