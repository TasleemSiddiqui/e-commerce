import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="py-10">
      {/* delivery */}
      <div className=" md:grid grid-cols-3 gap-4 text-center ">
        <div className=" p-3 group ">
          <Image
            src={"/services/noun-delivery-6953690.png"}
            alt="delivery"
            height={150}
            width={150}
            className="h-150 w-150 flex mx-auto"
          />
          <h3 className=" text-xl font-extrabold text-gray-950   capitalize mt-3 group-hover:text-myPink">
            free delivery
          </h3>
          <p className="[&:not(:first-child)]:mt-3 line-clamp-2 text-gray-700 text-sm capitalize">
            free delivery above on PKR 3000
          </p>
        </div>

        {/* 24/7 services */}

        <div className=" p-3 group">
          <Image
            src={"/services/noun-services-4775092.png"}
            alt="delivery"
            height={150}
            width={150}
            className="h-150 w-150 flex mx-auto"
          />
          <h3 className=" text-xl font-extrabold text-gray-950   capitalize mt-3 group-hover:text-myPink">
            24/7 services
          </h3>
          <p className="[&:not(:first-child)]:mt-3 line-clamp-2 text-gray-700 text-sm capitalize">
            our services are available 24/7 feel free to contact us
          </p>
        </div>

        {/* money back */}

        <div className="p-3 group">
          <Image
            src={"/services/noun-loan-6094892.png"}
            alt="money back"
            height={150}
            width={150}
            className="h-150 w-150 flex mx-auto"
          />
          <h3 className=" text-xl font-extrabold text-gray-950   capitalize mt-3 group-hover:text-myPink">
            Money Back
          </h3>
          <p className="[&:not(:first-child)]:mt-3 line-clamp-2 text-gray-700 text-sm capitalize">
            money back gurantee on damage stuff
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
