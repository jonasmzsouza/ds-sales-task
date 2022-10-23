import PieChart from 'components/pie-chart';
import './styles.css';

const SalesByStore = () => {
  return (
    <div className="sales-by-store-container base-card">
      <div className="sales-by-store-quantity-container">
        <h2 className="sales-by-store-quantity">R$ 746.484,00</h2>
        <span className="sales-by-store-quantity-label">Total de vendas</span>
      </div>
      <PieChart name="Gênero" labels={['Feminino', 'Masculino', 'Outro']} series={[40, 30, 30]} />
    </div>
  );
};

export default SalesByStore;
