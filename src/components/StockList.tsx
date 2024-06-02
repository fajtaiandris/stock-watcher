import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { z } from 'zod';

import type { StockMatchSchema } from '@/libs/alphavantage/types';

import { InfoAlert } from './InfoAlert';

export const StockList: React.FC<{
  stocks: z.infer<typeof StockMatchSchema>[];
}> = ({ stocks }) => {
  const t = useTranslations('Search');
  if (!stocks.length) {
    return <InfoAlert message={t('no_results')} />;
  }
  return stocks.map((stock) => (
    <Link key={stock['1. symbol']} href={`/stock/${stock['1. symbol']}`}>
      <div className="stats w-full shadow">
        <div className="stat">
          <div className="stat-title">{stock['1. symbol']}</div>
          <div className="stat-value">{stock['2. name']}</div>
          <div className="mt-2 flex gap-x-1">
            <div className="badge badge-primary badge-outline">
              {stock['8. currency']}
            </div>
            <div className="badge badge-secondary badge-outline">
              {stock['3. type']}
            </div>
          </div>
        </div>
      </div>
    </Link>
  ));
};
