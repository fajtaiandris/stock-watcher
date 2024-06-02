'use server';

import type { z } from 'zod';

import {
  GlobalQuoteResponseSchema,
  OverviewResponseSchema,
  type StockDataSchema,
  StockSearchResultSchema,
} from './types';

const { ALPHAVANTAGE_API_KEY, ALPHAVANTAGE_BASE_URL } = process.env;

const EXPIRED_TOKEN_API_RESPONSE =
  'Thank you for using Alpha Vantage! Our standard API rate limit is 25 requests per day. Please subscribe to any of the premium plans at https://www.alphavantage.co/premium/ to instantly remove all daily rate limits.';

const get = async <T>(
  params: Record<string, string>,
  schema: z.ZodSchema<T>,
): Promise<T> => {
  console.log(ALPHAVANTAGE_API_KEY);
  if (!ALPHAVANTAGE_API_KEY) {
    throw new Error('ALPHAVANTAGE_API_KEY is not defined');
  }
  const response = await fetch(
    `${ALPHAVANTAGE_BASE_URL}?${new URLSearchParams({ ...params, apikey: ALPHAVANTAGE_API_KEY })}`,
  );
  const data = await response.json();
  if (data?.Information === EXPIRED_TOKEN_API_RESPONSE) {
    throw new Error('API key has expired');
  }
  const result = schema.safeParse(data);
  if (!result.success) {
    console.debug(data);
    throw new Error('Validation error');
  }
  return result.data;
};

export const getStockData = async (
  symbol: string,
): Promise<z.infer<typeof StockDataSchema>> => {
  const [overview, quote] = await Promise.all([
    get({ function: 'OVERVIEW', symbol }, OverviewResponseSchema),
    get(
      {
        function: 'GLOBAL_QUOTE',
        symbol,
      },
      GlobalQuoteResponseSchema,
    ),
  ]);
  return {
    overview,
    quote,
  };
};

export const getBestMatches = async (
  query: string,
): Promise<z.infer<typeof StockSearchResultSchema>> => {
  return get(
    {
      function: 'SYMBOL_SEARCH',
      keywords: query,
    },
    StockSearchResultSchema,
  );
};
