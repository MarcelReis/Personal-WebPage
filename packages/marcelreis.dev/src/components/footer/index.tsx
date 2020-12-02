import React from "react";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import { Waves } from "components/waves";

import styles from "./.module.scss";

const Footer = () => {
  return (
    <>
      <Waves className={styles.waves} />
      <footer className={`${styles.footer}`}>
        <h2 className={styles.title}>Contact Me</h2>
        <div className={styles.socialLinks}>
          <a title="Linkedin" href="https://linkedin.com/in/marcelreis">
            <FaLinkedin />
          </a>
          <a title="Github" href="https://github.com/marcelreis">
            <FaGithub />
          </a>
          <a title="Twitter" href="https://twitter.com/_marcelreis">
            <FaTwitter />
          </a>
        </div>
        <small className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()}, Marcelo Reis
        </small>
      </footer>
    </>
  );
};

export default Footer;