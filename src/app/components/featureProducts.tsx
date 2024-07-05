"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect } from "react";
import BestSellingCard from "@/components/ui/bestSellingCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { IProduct } from "@/lib/types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { fetchProducts } from "../store/slice/products";
import { urlForImage } from "../../../sanity/lib/image";




const FeatureProducts = () => {
  const dispatch = useAppDispatch();
  const products:IProduct[] = useSelector((state: RootState) => state.products.products);
  const sliceProducts = products.slice(0,12)
  useEffect(() => {
    dispatch(fetchProducts({ id: 10 }));
  }, [dispatch]);



  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliceProducts.map((item, i) => (
          <div className="slider-item mx-5" key={i}>
            <BestSellingCard
              key={i}
              src={urlForImage(item.mainImage)}
              alt={item.name}
              price={item.price}
              title={item.name}
              description={item.description}
              
              slug={item.slug.current}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureProducts;
