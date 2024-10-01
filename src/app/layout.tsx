import { Metadata } from 'next';

import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pomodoro Timer',
  description: `Stay focused and boost your productivity with our Pomodoro app. Experience the power of time management as you work in intervals, giving your mind the breaks it needs to recharge. Perfect for students, professionals, and anyone looking to maximize their efficiency!`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
