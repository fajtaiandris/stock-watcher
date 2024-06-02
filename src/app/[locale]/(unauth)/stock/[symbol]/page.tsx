import { getTranslations } from 'next-intl/server';

import { PriceChart } from '@/components/PriceChart';
import { GenericStat } from '@/components/stats/GenericStat';
import { PerformanceStat } from '@/components/stats/PerformanceStat';
import { getStockData } from '@/libs/alphavantage/get';

type IStockPageProps = {
  params: { symbol: string; locale: string };
};

export async function generateMetadata(props: IStockPageProps) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'StockPage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const StockPage = async ({ params: { symbol } }: IStockPageProps) => {
  const data = await getStockData(symbol);
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="card-title mb-4 text-4xl font-bold">
          {data.overview.Name} ({data.overview.Symbol})
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-2 row-span-2 min-h-[200px]">
            <PriceChart data={data.chartData} />
          </div>
          <PerformanceStat
            value={data.quote['Global Quote']['05. price']}
            valueChange={data.quote['Global Quote']['09. change']}
            percentChange={data.quote['Global Quote']['10. change percent']}
            currency={data.overview.Currency}
          />
          <GenericStat
            title="Open"
            value={data.quote['Global Quote']['02. open']}
            currency={data.overview.Currency}
          />
          <GenericStat
            title="High"
            value={data.quote['Global Quote']['03. high']}
            currency={data.overview.Currency}
          />
          <GenericStat
            title="Low"
            value={data.quote['Global Quote']['04. low']}
            currency={data.overview.Currency}
          />
          <GenericStat
            title="Previous Close"
            value={data.quote['Global Quote']['08. previous close']}
            currency={data.overview.Currency}
          />
          <GenericStat
            title="Dividend Yield"
            value={data.overview.DividendYield}
          />
          <GenericStat
            title="EPS"
            value={data.overview.EPS}
            currency={data.overview.Currency}
          />
          <GenericStat title="PE Ratio" value={data.overview.PERatio} />
        </div>
      </div>
    </div>
  );
};

export default StockPage;
