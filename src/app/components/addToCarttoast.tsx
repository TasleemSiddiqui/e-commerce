"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addtoCart } from "../store/slice/cart";
import { useAppDispatch } from "../store/hooks";
import { fetchProducts } from "../store/slice/products";
import { ShoppingCart } from "lucide-react";

export default function Toast({ cartItem }: any) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ id: 10 }));
  }, [dispatch]);

  const notify = () =>(
    toast.success("Add to cart successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    
    })
  )
    
  return (
    <div className="w-full mx-auto">
      <div
        onClick={notify}
        className="flex justify-center"
      >
        <Button
          onClick={() => dispatch(addtoCart(cartItem))}
          className="gap-2 flex  w-1/3 text-myWhite bg-myNavy border-0 py-2 px-6 focus:outline-none hover:bg-myPink rounded-xl"
        >
          <ShoppingCart/>  Add to cart{" "}
        </Button>
      </div>

      <ToastContainer/>
    </div>
  );
}
