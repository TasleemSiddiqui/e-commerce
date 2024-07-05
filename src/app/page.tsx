import Categories from "@/components/categories";
import Hero from "@/components/hero";
import Promotion from "@/components/promotion";
import SectionHeader from "@/components/sectionHeader";
import Services from "@/components/services";
import BestSelling from "@/components/bestSelling";
import FeatureProducts from"@/app/components/featureProducts"
import Image from "next/image";
import Toast from "./components/addToCarttoast";

export default function Home() {
  return (
<>
<div className="container mx-auto ">
  
  <Hero/>

  <SectionHeader content="feature products"/>
  <FeatureProducts/>
  <SectionHeader content=" our services"/>
  <Services/>
  <SectionHeader content=" our promotion"/>
  <Promotion/>
  <SectionHeader content=" our categories"/>
  <Categories/>
  <SectionHeader content="Best Selling products"/>
<BestSelling/>


</div>
</>
  );
}
