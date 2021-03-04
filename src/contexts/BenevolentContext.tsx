//allow the communication among components
import { createContext, useState, ReactNode, useEffect } from 'react';
import { IntroModal } from '../components/IntroModal';


interface BenevolentDataContext {
    closeIntroModal: () => void;
    openIntroModal: () => void;
}

interface BenevolentProviderProps {
    children: ReactNode;
}

export const BenevolentContext = createContext({} as BenevolentDataContext);

//children comes from _app.tsx
//it´s created a typescript (interface) to define the type of the children 
export function BenevolentProvider({
    children,
    ...rest // ...rest contains the level, currentExperience, challengesCompleted, experienceToNextLevel
}: BenevolentProviderProps) {
    const [isIntroModalOpen, setIsIntroModalOpen] = useState(false);

    function closeIntroModal() {
        setIsIntroModalOpen(false);
    }
    
    function openIntroModal() {
        setIsIntroModalOpen(true);
    }

    return (
        //starts the context to allow the communication among components
        <BenevolentContext.Provider
            value={{
                closeIntroModal,
                openIntroModal,
            }}
        >
            {children}

            { isIntroModalOpen && <IntroModal />}
        </BenevolentContext.Provider>
    );
}