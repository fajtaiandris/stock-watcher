import { z } from 'zod';

export const overviewResponseSchema = z.object({
  Symbol: z.string(),
  AssetType: z.string(),
  Name: z.string(),
  Description: z.string(),
  CIK: z.string(),
  Exchange: z.string(),
  Currency: z.string(),
  Country: z.string(),
  Sector: z.string(),
  Industry: z.string(),
  Address: z.string(),
  FiscalYearEnd: z.string(),
  LatestQuarter: z.string(),
  MarketCapitalization: z.string(),
  EBITDA: z.string(),
  PERatio: z.string(),
  PEGRatio: z.string(),
  BookValue: z.string(),
  DividendPerShare: z.string(),
  DividendYield: z.string(),
  EPS: z.string(),
  RevenuePerShareTTM: z.string(),
  ProfitMargin: z.string(),
  OperatingMarginTTM: z.string(),
  ReturnOnAssetsTTM: z.string(),
  ReturnOnEquityTTM: z.string(),
  RevenueTTM: z.string(),
  GrossProfitTTM: z.string(),
  DilutedEPSTTM: z.string(),
  QuarterlyEarningsGrowthYOY: z.string(),
  QuarterlyRevenueGrowthYOY: z.string(),
  AnalystTargetPrice: z.string(),
  AnalystRatingStrongBuy: z.string(),
  AnalystRatingBuy: z.string(),
  AnalystRatingHold: z.string(),
  AnalystRatingSell: z.string(),
  AnalystRatingStrongSell: z.string(),
  TrailingPE: z.string(),
  ForwardPE: z.string(),
  PriceToSalesRatioTTM: z.string(),
  PriceToBookRatio: z.string(),
  EVToRevenue: z.string(),
  EVToEBITDA: z.string(),
  Beta: z.string(),
  '52WeekHigh': z.string(),
  '52WeekLow': z.string(),
  '50DayMovingAverage': z.string(),
  '200DayMovingAverage': z.string(),
  SharesOutstanding: z.string(),
  DividendDate: z.string(),
  ExDividendDate: z.string(),
});

export const globalQuoteResponseSchema = z.object({
  'Global Quote': z.object({
    '01. symbol': z.string(),
    '02. open': z.string(),
    '03. high': z.string(),
    '04. low': z.string(),
    '05. price': z.string(),
    '06. volume': z.string(),
    '07. latest trading day': z.string(),
    '08. previous close': z.string(),
    '09. change': z.string(),
    '10. change percent': z.string(),
  }),
});

export const stockMatchSchema = z.object({
  '1. symbol': z.string(),
  '2. name': z.string(),
  '3. type': z.string(),
  '4. region': z.string(),
  '5. marketOpen': z.string(),
  '6. marketClose': z.string(),
  '7. timezone': z.string(),
  '8. currency': z.string(),
  '9. matchScore': z.string(),
});

export const stockSearchResultSchema = z.object({
  bestMatches: z.array(stockMatchSchema),
});

const metaDataSchema = z.object({
  '1. Information': z.string(),
  '2. Symbol': z.string(),
  '3. Last Refreshed': z.string(),
  '4. Output Size': z.string(),
  '5. Time Zone': z.string(),
});

export const dailyDataSchema = z.object({
  '1. open': z.string(),
  '2. high': z.string(),
  '3. low': z.string(),
  '4. close': z.string(),
  '5. volume': z.string(),
});

const timeSeriesSchema = z.record(z.string(), dailyDataSchema);

export const timeSeriesDailyResponseSchema = z.object({
  'Meta Data': metaDataSchema,
  'Time Series (Daily)': timeSeriesSchema,
});

export const stockPageDataSchema = z.object({
  overview: overviewResponseSchema,
  quote: globalQuoteResponseSchema,
  chartData: timeSeriesDailyResponseSchema,
});
