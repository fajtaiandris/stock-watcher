import { getTranslations } from 'next-intl/server';

import { PriceChart } from '@/components/PriceChart';
import { PerformanceStat } from '@/components/stats/PerformanceStat';
import { PlaceholderStat } from '@/components/stats/PlaceholderStat';

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

const stockData = {
  Symbol: 'MSFT',
  AssetType: 'Common Stock',
  Name: 'Microsoft Corporation',
  Description:
    "Microsoft Corporation is an American multinational technology company which produces computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 21 in the 2020 Fortune 500 rankings of the largest United States corporations by total revenue; it was the world's largest software maker by revenue as of 2016. It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Amazon, and Facebook.",
  CIK: '789019',
  Exchange: 'NASDAQ',
  Currency: 'USD',
  Country: 'USA',
  Sector: 'TECHNOLOGY',
  Industry: 'SERVICES-PREPACKAGED SOFTWARE',
  Address: 'ONE MICROSOFT WAY, REDMOND, WA, US',
  FiscalYearEnd: 'June',
  LatestQuarter: '2024-03-31',
  MarketCapitalization: '3081955967000',
  EBITDA: '125182001000',
  PERatio: '35.96',
  PEGRatio: '2.024',
  BookValue: '34.06',
  DividendPerShare: '2.93',
  DividendYield: '0.0072',
  EPS: '11.53',
  RevenuePerShareTTM: '31.83',
  ProfitMargin: '0.364',
  OperatingMarginTTM: '0.446',
  ReturnOnAssetsTTM: '0.153',
  ReturnOnEquityTTM: '0.385',
  RevenueTTM: '236583993000',
  GrossProfitTTM: '135620000000',
  DilutedEPSTTM: '11.53',
  QuarterlyEarningsGrowthYOY: '0.2',
  QuarterlyRevenueGrowthYOY: '0.17',
  AnalystTargetPrice: '483.33',
  AnalystRatingStrongBuy: '23',
  AnalystRatingBuy: '32',
  AnalystRatingHold: '3',
  AnalystRatingSell: '0',
  AnalystRatingStrongSell: '0',
  TrailingPE: '35.96',
  ForwardPE: '29.94',
  PriceToSalesRatioTTM: '13.03',
  PriceToBookRatio: '12.45',
  EVToRevenue: '13.06',
  EVToEBITDA: '24.59',
  Beta: '0.893',
  '52WeekHigh': '433.6',
  '52WeekLow': '307.7',
  '50DayMovingAverage': '416.65',
  '200DayMovingAverage': '378.5',
  SharesOutstanding: '7432310000',
  DividendDate: '2024-06-13',
  ExDividendDate: '2024-05-15',
};

const stockQuote = {
  'Global Quote': {
    '01. symbol': 'MSFT',
    '02. open': '424.3000',
    '03. high': '424.3000',
    '04. low': '414.2400',
    '05. price': '414.6700',
    '06. volume': '28424847',
    '07. latest trading day': '2024-05-30',
    '08. previous close': '429.1700',
    '09. change': '-14.5000',
    '10. change percent': '-3.3786%',
  },
};

const StockPage = (_: IStockPageProps) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="card-title mb-4 text-4xl font-bold">
          {stockData.Name} ({stockData.Symbol})
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <PriceChart />
          <PerformanceStat
            value={stockQuote['Global Quote']['05. price']}
            valueChange={stockQuote['Global Quote']['09. change']}
            percentChange={stockQuote['Global Quote']['10. change percent']}
            currency={stockData.Currency}
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
