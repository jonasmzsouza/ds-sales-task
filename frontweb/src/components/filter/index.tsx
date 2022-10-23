import { useEffect, useState } from 'react';
import Select from 'react-select';
import { requestBackend } from '../../utils/requests';
import { Store } from '../../types/store';
import './styles.css';

const Filter = () => {
  const [selectStores, setSelectStores] = useState<Store[]>([]);

  useEffect(() => {
    requestBackend({ url: '/stores' }).then((response) => {
      console.log(response.data);
      setSelectStores(response.data);
    });
  }, []);

  return (
    <div className="filter-container base-card">
      <form className="filter-form">
        <Select
          options={selectStores}
          isClearable
          placeholder="Loja"
          classNamePrefix="filter-select"
          getOptionLabel={(store: Store) => store.name}
          getOptionValue={(store: Store) => String(store.id)}
        />
      </form>
    </div>
  );
};

export default Filter;
