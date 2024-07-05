import React from "react";
import Typewriter from "@/app/components/typewriter";
import Image from "next/image";
import img from "@/../public/products/pants/WDS23002-MIDBLUE-_1.webp";
import img2 from "@/../public/products/bag-1.webp";
import img3 from "@/../public/products/Tops/MP-APR-W-23-C-1_1.webp";
import img4 from "@/../public/products/readytowear/105.webp";
import img5 from "@/../public/products/bags/capri-10_1800x1800.webp";
import img6 from "@/../public/products/pants/ZWD21005-1.webp";
import img7 from "@/../public/products/readytowear/111.webp";
import img8 from "@/../public/products/blue-pant-1.jpg";
import { Button } from "@/components/ui/button";
const About = () => {
  return (
    <div className="bg-slate-950 text-gray-200">
      {/* section no# 1 */}
      <section className=" flex flex-col gap-10 p-10 ">
        <h1 className="text-[5vh] md:text-[10vh] uppercase  font-extrabold">
          WE
          <br />
          serve
          <br />
          <Typewriter />
        </h1>

        <p className="text-[1rem] md:text-3xl leading-3 font-serif italic">
          *If you have a body   you are an athlete
        </p>
      </section>
      {/* section no# 2 */}
      <section className=" md:grid grid-cols-3 gap-5  p-10 ">
        <Image alt="image" src={img} className="col-span-2"></Image>
        <h1 className=" text-lg text-gray-400 ">
          <span className="text-sm text-gray-700">For The Win </span>
          <br />{" "}
          <span className="text-4xl text-gray-200">
            Chloe Covell s Star is Rising
          </span>
          <br /> Learn what winning means to the face of the poshak e chaman SB Day One   a
          new silhouette designed specifically for young skateboarders.
        </h1>
      </section>

      {/* section no# 3 */}

      <section className="md:grid grid-cols-3 gap-10 p-10">
        <div>
          <Image src={img2} alt="image"></Image>
          <p className="text-sm text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            similique libero repudiandae sint ea saepe eos voluptatibus  
            asperiores nisi   accusamus quas voluptates. Sequi tempore earum vero
            amet exercitationem aliquid fugiat.
          </p>
        </div>
        <div>
          <Image src={img3} alt="image"></Image>
          <p className="text-sm text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            similique libero repudiandae sint ea saepe eos voluptatibus  
            asperiores nisi   accusamus quas voluptates. Sequi tempore earum vero
            amet exercitationem aliquid fugiat.
          </p>
        </div>
        <div>
          <Image src={img4} alt="image"></Image>
          <p className="text-sm text-gray-600 ">
            <span className="text-gray-300 text-2xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            </span>{" "}
            Iste similique libero repudiandae sint ea saepe eos voluptatibus  
            asperiores nisi   accusamus quas voluptates. Sequi tempore earum vero
            amet exercitationem aliquid fugiat.
          </p>
        </div>
      </section>
      {/* section no# 4*/}
      <section className=" md:grid grid-cols-3 gap-5  p-10 ">
        <Image alt="image" src={img5} className="col-span-2"></Image>
        <div className="flex flex-col gap-8">
          <h1 className=" text-3xl font-sans font-semibold text-gray-200 ">
            Through the Power of Community   NIKE   Inc. Advances Toward a Better
            World for All
          </h1>
          <Button className="rounded-full hover:bg-slate-400 text-gray-800 bg-slate-200 mx-6">
            FY23 NIKE   Inc. Impact Report
          </Button>
        </div>
      </section>
      {/* section 5 */}
      <section className="flex flex-col p-10 gap-10">
        <h1 className="text-3xl text-gray-200 font-bold"> Initiatives</h1>
        <div className="md:grid grid-cols-3 gap-5 ">
          <div className="flex flex-col gap-5">
            <Image alt="image" src={img8}></Image>

            <h1 className=" text-3xl font-sans font-semibold text-gray-200 ">
              Getting Kids Active
            </h1>
            <p className="text-sm text-gray-600 ">
              poshak e chaman invests in play and sport for all kids   because an active
              next generation means a healthier and more equitable future.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Image alt="image" src={img7} ></Image>

            <h1 className=" text-3xl font-sans font-semibold text-gray-200 ">
              Building and Investing In Our Teams
            </h1>
            <p className="text-sm text-gray-600 ">
              We support the personal and professional wellbeing of NIKE   Inc.
              employees — from manufacturing to corporate — through a range of
              programs and partnerships.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Image alt="image" src={img6}></Image>

            <h1 className=" text-3xl font-sans font-semibold text-gray-200 ">
              Giving Back to Our Communities
            </h1>
            <p className="text-sm text-gray-600 ">
              We re committed to building a future where everyone — regardless
              of where they are from   the color of their skin   their abilities
              or who they love — can thrive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
