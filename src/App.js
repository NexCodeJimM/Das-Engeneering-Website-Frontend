import './App.scss';
import { Navbar, TopHeader, Footer, Copyright } from './components';


function App() {
  return (
    <div className="App">
      <TopHeader />
      <Navbar />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
