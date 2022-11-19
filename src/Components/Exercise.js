// import React from 'react'
// import abi from "../abi/abi.json" assert { type: "json" };
const abi = require("../abi/abi.json");

export default function Exercise() {

function exerciseCall() {
  // Parameters to create a NFT in the Metaverse
  var optionId = document.getElementById("_id").value;
  var totalCDD = document.getElementById("_totalCDD").value;
  // If Metamask is not available
  if (typeof window.ethereum == "undefined") {
      rej("You should install Metamask to use it!");
  }

  // Web3 Instance
  let web3 = new Web3(window.ethereum);
  let contract = new web3.eth.Contract(abi, "0x825c431EE4b93e139c9B6D1145a0aAa9144E281f");

  web3.eth.getAccounts().then((accounts) => {
      contract.methods.buyCallOption(optionId, totalCDD).send({ from: accounts[0] }).then((data) => {
          console.log("");
      });
  });
};
  return (
    <div className='exe'>
        <h1>Exercise Call Options</h1>
        <div>
            <label>ID</label>
            <input type="number" />
            <label>CDD</label>
            <input type="number"></input>
            <button onClick={exerciseCall}>Submit</button>
        </div>
    </div>
  )
}
