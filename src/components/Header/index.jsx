"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import heroImg from "../../assets/michael.jpeg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import { usePathname } from "next/navigation";

function Hero() {
  const twitterIcon = twitterDark;
  const githubIcon = githubDark;
  const linkedinIcon = linkedinDark;

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div
            onClick={() => setIsActive(!isActive)}
            className={styles.menuToggle}
          >
            <div className={styles.menuToggleIcon}>
              <div className={styles.hamburger}>
                <div className={styles.menuBar} data-position="top"></div>
                <div className={styles.menuBar} data-position="bottom"></div>
              </div>
            </div>
            <div className={styles.menuCopy}>
              <p>Menu</p>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </div>

      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <Image
            src={heroImg}
            className={`${styles.hero} ${styles["hero-3d"]}`}
            alt="Profile picture of Michael Duarte"
            layout="responsive"
            objectFit="cover"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.info}>
          <h1>
            Michael
            <br />
            Duarte
          </h1>
          <h2>Desenvolvedor</h2>
          <span>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Image src={twitterIcon} alt="Twitter icon" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Image src={githubIcon} alt="GitHub icon" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image src={linkedinIcon} alt="LinkedIn icon" />
            </a>
          </span>
          <p className={styles.description}>
            Transformando ideias em experiências digitais impactantes e
            modernas.
          </p>
          <a href={CV} download>
            <button className="hover">Currículo</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
