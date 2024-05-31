import { useTranslations } from 'next-intl';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <div className="h-screen bg-base-200">
      <div className="navbar bg-base-100 px-10 py-5">
        <div className="flex-1">
          <span className="text-xl font-bold">📊 {t('stock_watcher')}</span>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-32 md:w-auto"
          />
        </div>
      </div>
      <div className="container mx-auto p-4">{props.children}</div>
    </div>
  );
}
