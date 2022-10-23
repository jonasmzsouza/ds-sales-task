import './assets/styles/custom.scss';
import './App.css';
import Navbar from './components/navbar';
import Filter from './components/filter';
import SalesByStore from 'components/sales-by-store';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Filter />
        <SalesByStore />
      </div>
    </>
  );
};

export default App;
