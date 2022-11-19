// import React from 'react'
// import abi from "../abi/abi.json" assert { type: "json" };
const abi = require("../abi/abi.json");

export default function Buy() {
  function buyCall() {
    // Parameters to create a NFT in the Metaverse
    var optionId = document.getElementById("_oid").value;
    // If Metamask is not available
    if (typeof window.ethereum == "undefined") {
        rej("You should install Metamask to use it!");
    }

    // Web3 Instance 
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi, "0x825c431EE4b93e139c9B6D1145a0aAa9144E281f");

    web3.eth.getAccounts().then((accounts) => {
        contract.methods.buyCallOption(optionId).send({ from: accounts[0] }).then((data) => {
            console.log("");
        });
    });
};
  return (
    <div className='buy'>
        <h1>Buy Call Options</h1>
        <div>
            <label>ID</label>
            <input type="number" />
            <button onClick={buyCall}>Submit</button>
        </div>
    </div>
  )
}
