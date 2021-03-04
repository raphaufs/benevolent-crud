import styles from '../styles/components/Footer.module.css';

export function Footer(){
    return (
        <div className={styles.footer}>
            <div>Universidade Federal de Sergipe (UFS)</div>
            <div>Departamento de Sistemas de Informação (DSI)</div>
        </div>
    );
}