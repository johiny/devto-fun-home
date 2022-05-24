import './App.css';
import Header from './containers/Header';
import Title from './SimpleComponents/Title';
import Articles from './containers/Articles';
import { DevtoProvider } from './contexts/DevtoContext';
import PageContainer from './containers/PageContainer';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import HeaderContainer from './containers/HeaderContainer';
import ThemeChanger from './SimpleComponents/ThemeChanger';
function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <DevtoProvider>
      <PageContainer theme={theme}>
        <HeaderContainer>
          <Header theme={theme}/>
          <ThemeChanger theme={theme}/>
        </HeaderContainer>
        <Title theme={theme}/>
        <Articles theme={theme}/>
      </PageContainer>
    </DevtoProvider>
  );
}

export default App;
