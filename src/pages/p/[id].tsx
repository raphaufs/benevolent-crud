import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Router from "next/router";
import { PostProps } from "../../components/Post";
import prisma from '../../../lib/prisma';
import { useSession } from "next-auth/client";
import styles from '../../styles/Draft.module.css';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: post,
  };
};

async function publishPost(id: number): Promise<void> {
  await fetch(`http://localhost:3000/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/")
}

async function deletePost(id: number): Promise<void> {
  await fetch(`http://localhost:3000/api/post/${id}`, {
    method: "DELETE",
  });
  await Router.push("/")
}

//const Post: React.FC<PostProps> = (props) => {
function Post(props: PostProps) {
  const [session, loading] = useSession();
  if (loading) {
    return <div>Autenticando ...</div>;
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Rascunho)`;
  }

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>Escrito por {props?.author?.name || "Unknown author"}</p>
        <ReactMarkdown source={props.content} />
        {!props.published && userHasValidSession && postBelongsToUser && (
          <button 
            className={styles.submit}  
            onClick={() => publishPost(props.id)}            
          >
            Publicar
          </button>
        )}
        {userHasValidSession && postBelongsToUser && (
          <button 
            className={styles.submit}  
            onClick={() => deletePost(props.id)}
          >
            Apagar
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Post;
