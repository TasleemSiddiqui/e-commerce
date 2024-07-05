import React from "react";

const Promotion = () => {
  return (
    <section>
      {/* Promotion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1st item */}

        <div className="hero min-h-[60vh] promo-1 rounded-xl">
          <div className="hero-overlay bg-opacity-35 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-2xl font-bold  tracking-tight lg:text-4xl uppercase text-myWhite">
                get upto{" "}
                <span className="text-myNavy font-extrabold text-6xl">
                  {" "}
                  60%
                </span>{" "}
                off
              </h1>
              <p className="line-clamp-2 [&:not(:first-child)]:mt-3 text-myGrey">
                Flash sale, get 60% off on summer collecton
              </p>
            </div>
          </div>
        </div>

        {/* 2nd item */}
        <div className="hero min-h-[60vh] promo-2 rounded-xl">
          <div className="hero-overlay bg-opacity-35 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-2xl font-bold  tracking-tight lg:text-4xl uppercase text-myWhite">
                get upto{" "}
                <span className="text-myNavy font-extrabold text-6xl">
                  {" "}
                  30%
                </span>{" "}
                off
              </h1>
              <p className="line-clamp-2 [&:not(:first-child)]:mt-3 text-myGrey">
                Flash sale, get 60% off on jewllwery collecton
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
