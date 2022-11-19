// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import "./App.css";
// import Header from "./Components/Header";
// const Write = require('./Components/Write.js');
// const Buy = require('./Components/Buy.js');
// const Exercise = require('./Components/Exercise.js');
// const Approve = require('./Components/Approve.js');
// import Write from "./Components/Write";
// import Buy from "./Components/Buy";
// import Exercise from "./Components/Exercise";
// import Approve from "./Components/Approve";

// const abi = require("../abi/abi.json");
// import abi from './abi/abi.json';

const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_linkAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NeedsMoreThanZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_optionId",
        type: "uint256",
      },
    ],
    name: "OptionNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "CallOptionBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "CallOptionExercised",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "writer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "strike",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "CallOptionOpen",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_optionId",
        type: "uint256",
      },
    ],
    name: "approveToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_optionId",
        type: "uint256",
      },
    ],
    name: "buyCallOption",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_optionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalCDD",
        type: "uint256",
      },
    ],
    name: "exerciseCallOption",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "linkValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "s_optionCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_optionId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "s_optionIdToOption",
    outputs: [
      {
        internalType: "address",
        name: "writer",
        type: "address",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "strike",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateral",
        type: "uint256",
      },
      {
        internalType: "enum Options.OptionState",
        name: "optionState",
        type: "uint8",
      },
      {
        internalType: "enum Options.OptionType",
        name: "optionType",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "s_tradersPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_strike",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_premium",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
    ],
    name: "writeCallOption",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

function Approve() {
  let optionId = React.useRef();
  function aproveCall() {
    // Parameters to create a NFT in the Metaverse
    // var optionId = document.getElementById("_oid").value;
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
        .approveToken(optionId.current.value)
        .send({ from: accounts[0] })
        .then((data) => {
          console.log("");
        });
    });
  }
  return (
    <div>
      <div className="approve">
        <h1>Approve Tokens</h1>
        <div>
          <label>Option ID</label>
          <input type="number" ref={optionId} />
          <button onClick={aproveCall}>Approve</button>
        </div>
      </div>
    </div>
  );
}
function Buy() {
  let optionId = React.useRef();
  function buyCall() {
    // Parameters to create a NFT in the Metaverse
    // var optionId = document.getElementById("_oid").value;
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
        .buyCallOption(optionId.current.value)
        .send({ from: accounts[0] })
        .then((data) => {
          console.log("");
        });
    });
  }
  return (
    <div className="buy">
      <h1>Buy Call Options</h1>
      <div>
        <label>Option ID</label>
        <input type="number" ref={optionId}/>
        <button onClick={buyCall}>Submit</button>
      </div>
    </div>
  );
}

function Exercise() {
  let optionId = React.useRef();
  let totalCDD = React.useRef();
  function exerciseCall() {
    // Parameters to create a NFT in the Metaverse
    // var optionId = document.getElementById("_id").value;
    // var totalCDD = document.getElementById("_totalCDD").value;
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
        .exerciseCallOption(optionId.current.value, totalCDD.current.value)
        .send({ from: accounts[0] })
        .then((data) => {
          console.log("");
        });
    });
  }
  return (
    <div className="exe">
      <h1>Exercise Call Options</h1>
      <div>
        <label>Option ID</label>
        <input type="number" ref={optionId}/>
        <label> Total CDD</label>
        <input type="number" ref={totalCDD}></input>
        <button onClick={exerciseCall}>Submit</button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h2>Cooling Day Degree(CDD)</h2>
      <p>The CDD measures the cooling demand that arises by upward diversion of average daily temperatures from a base level.
      The CDD options measures the cooling demand that arises by upward diversion of average daily temperatures from a base level(>18 Celsius). 
      </p>
    </div>
  );
}

function Write() {
  let amount = React.useRef();
  let strike = React.useRef();
  let premium = React.useRef();
  let expiry = React.useRef();
  function writeCall() {
    // Parameters to create a NFT in the Metaverse
    // var amount = document.getElementById("_amount").value;
    // var strike = document.getElementById("_strike").value;
    // var premium = document.getElementById("_premium").value;
    // var expiry = document.getElementById("_expiry").value;

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
        .writeCallOption(amount.current.value, strike.current.value, premium.current.value, expiry.current.value)
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
        <label id='_amount'>Link per CDD</label>
        <input type="number" ref={amount}/>
        <label >Strike in CDD</label>
        <input type="number" ref={strike}></input>
        <label>Premium in Link</label>
        <input type="number" ref={premium}></input>
        <label>Expiry in Days</label>
        <input type="number" ref={expiry}></input>
        <button onClick={writeCall}>Submit</button>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="main">
      <Header></Header>
      <div className="boxes">
        <Write></Write>
        <Approve></Approve>
        <Buy></Buy>
        <Exercise></Exercise>
      </div>
    </div>
  );
};

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(<App />, document.querySelector("#root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
