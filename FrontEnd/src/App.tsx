import { AxiosInterceptor } from "./AxiosInterceptor";
import { AuthProvider } from "./providers/AuthProvider";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AxiosInterceptor>
        <AuthProvider>
          <RoutesMain />
        </AuthProvider>
      </AxiosInterceptor>
    </>
  );
};

export default App;
