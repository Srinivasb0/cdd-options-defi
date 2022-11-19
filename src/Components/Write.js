// import React from "react";
// import abi from "../abi/abi.json" assert { type: "json" };
const abi = require("../abi/abi.json");

export default function Write() {

  function writeCall() {
    // Parameters to create a NFT in the Metaverse
    var amount = document.getElementById("_amount").value;
    var strike = document.getElementById("_strike").value;
    var premium = document.getElementById("_premium").value;
    var expiry = document.getElementById("_expiry").value;

    // If Metamask is not available
    if (typeof window.ethereum == "undefined") {
      rej("You should install Metamask to use it!");
    }

    // Web3 Instance
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(
      abi,
      "0x825c431EE4b93e139c9B6D1145a0aAa9144E281f"
    );

    web3.eth.getAccounts().then((accounts) => {
      contract.methods
        .writeCallOption(amount, strike, premium, expiry)
        .send({ from: accounts[0] })
        .then((data) => {
          console.log("");
        });
    });
  }

  return (
    <div className="write">
      <h1>Write Call Options</h1>
      <div>
        <label>amount</label>
        <input type="number" />
        <label>stike</label>
        <input type="number"></input>
        <label>Premium</label>
        <input type="number"></input>
        <label>Expiry</label>
        <input type="number"></input>
        <button onClick={writeCall}>Submit</button>
      </div>
    </div>
  );
}
