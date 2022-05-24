import './App.css';
import Header from './containers/Header';
import Title from './SimpleComponents/Title';
import Articles from './containers/Articles';
import { DevtoProvider } from './contexts/DevtoContext';
import {ThemeProvider} from './contexts/ThemeContext';
import PageContainer from './containers/PageContainer';
function App() {
  return (
    <DevtoProvider>
    <ThemeProvider>
      <PageContainer>
        <Header/>
        <Title/>
        <Articles/>
      </PageContainer>
    </ThemeProvider>  
    </DevtoProvider>
  );
}

export default App;
