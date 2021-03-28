import * as S from './style/global';
import * as Routes from './routes';
import ThemeProvider from './contexts/theme';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Routes.Pages />
      </ThemeProvider>

      <S.GlobalStyle />
    </>
  );
};

export default App;
