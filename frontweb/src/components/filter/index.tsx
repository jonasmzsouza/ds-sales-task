import Select from 'react-select';
import './styles.css';

const stores = [
  { value: 'loja1', label: 'Loja 1' },
  { value: 'loja2', label: 'Loja 2' },
  { value: 'loja3', label: 'Loja 3' }
];

const Filter = () => {
  return (
    <div className="filter-container base-card">
      <form className="filter-form">
        <Select options={stores} isClearable placeholder="Loja" classNamePrefix="filter-select" />
      </form>
    </div>
  );
};

export default Filter;
