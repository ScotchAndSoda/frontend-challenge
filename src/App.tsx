import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MainPage } from './pages/MainPage/MainPage';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
