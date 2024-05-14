'use client'
import React, { useState, useEffect, useContext } from 'react';
import Countdown from "react-countdown";


import { VotingProvider } from "../context/Voter";
import NavBar from "../components/NavBar/NavBar";
import Image from 'next/image';


import { VotingContext } from '../context/Voter';
import Card from "../components/Card/Card";
import image from "../public/assets/candidate-image01.jpg";



const HOME = () => {
  // const { votingTittle } = useContext(VotingContext);

  return (
    <div>
     {/* {votingTittle} */}
    </div>
    // <VotingProvider>
    //   <div>
    //     <NavBar />
    //     <div>
    //     </div>

    //   </div>

    // </VotingProvider>
  );



    // <VotingProvider>
    //   <div>
    //     <NavBar />
    //     <div>
    //     </div>

    //   </div>

    // </VotingProvider>


  
}

export default HOME
