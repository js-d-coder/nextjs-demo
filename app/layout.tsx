import '@/app/ui/global.css';
import { defaultFont } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Acme Dashboard | Jibran Shaikh',
  description: 'Demo app showcasing the application of Next.js, React.js, PostgreSQL.',
  metadataBase: new URL('https://nextjs-demo-jade-omega.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${defaultFont.className} antialiased`}>{children}</body>
    </html>
  );
}
