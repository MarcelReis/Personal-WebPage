import React from "react";
import Link from "next/link";

import styles from "./.module.scss";

type PropTypes = {
  lang: string;
  initialState: string;
};
const Navbar = ({ lang }: PropTypes) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/[lang]/home" as={`/${lang}/home`}>
            <a>
              <img className={styles.logo} src="/img/logo-64.png" />
            </a>
          </Link>
        </div>

        {/* <div className={styles.navItem}>
          <Link href="/[lang]/blog" as={`/${lang}/blog`}>
            <a>blog</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/[lang]/labs" as={`/${lang}/labs`}>
            <a>labs</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/[lang]/about" as={`/${lang}/about`}>
            <a>about</a>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;