import { Kumbh_Sans, Roboto_Slab, Space_Mono } from 'next/font/google';

export const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  variable: '--kumbh-sans',
});

export const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  variable: '--roboto-slab',
});

export const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  variable: '--space-mono',
});

export const fontVariables = `${kumbhSans.variable} ${robotoSlab.variable} ${spaceMono.variable}`;
