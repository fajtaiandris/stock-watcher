'use client';

import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import type { z } from 'zod';

import { getBestMatches } from '@/libs/alphavantage/get';
import { mockStockSearchResult } from '@/libs/alphavantage/mocks';
import type { stockMatchSchema } from '@/libs/alphavantage/types';

import { InfoAlert } from './InfoAlert';
import { StockList } from './StockList';

const StockSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<z.infer<typeof stockMatchSchema>[]>(
    mockStockSearchResult.bestMatches,
  );
  const t = useTranslations('Search');

  useEffect(() => {
    const fetchStocks = async () => {
      const matches = await getBestMatches(query);
      setResults(matches.bestMatches ?? []);
    };

    fetchStocks();
  }, [query]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          placeholder={t('search_placeholder')}
          onChange={handleOnChange}
          className="w-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {query ? (
        <StockList stocks={results} />
      ) : (
        <InfoAlert message={t('type_something')} />
      )}
    </div>
  );
};

export default StockSearch;
