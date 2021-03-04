import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import styles from '../styles/components/Post.module.css';

export interface PostProps {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

//const Post: React.FC<{ post: PostProps }> = ({ post }) => {
function Post({ post }){
  const authorName = post.author ? post.author.name : "Autor Desconhecido";
  return (
    <div 
      onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
      className={styles.container}
    >
      <h2>{post.title}</h2>
      <small>Escrito por {authorName}</small>
      <ReactMarkdown source={post.content} />      
    </div>
  );
};

export default Post;
