import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defualtTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import Header from '../Header';
import ContactsList from '../ContactsList';

function App() {
  return (
    <ThemeProvider theme={defualtTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
