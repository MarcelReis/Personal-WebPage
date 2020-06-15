import React from "react";

import styles from "./.module.scss";

import Link from "next/link";
import { ChipContainer, Chip } from "components/chip";

export const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  return <div className={styles.container}>{props.children}</div>;
};

type PostCardType = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  img?: {
    src: string;
    alt: string;
  };
};
export const PostCard = (props: PostCardType) => (
  <Link href={"/[lang]/blog/[post]"} as={props.url}>
    <a>
      <article className={`${styles.container} ${styles.postContainer}`}>
        <div className={styles.imgContainer}>
          <img {...props.img} loading="lazy" />
        </div>
        <div className={styles.body}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.description}>{props.description}</p>
        </div>
        <ChipContainer>
          {props.tags.map((tag: string, index: number) => (
            <Chip key={index}>{tag}</Chip>
          ))}
        </ChipContainer>
      </article>
    </a>
  </Link>
);

export const ProjectCard = () => null;

export default Card;