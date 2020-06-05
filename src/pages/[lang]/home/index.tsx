import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import Hero from "components/hero";

import { getPaths, langEnum } from "../../../utils/lang";
import { getPage, HomePageType } from "../../../cms/pages";
import { getLatestPosts, PostType } from "src/cms/post";

// import gridStyles from "styles/grid.module.scss";
// import typographyStyles from "styles/typography.module.scss";

// import { PostCard } from "components/card";
import ReactMarkdown from "react-markdown";
import Layout from "components/layout";
import Content from "components/content";

const img = {
  src: "https://placekitten.com/200/200",
  alt: "Kitten",
};

type PropsType = HomePageType & {
  background: string;
  latestPosts: PostType[];
  lang: langEnum;
};
const HomePage = (props: PropsType) => {
  return (
    <Layout padding={"hero"}>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Hero
        title={props.heroSentences[0]}
        sentences={props.heroSentences.slice(1, 4)}
      />
      {/* <h2 className={typographyStyles.heading_2}>Lastest Posts</h2>
      <div className={[gridStyles.container, gridStyles.col_1].join(" ")}>
        {props.latestPosts &&
          props.latestPosts.map((post) => (
            <PostCard
              key={post.url}
              title={post.title}
              description={post.description}
              tags={post.tags}
              img={img}
              url={`/${props.lang}/blog/${post.url}`}
            />
          ))}
      </div> */}
      <Content>
        <ReactMarkdown source={props.markdown} escapeHtml={false} />
      </Content>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  PropsType,
  { lang: langEnum }
> = async (ctx) => {
  const props = {
    background: "tall",
    ...getPage(ctx.params.lang, "/home"),
    latestPosts: getLatestPosts(ctx.params.lang, 3),
    lang: ctx.params.lang,
  };

  return { props };
};

export const getStaticPaths = async () => {
  return { paths: getPaths("/home"), fallback: false };
};

export default HomePage;
