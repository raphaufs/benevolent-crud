import '../styles/globals.css';
import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import { BenevolentProvider } from '../contexts/BenevolentContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>      
      <BenevolentProvider>
        <Component {...pageProps} />        
      </BenevolentProvider>
    </Provider>
  );
};

export default App;
