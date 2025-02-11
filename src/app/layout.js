import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/custom.css";
import Head from "next/head";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admire Holidays",
  description: "Admire Holidays",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <NextTopLoader
          color="#FD4A4C"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MHF749Q34E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MHF749Q34E');
          `}
        </Script>
      </body>
    </html>
  );
}
