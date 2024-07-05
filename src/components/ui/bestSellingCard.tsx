'use client'
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./button";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { addtoCart } from "@/app/store/slice/cart";
import getStipePromise from "@/lib/stripe";
import { IProduct } from "@/lib/types";
import { fetchProducts } from "@/app/store/slice/products";
import { useAppDispatch } from "@/app/store/hooks";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const BestSellingCard: FC<{
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category?:string[] |  string | undefined;
  slug:string
}> = ({ src, alt, title, description, price,category,slug }) => {

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

  const products = useSelector((state: RootState) => state.products.products);
  const product: IProduct[] = products.filter(
    (val: any) => val.slug.current == slug
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ id: 10 }));
  }, [dispatch]);
  
  const categoryNames = product[0].categories.map((val) => val.categoryName);
  const [cartItem, setCartItem] = useState({
    _id:product[0]._id,
    name: product[0].name,
    categories:categoryNames,
    price: product[0].price,
    mainImage: product[0].mainImage,
   slug: product[0].slug,
   sizes:"",
     qty: 1,
  });

  function increment() {
    setCartItem({ ...cartItem, qty: ++cartItem.qty });
  }
  function decrement() {
    setCartItem({ ...cartItem, qty: cartItem.qty <= 1 ? 1 : --cartItem.qty });
  }
function handleAddToCart() {
  dispatch(addtoCart(cartItem));
 notify(); 
}




  //check out button

  const cartArray = useSelector((state: RootState) => state.cart);
  const total = cartArray.reduce((total, arr) => {
    return total + arr.price * arr.qty;
  }, 0);
  
// handle checkout


const handleCheckout = async () => {
  dispatch(addtoCart(cartItem))
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
    <div>
      <div>
        <div className="card bg-base-100 w-[350px] h-[32rem] shadow-xl realtive my-3">
        <div className="card-body">
         <Link href={`/${category}/${slug}`}> <div className="mx-auto w-[300px] h-[300px] overflow-hidden">
            <Image
              src={src}
              alt={alt}
              width={250}
              height={230}
            />
          </div>
          
            <h2 className="card-title scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0 line-clamp-1 text-gray-800">
             {title}
            </h2>
            <p className="leading-4 [&:not(:first-child)]:mt-2 line-clamp-2 text-xs text-gray-600">
              {description}
            </p>
            <p className="leading-4 [&:not(:first-child)]:mt-2  text-sm text-gray-950">
              PKR {price}
            </p></Link>
            <div className="card-actions justify-between">
            <Button className=" bg-myNavy text-myWhite hover:bg-myPink duration-500 rounded-xl gap-2" onClick={handleCheckout}>
               <Heart/> Buy Now
              </Button>
              <Button onClick={handleAddToCart} className=" bg-myNavy text-myWhite hover:bg-myPink duration-500 rounded-xl gap-2">
               <ShoppingCart/> Add to cart
              </Button>
              
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default BestSellingCard;
