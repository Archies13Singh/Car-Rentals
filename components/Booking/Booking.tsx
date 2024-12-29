"use client";
import React, { useEffect } from "react";
import AutoComplete from "./AutoComplete";
import Cars from "./Cars";
import Cards from "./Cards";

const Booking = () => {
  //   const screenHeight = window.innerHeight;
  const innerHeight = window.innerHeight * 0.75

  return (
    <div className="p-5 ">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-[1px] p-5 rounded-md" style={{height:innerHeight}}>
        <AutoComplete />
        <Cars/>
        <Cards/>
        <button className="w-full p-1 rounded-md mt-4 bg-yellow-400">Book</button>
      </div>

    </div>
  );
};

export default Booking;
