'use client'
import React from "react";
import BestSellingCard from "./ui/bestSellingCard";
import Image from "next/image";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/app/store/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { Icategory, IProduct } from "@/lib/types";
import { useEffect } from "react";
import { fetchProducts } from "@/app/store/slice/products";
import { urlForImage } from "../../sanity/lib/image";

const BestSelling = () => {
  const dispatch = useAppDispatch();
  const products:IProduct[] = useSelector((state: RootState) => state.products.products);
  const sliceProducts = products.slice(3,6)
  useEffect(() => {
    dispatch(fetchProducts({ id: 10 }));
  }, [dispatch]);



  // const products = [
  //   {
  //     src: "/products/white-top-1.webp",
  //     alt: "White Top",
  //     title: "White Top",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos hic molestias autem laboriosam provident consequatur rem ipsam doloribus excepturi consequuntur libero quidem deleniti, ipsum ea temporibus voluptas ipsa fuga repellendus.",
  //     price: 1500,
  //     category:"shirts",
  //     slug:"white-top"
  //   },
  //   {
  //     src: "/products/blue-pant-1.jpg",
  //     alt: "Blue pant",
  //     title: "Blue Pant",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos hic molestias autem laboriosam provident consequatur rem ipsam doloribus excepturi consequuntur libero quidem deleniti, ipsum ea temporibus voluptas ipsa fuga repellendus.",
  //     price: 800,
  //     category:"pants",
  //     slug:"blue-pants"
  //   },
  //   {
  //     src: "/products/bag-1.webp",
  //     alt: "Bag",
  //     title: "Mehroon Bag",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos hic molestias autem laboriosam provident consequatur rem ipsam doloribus excepturi consequuntur libero quidem deleniti, ipsum ea temporibus voluptas ipsa fuga repellendus.",
  //     price: 3500,
  //     category:"bags",
  //     slug:"mehroon-bags"
  //   },
  // ];

  return (
    <section className="flex flex-wrap justify-between ">
        {
            sliceProducts.map((item,i)=>(<BestSellingCard key={i} src={urlForImage(item.mainImage)} alt={item.name} price={item.price} title={item.name} description={item.description}   slug={item.slug.current}/>))
        }
     
    </section>
  );
};

export default BestSelling;
