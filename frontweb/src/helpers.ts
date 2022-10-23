import { Gender } from 'types/gender';
import { formatGender } from 'utils/formatters';
import { SalesByGender } from './types/sales-by-gender';

export const buildSalesByGender = (sales: SalesByGender[]) => {
  const labels = sales.map((sale) => formatGender(sale.gender as Gender));
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
