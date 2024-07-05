"use client";
import React, { FC, useEffect, useState } from "react";
import ImageComponent from "../../../components/imageComponent";
import { Button } from "../../../components/ui/button";
import Quantity from "../../../components/ui/quantity";
import { getProductBySlug } from "@/lib/data";
import { ICart, IProduct, Icategory } from "@/lib/types";
import { useAppDispatch } from "@/app/store/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { fetchProducts } from "@/app/store/slice/products";
import { currentUser } from "@clerk/nextjs/server";
import { Heart, Minus, Plus } from "lucide-react";
import { addtoCart } from "@/app/store/slice/cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from "@/app/components/addToCarttoast";
import getStipePromise from "@/lib/stripe";



const Slug: FC<{ slug: string }> = ({ slug }) => {



  const products = useSelector((state: RootState) => state.products.products);
  const product: IProduct[] = products.filter(
    (val: any) => val.slug.current == slug
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ id: 10 }));
  }, [dispatch]);
  
  // const categoryNames = product[0].categories.map((val) => val.categoryName);
  const [cartItem, setCartItem] = useState({
    _id:product[0]._id,
    name: product[0].name,
    categories:product[0].categories.map((val) => val.categoryName),
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
    <section className="text-gray-600 body-font overflow-hidden">
      {product.map((product) => (
        <div className="container px-5 py-24 mx-auto" key={cartItem._id}>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <ImageComponent
              key={cartItem._id}
              mainImage={cartItem.mainImage}
              images={product.images}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* headings */}
              <h2 className="text-sm title-font text-gray-500 scroll-m-20 border-b pb-2 font-semibold tracking-tight first:mt-0">
                Poshak-e-chaman
              </h2>
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-1 scroll-m-20  tracking-tight lg:text-4xl line-clamp-1">
                {product.name}
              </h1>
              {/* review stars */}
              <div className="flex mb-4">
                <span className="flex items-center">
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </span>
              </div>
              <p className="leading-relaxed  [&:not(:first-child)]:mt-6 line-clamp-6">
                {product.description}
              </p>
              <div className="flex mt-6 items-center pb-5  border-gray-100 mb-5">
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <label className="form-control w-full max-w-xs">
                      <select
                        onChange={(e) =>
                          setCartItem({ ...cartItem, sizes: e.target.value })
                        }
                        className="select select-bordered"
                      >
                        <option disabled selected>
                          sizes
                        </option>
                        {product.sizes.map((size: any, i) => (
                          <option key={i}>{size}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex text-center justify-between items-center my-4">
                <div className="flex flex-wrap  lg:text-base text-sm justify-between w-[120px] border-myNavy outline-myNavy outline-offset-2 rounded-2xl">
                  <Button
                    onClick={increment}
                    className=" text-gray-500 h-fit w-fit hover:bg-myPink hover:text-gray-800  duration-500  "
                  >
                    <Plus size={10} />
                  </Button>

                  <span className="font-medium tracking-tight text-gray-800">
                    {cartItem.qty}
                  </span>

                  <Button
                    onClick={decrement}
                    className=" text-gray-500 h-fit w-fit hover:bg-myPink hover:text-gray-800 duration-500"
                  >
                    <Minus size={10} />
                  </Button>
                </div>
                <span className="title-font w-2/3 font-medium text-2xl  text-lime-600">
                  PKR:
                  {cartItem.price * cartItem.qty}
                </span>
              </div>
              <div className="divider"></div>
              <div className=" flex flex-col justify-center items-center">
                {/* Add to cart Button */}
                <Toast cartItem={cartItem}/>
              
                <div className="divider">OR</div>
                <Button onClick={handleCheckout} className=" gap-2 flex w-1/3 text-myWhite bg-myNavy border-0 py-2 px-6 focus:outline-none hover:bg-myPink rounded-xl">
                <Heart/> Buy now
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer />
    </section>
  );
};

export default Slug;
