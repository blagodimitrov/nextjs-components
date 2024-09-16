import React from "react";
import Image from "next/image";
import banner_bg from "../../public/hero_banner_bg.png";
import banner_logo from "../../public/hero_banner_logo.png";

const HeroBanner = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "30rem",
          zIndex: -1,
        }}
      >
        <Image
          src={banner_bg}
          alt="Hero Banner Background"
          layout="fill"
          objectFit="cover"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "300px",
          }}
        >
          <Image
            src={banner_logo}
            alt="Hero Banner Logo"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
