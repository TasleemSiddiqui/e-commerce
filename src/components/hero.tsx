import React from "react";
import heroImg from "@/../public/Tawakkal-Fashion-And-Fantasy-lawn-Embroidered-Collection-2019-Wholesale-Online-Shopping-Pakistani-Suits-19.jpg";
import { Button } from "./ui/button";
import { FaShoppingBag } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="mb-[100px] ">
      <div className="hero min-h-[90vh]  h-full w-full hero-img bg-fixed bg-no-repeat bg-center mx-auto ">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">
              Welcome to <span className="text-myNavy">Poshak-e-chaman</span>{" "}
            </h1>
            <p className="mb-5 leading-7 [&:not(:first-child)]:mt-6 text-myGrey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              quo consequuntur vel porro vitae dolore magni accusamus quibusdam
              minus obcaecati ipsam reprehenderit, aut consectetur adipisci
              sint, cum nulla quia atque!
            </p>
            <Button variant="outline" className="gap-2 text-lg p-5 group hover:rounded-xl hover:border-myPink hover:duration-300"> <FaShoppingBag className="group-hover:text-myPink group-hover:animate-bounce"  />
             Shop now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
