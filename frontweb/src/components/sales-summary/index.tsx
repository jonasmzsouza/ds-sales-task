import { AxiosRequestConfig } from 'axios';
import { FilterData } from 'components/filter';
import { useEffect, useState } from 'react';
import { SalesSummary } from 'types/sales-summary';
import { formatPrice } from 'utils/formatters';
import { requestBackend } from 'utils/requests';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  sum: 0,
  min: 0,
  max: 0,
  avg: 0,
  count: 0
};

const SalesSummaryComponent = ({ filterData }: Props) => {
  const [summary, setSummary] = useState<SalesSummary>(initialSummary);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/sales/summary',
      params: {
        storeId: filterData?.store?.id
      }
    };

    requestBackend(config).then((response) => {
      setSummary(response.data);
    });
  }, [filterData]);

  return (
    <div className="sales-summary-container">
      <div className="sales-summary-quantity-container">
        <h2 className="sales-summary-quantity">{formatPrice(summary?.sum)}</h2>
        <span className="sales-summary-quantity-label">Total de vendas</span>
      </div>
    </div>
  );
};

export default SalesSummaryComponent;
