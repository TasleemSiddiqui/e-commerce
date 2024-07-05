"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Trash } from "lucide-react";
import Quantity from "./ui/quantity";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/store/hooks";
import { delItem } from "@/app/store/slice/cart";

const Cartcard: FC<{
  src: string;
  title: string;
  size: string;
  price: number;
  uuid: number;
  qty:number
}> = ({ src, title, size, price, uuid,qty }) => {
  const dispatch = useAppDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="flex">
      <div>
        <Image
          src={src}
          alt={title}
          width={200}
          height={200}
          className="h-[150px] w-[150px]"
        ></Image>
      </div>
      <div className="flex flex-col w-1/3">
        <h4 className=" text-xl font-semibold tracking-tight ml-5 capitalize">
          {title}
        </h4>
        <div className="flex justify-between  ">
          <div className="flex flex-col justify-start items-start gap-5 p-5">
            {" "}
            <h4 className="text-base tracking-tight font-medium ">
              Size: &nbsp; {size}
            </h4>
            <h4 className="text-base tracking-tight font-medium ">
              Quantity: &nbsp; {qty}
            </h4>
          </div>
          <div className="flex flex-col tracking-tight  justify-center  items-center gap-5">
            {" "}
            <h4 className="text-base font-semibold text-lime-800">PKR {price}</h4>
          </div>
        </div>

      </div>
      <Trash onClick={()=>dispatch(delItem(uuid))} className="text-red-900 h-5 hover:scale-150 duration-500"/>

    </div>
  );
};

export default Cartcard;
