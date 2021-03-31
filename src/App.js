import * as S from './style/global';
import * as Routes from './routes';

import Symbols from './components/Symbols';
import ThemeProvider from './contexts/theme';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Routes.Pages />
      </ThemeProvider>
      <Symbols />
      <S.GlobalStyle />
    </>
  );
};

export default App;
