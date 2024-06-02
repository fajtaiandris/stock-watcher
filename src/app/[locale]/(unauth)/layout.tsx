import { Navbar } from '@/components/Navbar';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="h-full min-h-screen bg-base-200 pb-10">
      <Navbar />
      <div className="container mx-auto p-4">{props.children}</div>
    </div>
  );
}
