import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import Title from './SimpleComponents/Title';
import Articles from './containers/Articles';
import Card from './SimpleComponents/Card';
import { DevtoProvider } from './contexts/DevtoContext';
function App() {
  return (
    <DevtoProvider>
    <div style={{display: "flex", justifyContent : "center", alignItems: "center", flexDirection: "column"}}>
      <Header/>
      <Title/>
      <Articles/>
    </div>
    </DevtoProvider>
  );
}

export default App;
