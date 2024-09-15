"use client";

import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/atd_logo.png";
import hamburger from "../../public/hamburger_menu.svg";
import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const sideMenuRef = useRef<HTMLElement | null>(null);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="ATD Logo" width={60} height={60} />
          </Link>
        </div>
        <div className={styles.linkGroup}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <div className={styles.linkContainer}>
                <div className={styles.linkName}>About</div>
                <div className={styles.linkDropdown}>
                  <div className={styles.dropdownContent}>
                    <ul>
                      <li className={styles.subLink}>
                        <Link href="https://atdintensive.td.org/about">
                          What is ATD Intensive?
                        </Link>
                      </li>
                      <li className={styles.subLink}>
                        <Link href="https://atdintensive.td.org/about">
                          Virtual Platform
                        </Link>
                      </li>
                      <li className={styles.subLink}>
                        <Link href="https://atdintensive.td.org/about">
                          Resource Hub
                        </Link>
                      </li>
                      <li className={styles.subLink}>
                        <Link href="https://atdintensive.td.org/about">
                          ATD Membership
                        </Link>
                      </li>
                      <li className={styles.subLink}>
                        <Link href="https://atdintensive.td.org/about">
                          Convince Your Boss
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.link}>
              <div className={styles.linkContainer}>
                <div className={styles.linkName}>Program</div>
                <div className={styles.linkDropdown}>
                  <div className={styles.dropdownContent}>
                    <ul>
                      <li className={styles.subLink}>
                        <Link href="https://atdintensive.td.org/about">
                          Co-Creators
                        </Link>
                      </li>
                      <li className={styles.subLink}>
                        <Link href="https://atdintensive.td.org/about">
                          Agenda
                        </Link>
                      </li>
                      <li className={styles.subLink}>
                        <Link href="https://atdintensive.td.org/about">
                          Speakers
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.linkSponsor}>
              <div>
                <div>Sponsor</div>
              </div>
            </li>
          </ul>
        </div>
        <Link className={styles.registerButton} href={"/"}>
          Register
        </Link>
        <div className={styles.hamburgerMenu} onClick={handleMenuToggle}>
          <Image src={hamburger} alt="Hamburger Menu" width={30} height={30} />
        </div>
        {isMenuOpen && (
          <div
            className={styles.overlay}
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
        <div
          ref={sideMenuRef as React.RefObject<HTMLDivElement>}
          className={`${styles.sideMenu} ${isMenuOpen ? styles.showMenu : ""}`}
        >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
