import React, { ReactNode } from "react";
import Header from "./Header";
import styles from '../styles/components/Layout.module.css';
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
};

//const Layout: React.FC<Props> = (props) => (
function Layout(props: Props) {
  return (
    <div>
      <Header />
      <div className={styles.layout}>{props.children}</div>    
      <Footer />
    </div>
  );
}

export default Layout;
