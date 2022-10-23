import './assets/styles/custom.scss';
import './App.css';
import Navbar from './components/navbar';
import Filter, { FilterData } from './components/filter';
import SalesSummary from 'components/sales-summary';
import { useEffect, useState } from 'react';
import PieChart from 'components/pie-chart';
import { PieChartConfig } from 'types/pie-chart-config';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'utils/requests';
import { buildSalesByGender } from 'helpers';

type ControlComponentsData = {
  filterData?: FilterData;
};

const App = () => {
  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({
    filterData: { store: null }
  });
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  const handleSubmitFilter = (filterData: FilterData) => {
    setControlComponentsData({ filterData });
  };

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/sales/by-gender',
      params: {
        storeId: controlComponentsData.filterData?.store?.id
      }
    };

    requestBackend(config).then((response) => {
      const newSalesByGender = buildSalesByGender(response.data);
      setSalesByGender(newSalesByGender);
    });
  }, [controlComponentsData]);

  return (
    <>
      <Navbar />
      <div className="app-container">
        <Filter onSubmitFilter={handleSubmitFilter} />
        <div className="sales-overview-container base-card">
          <SalesSummary filterData={controlComponentsData.filterData} />
          <PieChart name={'Gênero'} labels={salesByGender?.labels} series={salesByGender?.series} />
        </div>
      </div>
    </>
  );
};

export default App;
