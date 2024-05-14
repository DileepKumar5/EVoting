// const hre = require("hardhat");

// async function main() {
//     const Create = await hre.ethers.getContractFactory("Create");
//     const create = await Create.deploy();
//     await create.deployed();

//     console.log("Contract deployed to address:", create.address);

// }

// main().catch((error) => {
//     console.error("Unhandled error in deployment script:", error);
//     process.exitCode = 1;
// });
const { ethers } = require('hardhat')
const fs = require('fs')

const toWei = (num) => ethers.utils.parseEther(num.toString())

async function main() {
  const contract_name = 'Create'
  const Contract = await ethers.getContractFactory(contract_name)
  const contract = await Contract.deploy()

  await contract.deployed()

  const address = JSON.stringify({ address: contract.address }, null, 4)
  fs.writeFile('./artifacts/contractAddress.json', address, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Deployed contract address', contract.address)
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})