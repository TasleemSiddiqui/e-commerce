"use client";
import SectionHeader from "@/components/sectionHeader";
import BestSellingCard from "@/components/ui/bestSellingCard";
import { getCategorybySlug } from "@/lib/data";
import { IProduct, Icategory } from "@/lib/types";
import React, { useEffect } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProducts } from "../store/slice/products";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Categories = ({ params }: { params: { categories: string } }) => {
  const dispatch = useAppDispatch();

  const products = useSelector((state: RootState) => state.products.products);
  const categorize: IProduct[] = products.filter((product: IProduct) =>
    product.categories.some(
      (category: Icategory) =>
        category.categorySlug.current === params.categories
    )
  );
  useEffect(() => {
    dispatch(fetchProducts({ id: 10 }));
  }, [dispatch]);


  return (
    <section className="container">
      <SectionHeader content={params.categories} />
      <div className="flex flex-wrap justify-center gap-4">
        {categorize.map((product, index) => (
          <BestSellingCard
            key={index}
            slug={product.slug.current}
            category={
              params.categories
              // product.categories &&
              // product.categories.map(
              //   (cat: Icategory) => cat.categorySlug.current
              // )
            }
            title={product.name}
            description={product.description}
            alt={product.name}
            price={product.price}
            src={urlForImage(product.mainImage)}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
