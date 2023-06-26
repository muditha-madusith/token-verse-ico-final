// const abi = require("./abi")

console.log("abi")
// Check if MetaMask is installed
if (typeof web3 !== 'undefined') {
   
    // Create a Web3 instance
    web3 = new Web3(web3.currentProvider);
  } else {
    // Prompt the user to install MetaMask
    alert('Please install MetaMask to donate USDT.');
  }
  
//   // Listen for button click event
//   document.getElementById('donate-button').addEventListener('click', async function() {
//     try {
//         console.log("hiii")
//       // Request permission to access the user's MetaMask account
//       await ethereum.enable();
  
//       // Get the user's selected address
//       const accounts = await web3.eth.getAccounts();
//       const sender = accounts[0]; // Assuming the first account is used
  
//       // Prepare the transaction data
//       const contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; // USDT contract address on Ethereum Mainnet
//       const contractABI = abi.abi; // Add the USDT contract ABI here
  
//       const contract = new web3.eth.Contract(contractABI, contractAddress);
  
//       const recipient = '0x9a395ECe726bCb15430A87fdDdC86de7E976b533';
//       const amount = web3.utils.toWei('1000', 'ether'); // Convert 20 USDT to wei
  
//       // Send the transaction
//       await contract.methods.transfer(recipient, amount).send({ from: sender });
  
//       // Transaction successful
//       alert('Thank you for your donation!');
//     } catch (error) {
//       // Handle any errors
//       console.error(error);
//       alert('An error occurred while donating. Please try again.');
//     }
//   });

  document.getElementById('fuck-button').addEventListener('click', async function() {
   console.log("hiii")
  })