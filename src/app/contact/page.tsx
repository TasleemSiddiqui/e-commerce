import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, MessageSquareText, Search, Smartphone } from "lucide-react";
import React from "react";

const Help = () => {
  return (
    <div className="container">
      <section className="flex flex-col justify-center items-center gap-7 p-10">
        <h1 className="text-gray-800 font-extrabold text-2xl">Get Help</h1>
        <div className=" px-3 w-96 flex justify-between items-center border border-solid border-black rounded-lg">
          <Input
            placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxx"
            className="w-80 border-none"
          ></Input>
          <Search className="text-gray-400" />
        </div>
      </section>
      <section className="flex flex-col gap-3 p-10">
        <h1 className="text-2xl text-gray-800 font-semibold ">
          Get a personalized Help experience.
        </h1>
        <Button className="rounded-full w-20">Sign In</Button>
        <p className="text-gray-500 text-xs">Not a member, yet? Join Us</p>
      </section>

      <section className="p-10 leading-7 ">
        <h1 className="text-2xl text-gray-700 font-medium"> Quick Assists</h1>
        <p className="text-sm text-gray-500">
          Answers to our most frequently asked questions are just one click
          away.
        </p>
        <br />
        <hr className="w-full" />
      </section>

      <section className="grid grid-cols-2  md:grid-cols-3 gap-10 px-10 py-6 text-gray-900 text-sm">
        <ul>
          <li>
            <span className="font-semibold">Returns</span>
          </li>
          <li>What is Nike s return policy?</li>
          <li>How do I return my Nike order?</li>
          <li>Where is my refund?</li>
          <li>View all</li>
        </ul>
        <ul>
          <li>
            <span className="font-semibold">Shipping & Delivery</span>
          </li>
          <li>What is Nike s return policy?</li>
          <li>How do I return my Nike order?</li>
          <li>Where is my refund?</li>
          <li>View all</li>
        </ul>
        <ul>
          <li>
            <span className="font-semibold">Orders & Payment</span>
          </li>
          <li>What is Nike s return policy?</li>
          <li>How do I return my Nike order?</li>
          <li>Where is my refund?</li>
          <li>View all</li>
        </ul>
        <ul>
          <li>
            <span className="font-semibold">Shopping</span>
          </li>
          <li>What is Nike s return policy?</li>
          <li>How do I return my Nike order?</li>
          <li>Where is my refund?</li>
          <li>View all</li>
        </ul>
        <ul>
          <li>
            <span className="font-semibold">Nike Membership & Apps</span>
          </li>
          <li>What is Nike s return policy?</li>
          <li>How do I return my Nike order?</li>
          <li>Where is my refund?</li>
          <li>View all</li>
        </ul>
        <ul>
          <li>
            <span className="font-semibold">Company Info</span>
          </li>
          <li>What is Nike s return policy?</li>
          <li>How do I return my Nike order?</li>
          <li>Where is my refund?</li>
          <li>View all</li>
        </ul>
      </section>

      <section className="p-10 leading-7 ">
        <h1 className="text-2xl text-gray-700 font-medium"> Contact us</h1>

        <br />
        <hr className="w-full" />
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-10 px-40 py-10">
        <div className=" flex flex-col justify-center items-center text-xs">
          <MessageSquareText size={60} className="m-auto my-8 " />
          <ul>
            <li><span className="font-semibold">Products & Orders</span></li>
            <li>4 am - 11 pm PT</li>
            <li>7 days a week</li>
          </ul>
        </div>
        <div className=" flex flex-col justify-center items-center text-xs">
        <Smartphone size={60} className="m-auto my-8 " />
          <ul>
            <li><span className="font-semibold">Products & Orders</span></li>
           <li>1-800-806-6453</li>
            <li>4 am - 11 pm PT</li>
            <li>7 days a week</li>
            <li></li>
          </ul>
        </div>
        <div className=" flex flex-col justify-center items-center text-xs">
          <Smartphone size={60} className="m-auto my-8 " />
          <ul className="">
            <li><span className="font-semibold">NRC, NTC & .SWOOSH</span></li>
            <li>1-800-806-6453</li>
            <li>4 am - 11 pm PT</li>
            <li>7 days a week</li>
          </ul>
        </div>
        <div className=" flex flex-col justify-center items-center text-xs">
          <Smartphone size={60} className="m-auto my-8 " />
          <ul>
            <li><span className="font-semibold">Company Info & Inquiries</span></li>
            <li>4 am - 11 pm PT</li>
            <li>7 days a week</li>
          </ul>
        </div>
        <div className=" flex flex-col justify-center items-center text-xs">
          <MapPin   size={60} className="m-auto my-8 " />
          <ul>
            <li><span className="font-semibold">Find Store</span></li>
            
            
          </ul>
        </div>
        
      </section>
    </div>
  );
};

export default Help;



