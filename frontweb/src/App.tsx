import './assets/styles/custom.scss';
import './App.css';
import Navbar from './components/navbar';
import Filter from './components/filter';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Filter />
      </div>
    </>
  );
};

export default App;
