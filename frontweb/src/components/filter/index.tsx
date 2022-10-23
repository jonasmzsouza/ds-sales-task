import { useEffect, useState } from 'react';
import Select from 'react-select';
import { requestBackend } from '../../utils/requests';
import { Store } from '../../types/store';
import { Controller, useForm } from 'react-hook-form';

import './styles.css';

export type FilterData = {
  store: Store | null;
};

type Props = {
  onSubmitFilter: (filterData: FilterData) => void;
};

const Filter = ({ onSubmitFilter }: Props) => {
  const { handleSubmit, setValue, getValues, control } = useForm<FilterData>();
  const [selectStores, setSelectStores] = useState<Store[]>([]);

  useEffect(() => {
    requestBackend({ url: '/stores' }).then((response) => {
      setSelectStores(response.data);
    });
  }, []);

  const onSubmit = (formData: FilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeStore = (value: Store) => {
    setValue('store', value);
    const obj: FilterData = {
      store: getValues('store')
    };
    onSubmitFilter(obj);
  };

  return (
    <div className="filter-container base-card">
      <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
        <Controller
          name="store"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={selectStores}
              isClearable
              placeholder="Loja"
              classNamePrefix="filter-select"
              onChange={(value) => handleChangeStore(value as Store)}
              getOptionLabel={(store: Store) => store.name}
              getOptionValue={(store: Store) => String(store.id)}
            />
          )}
        />
      </form>
    </div>
  );
};

export default Filter;
