"use client"
import React from "react";
import { Button } from "../../components/ui/button";
import Cartcard from "../../components/cartcard";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { urlForImage } from "../../../sanity/lib/image";
import getStipePromise from "@/lib/stripe";


const Cart = () => {

  const cartArray = useSelector((state: RootState) => state.cart);
  const total = cartArray.reduce((total, arr) => {
    return total + arr.price * arr.qty;
  }, 0);
  

// handle checkout

const handleCheckout = async () => {
  const stripe = await getStipePromise();
  const response = await fetch("/api/stripe-session/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-cache",
    body: JSON.stringify(cartArray),
  });

  const data = await response.json();
  if (data.session) {
    stripe?.redirectToCheckout({ sessionId: data.session.id });
  }
};



  return (
    <section className="min-h-screen">
        <div className="lg:grid  lg:grid-cols-3 flex flex-col-reverse  ">
        {/* item */}
        <div className="col-span-2 gap-y-10 ">
          {cartArray.map((item, i) => (
            <div className="border-b-2 my-5 px-3 py-2" key={i}>
              <Cartcard
                src={urlForImage(item.mainImage)}
                title={item.name}
                size={item.sizes}
                price={item.price * item.qty}
                uuid={item.uuid}
                qty={item.qty}
              />
            </div>
          ))}
        </div>
        {/* summary */}
        <div className="px-5 lg:sticky self-start top-16 w-full ">
          <div className="bg-gray-800/5  rounded-xl px-5 py-5">
            {/* heading */}
            <h1 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl">
              Order Summary
            </h1>
            {/* divider */}
            <div className="divider mt-0 mb-1"></div>
            {/* pricing */}
            <div className="text-sm font-medium tracking-tight text-gray-900">
              {/* product price */}
              <div className="flex items-center justify-between capitalize">
                <h2>Sub total</h2>
                <h2>$0.00</h2>
              </div>
              {/* delivery charges */}
              <div className="flex items-center justify-between capitalize">
                <h2>Delivery charges</h2>
                <h2>$0.00</h2>
              </div>
              {/* sales tax*/}
              <div className="flex items-center justify-between capitalize">
                <h2>Sales tax</h2>
                <h2>$0.00</h2>
              </div>
            </div>
            {/* divider */}
            <div className="divider mt-0 mb-2"></div>
            <div className="flex items-center justify-between uppercase text-sm font-semibold">
              <h2>Estimated total</h2>
              <h2>{total}</h2>
            </div>
            <div className="divider mt-0 mb-1"></div>
            {/* checkout button */}
            <div className="flex justify-center items-center w-full py-5 ">
              <Button onClick={handleCheckout} className="capitalize bg-myNavy text-myWhite hover:bg-myPink duration-500 rounded-xl">
                {" "}
                proceed to checkout{" "}
              </Button>
              
            </div>
            {/* divider */}
            <div className="divider mt-0 mb-2"></div>
            {/* note */}
            <div className="">
              <span className="text-base font-semibold font-serif tracking-tight text-red-700">
                {" "}
                Note
              </span>
              <p className="text-xs italic tracking-tight w-[90%] text-gray-700">{`*Delivery Charges and Sales Tax will be  calculated in the checkout page`}</p>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Cart;
