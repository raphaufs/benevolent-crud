import { Button } from "@material-ui/core";
import { useContext } from "react";
import { BenevolentContext } from "../contexts/BenevolentContext";
import styles from '../styles/components/IntroModal.module.css';

export function IntroModal(){
    const { closeIntroModal } = useContext(BenevolentContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>Benevolent</header>
                
                <div>Compartilhe Experiências</div>
                <div>Participe de Discussões</div>

                <div className={styles.buttons}>
                    <button type='button' id='back' onClick={closeIntroModal}>
                        Ir para o site
                    </button>
                    
                    <button type='button' id='signup' onClick={closeIntroModal}>
                        Cadastre-se
                    </button>
                </div>

            </div>
        </div>
    );
}