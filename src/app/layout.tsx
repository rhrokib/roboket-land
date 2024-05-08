import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Roboket',
  description:
    'Roboket, is an automated tool to help sales, marketing, customer service, and operation team to boost ROI and optimize business strategy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans}`}>{children}</body>
    </html>
  );
}
