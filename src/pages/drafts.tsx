import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import { useSession, getSession } from "next-auth/client";
import prisma from '../../lib/prisma';
import styles from '../styles/Home.module.css';


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { drafts },
  };
};

type Props = {
  drafts: PostProps[];
};

//const Drafts: React.FC<Props> = (props) => {
function Drafts(props: Props) {
  const [session] = useSession();

  if (!session) {
    return (
      <Layout>
        <h1>Meus Rascunhos</h1>
        <div>Você precisa estar autenticado(a) para visualizar essa página.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <h1>Meus Rascunhos</h1>
        <main>
          {props.drafts.map((post) => (
            <div
              key={post.id} 
              className={styles.post}
            >
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default Drafts;
