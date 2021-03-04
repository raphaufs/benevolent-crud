import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from '../../lib/prisma';
import styles from '../styles/Home.module.css';
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return {
    props: { feed },
  };
};

interface Props {
  feed: PostProps[];
};

//const Blog: React.FC<Props> = (props) => {
const Blog = (props: Props) => {
  return (
      <Layout>
        <div>
          <Head>
            <title>Benevolent | CRUD</title>
          </Head>
        </div>
        <div>
          <h1>Mural</h1>
          <main>
            {props.feed.map((post) => (
              <div key={post.id} className={styles.post}>
                <Post post={post} />
              </div>
            ))}
          </main>
        </div>
        
      </Layout>    
  );
};

export default Blog;
