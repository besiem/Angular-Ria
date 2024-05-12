"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
      <h1 className="hero__title">
          ReactRentCar
        </h1>
        <br></br>
        <h1 className="hero__title">
          Zobacz, przeczytaj i wypożycz AUTO !
        </h1>

        <p className="hero__subtitle">
        Usprawnij proces wynajmu samochodu dzięki naszemu łatwemu procesowi rezerwacji.
        </p>

        <CustomButton
          title="Szukaj samochodu"
          containerStyles="text-primary-blue rounded-full bg-black min-w-[130px] w-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero12.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
