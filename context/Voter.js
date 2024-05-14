import React, {useState, useEffect} from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import axios from "axios";
import {useRouter} from "next/router";


import {VotingAddress, VotingAddressABI} from "./constants"
import { url } from "inspector";

const fetchContract = (signerOrProvider) => 
  new ethers.Contract(VotingAddress,VotingAddressABI, signerOrProvider);

export const VotingContext = React.createContext();

export const Votingprovider = ({ children }) => {
  const router = useRouter();
  const [currentAccount, setCurrentAccount] = useState("");
  const [candidateLength, setCandidateLength] = useState("");
  const pushCandidate = [];
  const candidateIndex = [];
  const [candidateArray, setcandidateArray] = useState(pushCandidate);


  const [error, setError] = useState("");
  const highestvote = [];

  const pushVoter = [];
  const [voterArray, setVoterArray] = useState(pushVoter);
  const [voterLength, setVoterLength] = useState("");
  const [voterAddress, setVoterAddress] = useState([]);

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setError("Please install Metamask");

    const account = await window.ethereum.request({ method: "eth_accounts"});

    if (account.length) {
      setCurrentAccount(account[0]);
      getAllVoterData();
      getNewCandidate();
    }else{
      setError("Please Install MetaMask & Connect, Reload");
    }
  };
  


  const connectWallet = async () => {
    if (!window.ethereum) return setError("Please install Metamask");

    const account = await window.ethereum.request({ 
      method: "eth_requestAccounts",
    });

      setCurrentAccount(account[0]);
      getAllVoterData();
      getNewCandidate();
    }

// incompelete
  //   const uploadtoIPFS = async (file) => {
  //     if (file) {
  //       try {
  //         const formData = new FormData();
  //         formData.append("file", file);

  //         const response = await axios({
  //           method: "post",
  //           url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //           data: formData,
  //           headers: {
  //             pinata_api_key: 'faaee200c12fd35531ee',
  //             pinata_secret_api_key: '188e20b03a0239e577530f76aeefb22aae2db710e68a22770217678c7a239764',
  //             "Content-Type": "multipart/form-data",
  //           },
  //         });
  //         const ImgHash = 'https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}';

  //       }
  //     }
  //   }
  //   }
  // };
}