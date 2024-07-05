import React from "react";
import Image from "next/image";
import Link from "next/link";
import accessories from "@/../public/categories/accessories.jpg";
import pants from "@/../public/categories/pants.jpg";
import shirts from "@/../public/categories/shirts.jpg";
import unstiched from "@/../public/categories/unstiched.jpg";
import stiched from "@/../public/categories/stiched.jpeg";
import shoes from "@/../public/categories/shoes.webp";

const Categories = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* catergory 1 */}
        <Link href={"/bags"}>
          <div className="overflow-hidden group relative max-h-[300px]  ">
            <Image
              src={accessories}
              alt="accessories"
              height={350}
              width={350}
              className="group-hover:scale-150 duration-500 w-full min-h-fit"
            />

            <div className="flex justify-center ">
              <h1 className="hidden lg:block absolute w-full duration-500 scroll-m-20 text-center z-10 text-4xl font-extrabold tracking-tight lg:text-5xl bg-myNavy/70 text-myWhite -bottom-24 group-hover:bottom-1 capitalize ">
                Accessories
              </h1>

              <h1 className="block lg:hidden absolute w-full duration-500 scroll-m-20 text-center z-10 text-4xl font-extrabold tracking-tight lg:text-5xl bg-myNavy/70 text-myWhite bottom-12 capitalize ">
                Accessories
              </h1>
            </div>
          </div>
        </Link>

        {/* catergory 2*/}
        <Link href={"/pants"}>
          <div className="overflow-hidden group relative max-h-[300px] ">
            <Image
              src={pants}
              alt="pants"
              height={350}
              width={350}
              className="group-hover:scale-150 duration-500 w-full min-h-fit"
            />

            <div className="flex justify-center ">
              <h1 className="hidden lg:block absolute w-full duration-500 scroll-m-20 text-center z-10 text-4xl font-extrabold tracking-tight lg:text-5xl bg-myNavy/70 text-myWhite -bottom-24 group-hover:bottom-1 capitalize ">
                pants
              </h1>

              <h1 className="block lg:hidden absolute w-full duration-500 scroll-m-20 text-center z-10 text-4xl font-extrabold tracking-tight lg:text-5xl bg-myNavy/70 text-myWhite bottom-12 capitalize ">
                Pants{" "}
              </h1>
            </div>
          </div>
        </Link>

        {/* catergory 3*/}
        <Link href={"/shirts"}>
          <div className="overflow-hidden group relative max-h-[300px] ">
            <Image
              src={shirts}
              alt="shirts"
              height={350}
              width={350}
              className="group-hover:scale-150 duration-500 w-full min-h-fit"
            />

            <div className="flex justify-center ">
              <h1 className="hidden lg:block absolute w-full duration-500 scroll-m-20 text-center z-10 text-4xl font-extrabold tracking-tight lg:text-5xl bg-myNavy/70 text-myWhite -bottom-24 group-hover:bottom-1 capitalize ">
                shirts
              </h1>

              <h1 className="block lg:hidden absolute w-full duration-500 scroll-m-20 text-center z-10 text-4xl font-extrabold tracking-tight lg:text-5xl bg-myNavy/70 text-myWhite bottom-12 capitalize  ">
                Shirts
              </h1>
            </div>
          </div>
        </Link>

        {/* catergory 4*/}
        <Link href={"/stiched"}>
          <div className="overflow-hidden group relative max-h-[300px] ">
            <Image
              src={stiched}
              alt="stiched"
              height={350}
              width={350}
              className="group-hover:scale-150 duration-500 w-full min-h-fit"
            />

            <div className="flex justify-center ">
              <h1 className="hidden lg:block absolute w-full duration-500 scroll-m-20 text-center z-10 text-4xl font-extrabold tracking-tight lg:text-5xl bg-myNavy/70 text-myWhite -bottom-24 group-hover:bottom-1 capitalize ">
                stiched
              </h1>

              <h1 className="block lg:hidden absolute w-full duration-500 scroll-m-20 text-center z-10 text-4xl font-extrabold tracking-tight lg:text-5xl bg-myNavy/70 text-myWhite bottom-12 capitalize  ">
                stiched
              </h1>
            </div>
          </div>
        </Link>

        {/* catergory 5*/}
        <Link href={"/shoes"}>
          <div className="overflow-hidden group relative max-h-[300px] ">
            <Image
              src={shoes}
              alt="shoes"
              height={350}
              width={350}
              className="group-hover:scale-150 duration-500 w-full min-h-fit"
            />

            <div className="flex justify-center ">
              <h1 className="hidden lg:block absolute w-full duration-500 scroll-m-20 text-center z-10 text-4xl font-extrabold tracking-tight lg:text-5xl bg-myNavy/70 text-myWhite -bottom-24 group-hover:bottom-1 capitalize ">
                shoes
              </h1>

              <h1 className="block lg:hidden absolute w-full duration-500 scroll-m-20 text-center z-10 text-4xl font-extrabold tracking-tight lg:text-5xl bg-myNavy/70 text-myWhite bottom-12 capitalize  ">
                Shoes
              </h1>
            </div>
          </div>
        </Link>

        {/* catergory 6*/}
        <Link href={"/unstiched"}>
          {" "}
          <div className="overflow-hidden group relative max-h-[300px] ">
            <Image
              src={unstiched}
              alt="unstiched"
              height={350}
              width={350}
              className="group-hover:scale-150 duration-500 w-full min-h-fit"
            />

            <div className="flex justify-center ">
              <h1 className="hidden lg:block absolute w-full duration-500 scroll-m-20 text-center z-10 text-4xl font-extrabold tracking-tight lg:text-5xl bg-myNavy/70 text-myWhite -bottom-24 group-hover:bottom-1 capitalize ">
                unstiched
              </h1>

              <h1 className="block lg:hidden absolute w-full duration-500 scroll-m-20 text-center z-10 text-4xl font-extrabold tracking-tight lg:text-5xl bg-myNavy/70 text-myWhite bottom-12 capitalize  ">
                unstiched
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
