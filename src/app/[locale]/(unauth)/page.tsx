import { getTranslations } from 'next-intl/server';

import StockSearch from '@/components/StockSearch';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return <StockSearch />;
}
