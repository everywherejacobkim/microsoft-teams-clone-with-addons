import Header from './components/header';
import './App.css';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Header username='Jacob Kim' />
      <Sidebar />
    </div>
  );
}

export default App;
