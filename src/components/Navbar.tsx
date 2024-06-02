import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Navbar: React.FC = () => {
  const t = useTranslations('RootLayout');
  return (
    <div className="navbar flex justify-center bg-base-100">
      <Link href="/" className="text-xl font-bold">
        📊 {t('stock_watcher')}
      </Link>
    </div>
  );
};
