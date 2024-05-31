const { ALPHAVANTAGE_API_KEY, ALPHAVANTAGE_BASE_URL } = process.env;

type OverviewResponse = {
  Symbol: string;
  AssetType: string;
  Name: string;
  Description: string;
  CIK: string;
  Exchange: string;
  Currency: string;
  Country: string;
  Sector: string;
  Industry: string;
  Address: string;
  FiscalYearEnd: string;
  LatestQuarter: string;
  MarketCapitalization: string;
  EBITDA: string;
  PERatio: string;
  PEGRatio: string;
  BookValue: string;
  DividendPerShare: string;
  DividendYield: string;
  EPS: string;
  RevenuePerShareTTM: string;
  ProfitMargin: string;
  OperatingMarginTTM: string;
  ReturnOnAssetsTTM: string;
  ReturnOnEquityTTM: string;
  RevenueTTM: string;
  GrossProfitTTM: string;
  DilutedEPSTTM: string;
  QuarterlyEarningsGrowthYOY: string;
  QuarterlyRevenueGrowthYOY: string;
  AnalystTargetPrice: string;
  AnalystRatingStrongBuy: string;
  AnalystRatingBuy: string;
  AnalystRatingHold: string;
  AnalystRatingSell: string;
  AnalystRatingStrongSell: string;
  TrailingPE: string;
  ForwardPE: string;
  PriceToSalesRatioTTM: string;
  PriceToBookRatio: string;
  EVToRevenue: string;
  EVToEBITDA: string;
  Beta: string;
  '52WeekHigh': string;
  '52WeekLow': string;
  '50DayMovingAverage': string;
  '200DayMovingAverage': string;
  SharesOutstanding: string;
  DividendDate: string;
  ExDividendDate: string;
};

type GlobalQuoteResponse = {
  'Global Quote': {
    '01. symbol': string;
    '02. open': string;
    '03. high': string;
    '04. low': string;
    '05. price': string;
    '06. volume': string;
    '07. latest trading day': string;
    '08. previous close': string;
    '09. change': string;
    '10. change percent': string;
  };
};

type StockData = {
  overview: OverviewResponse;
  quote: GlobalQuoteResponse;
};

export const getStockData = async (symbol: string): Promise<StockData> => {
  if (!symbol) {
    throw new Error('Symbol parameter is required');
  }

  try {
    const [overviewResponse, globalQuoteResponse] = await Promise.all([
      fetch(
        `${ALPHAVANTAGE_BASE_URL}?function=OVERVIEW&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`,
      ),
      fetch(
        `${ALPHAVANTAGE_BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`,
      ),
    ]);

    const overviewData = await overviewResponse.json();
    const globalQuoteData = await globalQuoteResponse.json();

    return {
      overview: overviewData,
      quote: globalQuoteData,
    };
  } catch (error) {
    console.error('Error fetching data from Alpha Vantage:', error);
    throw new Error('Failed to fetch data from Alpha Vantage');
  }
};
