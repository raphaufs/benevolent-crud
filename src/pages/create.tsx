import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import styles from '../styles/Create.module.css';

//const Draft: React.FC = () => {
function Draft(){
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch(`http://localhost:3000/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>Novo Rascunho</h1>
          <div className={styles.upperForm}>
            <input
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título"
              type="text"
              value={title}
            />
            <textarea
              cols={50}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Conteúdo"
              rows={8}
              value={content}
            />
          </div>
          <div className={styles.lowerForm}>
            <input 
              className={styles.submit}
              disabled={!content || !title} 
              type="submit" 
              value="Criar" 
            />
            <a 
              className={styles.back}
              href="#" 
              onClick={() => Router.push("/")}
            >
              ou Cancele
            </a>
          </div>
        </form>
      </div>      
    </Layout>
  );
};

export default Draft;
