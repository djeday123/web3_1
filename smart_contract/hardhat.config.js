// https://eth-sepolia.g.alchemy.com/v2/UMxfypaEmDF5Sk-lLhfiP8xZtz7fuF76

require("@nomiclabs/hardhat-waffle");

module.exports = {
     solidity: "0.8.0",
     networks: {
        sepolia: {
                url: "https://eth-sepolia.g.alchemy.com/v2/UMxfypaEmDF5Sk-lLhfiP8xZtz7fuF76",
                accounts: [`6fef616022e8534c92770d7cd4dc3bcf67256a75393fb97808bc96a6f76b90db`],
            },
     },
  };


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// 
