import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/client";
import styles from '../styles/components/Header.module.css';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { BenevolentContext } from "../contexts/BenevolentContext";

//const Header: React.FC = () => {
function Header() {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const [session, loading] = useSession();

  const { openIntroModal } = useContext(BenevolentContext);
  
  let title = (
    <div className={styles.title}>
      Benevolent
      <button onClick={openIntroModal}>
        saiba mais
      </button>      
    </div>
  );


  let left = (
    <div>
      <Link href="/">
        <button className={styles.button}>
          <a data-active={isActive("/")} >
            <HomeIcon />            
              Mural            
          </a>
        </button>        
      </Link>      
    </div>
  );

  let right = null;

  let createPost = null;

  if (loading) {
    left = (
      <div>
        <Link href="/">
          <button className={styles.button}>
            <a data-active={isActive("/")} >
              <HomeIcon />            
                Mural            
            </a>
          </button>        
        </Link>      
    </div>
    );

    right = (
      <div>
        <p>Validando sua entrada...</p>        
      </div>
    );
  }

  if (!session) {
    right = (
      <div>
        <Link href="/api/auth/signin">
          <button className={styles.button}>
            <a id='notSelected' >
              <LabelImportantIcon />            
                Entrar            
            </a>
          </button>        
        </Link>      
      </div>
    );
  }

  if ((session) && (isActive("/"))) {
    left = (
      <div className={styles.leftLogged}>
        <Link href="/">
          <button className={styles.button}>
            <a data-active={isActive("/")} >
              <HomeIcon />            
                Mural            
            </a>
          </button>        
        </Link>     
        
        <Link href="/drafts">
          <button className={styles.button}>
              <a id='notSelected'>
                <CreateIcon className={styles.draftIcon} data-active={isActive("/")} />
                Rascunhos
              </a>
          </button>
        </Link>
      </div>
    );
    right = (
      <div>
        <div className={styles.containerProfile}>
          <div>
            <img src={session.user.image} alt="user"/>
          </div>
          <div>
            {session.user.name}
          </div>
          <div>
              <button className={styles.button} onClick={() => signOut()}>
                  <a id='notSelected'>
                  <ExitToAppIcon/>
                    Sair
                  </a>
              </button>
          </div>
        </div>
      </div>
    );      

    createPost = (     
      <div>
        <Link href="create">
          <button className={styles.button}>
            <a id='notSelected' >
              <AddCircleIcon />            
                Criar Post            
            </a>
          </button>        
        </Link>      
      </div>
    );
  }

  if ((session) && (isActive("/create"))) {
    left = (
      <div className={styles.leftLogged}>
        <Link href="/">
          <button className={styles.button}>
            <a id="notSelected" >
              <HomeIcon />            
                Mural            
            </a>
          </button>        
        </Link>     
        
        <Link href="/drafts">
          <button className={styles.button}>
              <a id="notSelected">
                <CreateIcon className={styles.draftIcon} data-active={isActive("/")} />
                Rascunhos
              </a>
          </button>
        </Link>
      </div>
    );
    right = (
      <div>
        <div className={styles.containerProfile}>
          <div>
            <img src={session.user.image} alt="user"/>
          </div>
          <div>
            {session.user.name}
          </div>
          <div>
              <button className={styles.button} onClick={() => signOut()}>
                  <a id='notSelected'>
                  <ExitToAppIcon/>
                    Sair
                  </a>
              </button>
          </div>
        </div>
      </div>
    );      

    createPost = (     
      <div>
        <Link href="create">
          <button className={styles.button}>
            <a data-active={isActive("/create")} >
              <AddCircleIcon />            
                Criar Post            
            </a>
          </button>        
        </Link>      
      </div>
    );
  }

  if ((session) && ( isActive("/drafts") || isActive("/p/[id]") )) {
    left = (
      <div className={styles.leftLogged}>
        <Link href="/">
          <button className={styles.button}>
            <a id="notSelected" >
              <HomeIcon />            
                Mural            
            </a>
          </button>        
        </Link>     
        
        <Link href="/drafts">
          <button className={styles.button}>
              <a data-active={isActive("/drafts") || isActive("/p/[id]")}>
                <CreateIcon className={styles.draftIcon} data-active={isActive("/")} />
                Rascunhos
              </a>
          </button>
        </Link>
      </div>
    );
    right = (
      <div>
        <div className={styles.containerProfile}>
          <div>
            <img src={session.user.image} alt="user"/>
          </div>
          <div>
            {session.user.name}
          </div>
          <div>
              <button className={styles.button} onClick={() => signOut()}>
                  <a id='notSelected'>
                  <ExitToAppIcon/>
                    Sair
                  </a>
              </button>
          </div>
        </div>
      </div>
    );      
  }

  return (
    <div>
      <div className={styles.containerFirstLine}>
        {left}
        {title}
        {right}
      </div>
      <div className={styles.containerSecondLine}>
        {createPost}
      </div>
    </div>
  );
};

export default Header;
