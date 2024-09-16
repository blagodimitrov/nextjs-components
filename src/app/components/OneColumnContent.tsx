import React from "react";
import Link from "next/link";
import styles from "./OneColumnContent.module.css";

const OneColumnContent = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#4a545f",
          padding: "3rem",
        }}
      >
        <div className="text-4xl py-4 font-semibold text-white">
          Get Access to ATD Intensive
        </div>
        <div className="text-lg py-2 text-white">
          If you've registered for ATD Intensive, you can access the virtual
          platform to join sessions opening on August 15 at 10:50 a.m. ET. Are
          you looking for slides or resources? Head over to the resource hub to
          find everything you need after logging into your ATD account.
        </div>
        <div className="py-4 gap-3 flex md:flex-column text-center">
          <Link className={`${styles.actionButton}`} href={"/"}>
            Virtual Platform
          </Link>
          <Link className={`${styles.actionButton}`} href={"/"}>
            Resources Hub
          </Link>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "1.2rem",
          backgroundColor: "#ebfd4b",
        }}
      ></div>
    </>
  );
};

export default OneColumnContent;
