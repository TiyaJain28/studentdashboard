import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LearnOS — Student Dashboard',
  description: 'Your personal learning command center',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0A0A0F] text-white antialiased">{children}</body>
    </html>
  );
}