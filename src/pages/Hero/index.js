import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import styles from "./style.module.scss";
import Particle from "../../components/Particle";

const Hero = () => {
  return (
    <div className={styles.Container}>
      <Particle />
      <div className={styles.HeroItem}>
        <div>
          <h1>Hello My name is Ugtakhbayar</h1>
          <h1>
            I am the{" "}
            <span style={{ color: "#007FFF" }}>
              <Typewriter
                words={["React Developer", "UI Designer", "Software Engineer"]}
                loop={false}
              />
            </span>
          </h1>
          <div className={styles.Icons}>
            <SocialIcon network="twitter" />
            <SocialIcon network="google" />
            <SocialIcon network="instagram" />
            <SocialIcon network="youtube" />
            <SocialIcon network="facebook" />
          </div>
        </div>
      </div>
      <div className={styles.HeroItem}>
        <div className={styles.ImgContainer}>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
