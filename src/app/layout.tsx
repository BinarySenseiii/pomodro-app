import { Metadata } from 'next';

import './globals.css';

import { fontVariables } from '@/components/ui/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Pomodoro Timer',
  description: `Stay focused and boost your productivity with our Pomodoro app. Experience the power of time management as you work in intervals, giving your mind the breaks it needs to recharge. Perfect for students, professionals, and anyone looking to maximize their efficiency!`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-dvh lavender">
      <body className={cn(fontVariables, 'antialiased min-h-dvh bg-deep-navy font-roboto-slab text-pure-white')}>
        {children}
      </body>
    </html>
  );
}
