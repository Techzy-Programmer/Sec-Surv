import type { Metadata } from "next";
import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

const clrNameHolder = "defaultColor";

const theme = createTheme({
  primaryShade: { light: 6, dark: 8 },
  primaryColor: clrNameHolder,

  colors: {
    [clrNameHolder]: [
      '#f6eeff',
      '#e7daf7',
      '#cab1ea',
      '#ad86dd',
      '#9562d2',
      '#854bcb',
      '#7d3ec9',
      '#6b31b2',
      '#5f2aa0',
      '#52228d'
    ],
  }
});

export const metadata: Metadata = {
  title: "Home Survillance System",
  description: "A home survillance system built with Next.js and Mantine powered by a Raspberry Pi",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
