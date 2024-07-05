"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { Minus, Plus } from "lucide-react";


const Quantity = () => {
  const [count, setcount] = useState(1);
  function increment() {
    setcount(count + 1);
  }
  function decrement() {
    if (count > 2) {
    setcount(count - 1)
  }else
  {
    setcount(1)
  };
  }
  return (
    <div className="flex flex-wrap  lg:text-base text-sm justify-between w-[120px] border-myNavy outline-myNavy outline-offset-2 rounded-2xl">
      <Button onClick={increment} className=" text-gray-500 h-fit w-fit hover:bg-myPink hover:text-gray-800  duration-500  ">
        <Plus size={10} />
      </Button>

      <span className="font-medium tracking-tight text-gray-800">{count}</span>

  <Button onClick={decrement} className=  " text-gray-500 h-fit w-fit hover:bg-myPink hover:text-gray-800 duration-500">
        <Minus size={10}  />
      </Button>
    
      
    </div>
  );
};

export default Quantity;
