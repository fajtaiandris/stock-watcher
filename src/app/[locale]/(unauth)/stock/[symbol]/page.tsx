import { getTranslations } from 'next-intl/server';

import { PriceChart } from '@/components/PriceChart';
import { PerformanceStat } from '@/components/stats/PerformanceStat';
import { PlaceholderStat } from '@/components/stats/PlaceholderStat';
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
          {Array.from(Array(7).keys()).map((__, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <PlaceholderStat key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockPage;
