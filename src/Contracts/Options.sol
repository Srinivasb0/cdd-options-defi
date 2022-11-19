// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";


// Address : 0x825c431EE4b93e139c9B6D1145a0aAa9144E281f
contract Options is ReentrancyGuard, Ownable {

    // STORAGE
    IERC20 link;
    LinkTokenInterface LINK;
    uint256 public s_optionCounter;
    uint256 public s_optionId;
    uint256 public linkValue;
    uint256 public amount;

    mapping(uint256 => Option) public s_optionIdToOption;
    mapping(address => uint256[]) public s_tradersPosition;

    enum OptionState {
        Open,
        Bought,
        Cancelled,
        Exercised
    }

    enum OptionType {
        Call
    }


    struct Option {
        address writer;
        address buyer;
        uint256 amount;
        uint256 strike;
        uint256 premium;
        uint256 expiration;
        uint256 collateral;
        OptionState optionState;
        OptionType optionType;
    }

    ///ERRORS///

    error TransferFailed();
    error NeedsMoreThanZero();
    error OptionNotValid(uint256 _optionId);

    ///EVENTS///
    event CallOptionOpen(uint256 id, address writer, uint256 amount, uint256 strike, uint256 premium, uint256 expiration, uint256 value);
    event CallOptionBought(address buyer, uint256 id);
    event CallOptionExercised(address buyer, uint256 id);

    // Network : Matic
    // Matic chainlink Address : 0x326C977E6efc84E512bB9C30f76E30c160eD06FB
    
    constructor(address _linkAddr) {
        LINK = LinkTokenInterface(_linkAddr);
    }

    // @dev A seller writes a call option. ETH is sent to contract for collateral.
    // @parm _amount is the number of LINK per CDD
    // @parm _strike is the fixed rate of CDD in days
    // @parm _expiry is the maximum CDD days to expire the options
    // @parm _premium the cost of the option call paid by buyer in LINK
    function writeCallOption(
        uint256 _amount,
        uint256 _strike,
        uint256 _premium,
        uint256 _expiry
    ) external payable {
        s_optionIdToOption[s_optionCounter] = Option(
            payable(msg.sender),
            address(0),
            _amount,
            _strike,
            _premium,
            _expiry,
            msg.value,
            OptionState.Open,
            OptionType.Call
        );

        s_tradersPosition[msg.sender].push(s_optionCounter);
        s_optionId = s_optionCounter++;

        emit CallOptionOpen(s_optionId, msg.sender, _amount, _strike, _premium, _expiry, msg.value);
        linkValue = msg.value;
        amount = _amount;
    }

    // Writer approves the Tokens
    function approveToken(uint256 _optionId) external {
        Option memory option = s_optionIdToOption[_optionId];
        bool approve = LINK.approve(s_optionIdToOption[_optionId].writer, option.premium);
    }


    ///@dev Buy an open call option.
    ///@param _optionId would need to be used to access the correct option. Every buyer must have a seller.
    function buyCallOption(uint256 _optionId)
        external
         {
            Option memory option = s_optionIdToOption[_optionId];
            
            // LINK transfered to writer
            bool paid = LINK.transfer(option.writer, option.premium);
            if(!paid) revert TransferFailed();

            s_optionIdToOption[_optionId].buyer = msg.sender;
            s_optionIdToOption[_optionId].optionState = OptionState.Bought;
            s_tradersPosition[msg.sender].push(_optionId);

            emit CallOptionBought(msg.sender, _optionId);
        }

    ///@dev The buyer can exercise a call option at expiration.
    ///@param _optionId would need to be used to access the correct option. Every buyer must have a seller.
    function exerciseCallOption(uint256 _optionId, uint256 totalCDD)
        external
        optionExists(_optionId)
        nonReentrant {
            Option memory option = s_optionIdToOption[_optionId];

            require(msg.sender == option.buyer, "NOT BUYER");
            require(option.optionState == OptionState.Bought, "NEVER BOUGHT");
            // require(option.expiration < block.timestamp, "HAS NOT EXPIRED");

            //If CDD < strike in CDD, option is worthless
            require( totalCDD > option.strike, "NOT GREATER THAN STRIKE");

            // Buyer gets 0.1Link  for each CDD (max 20 CDD)
            uint256 payableCDD = option.expiration - totalCDD;
            uint256 payableLink = payableCDD * option.amount;

            // Transfer to msg.sender the writer's collateral
            uint256 balance = LINK.balanceOf(address(this));
            require(balance >= payableLink, "NOT ENOUGH LINK BALANCE");
            bool paid = LINK.transfer(msg.sender, payableLink);
            if(!paid) revert TransferFailed();


            s_optionIdToOption[_optionId].optionState = OptionState.Exercised;
            emit CallOptionExercised(msg.sender, _optionId);

        }

    // Modifiers
    modifier optionExists(uint256 optionId) {
        if (s_optionIdToOption[optionId].writer == address(0)) revert OptionNotValid(optionId);
        _;
    }

    modifier isValidOpenOption(uint256 optionId) {
        if (
            s_optionIdToOption[optionId].optionState != OptionState.Open ||
            s_optionIdToOption[optionId].expiration > block.timestamp
            // || s_optionIdToOption[optionId].buyer == address(0)
        ) revert OptionNotValid(optionId);
        _;
    }
}