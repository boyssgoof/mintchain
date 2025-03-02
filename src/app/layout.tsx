import React from "react";
import Head from "next/head";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Mayan Bridge Interface. One click, instant transfers, and the best swap rates."
        />

        <meta
          property="og:image"
          content="https://cdn.mayan.finance/bridge_preview.png"
          key="ogtagimage"
        />
        <meta
          property="twitter:image"
          content="https://cdn.mayan.finance/bridge_preview.png"
          key="twittertagimage"
        />
        <meta property="og:title" content="Mayan | Bridge faster. Get more." />
        <meta
          property="og:description"
          content="One click, instant transfers, and the best swap rates."
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mayan.finance/" />
        <meta name="twitter:title" content="Mayan | Bridge faster. Get more." />
        <meta
          name="twitter:description"
          content="One click, instant transfers, and the best swap rates."
        />
        <meta
          name="twitter:image"
          content="https://cdn.mayan.finance/bridge_preview.png"
        />

        <meta name="darkreader" content="NO-DARKREADER-PLUGIN" />
        <link rel="apple-touch-icon" href="/mayan_logo_57.png" />

        <title>Mayan Bridge</title>
      </Head>

      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div>{children}</div>

        {/* Scripts moved to next/script for better performance */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          defer
        ></script>

        <script
          type="module"
          crossOrigin="anonymous"
          src="/assets/index-WytQ7qXR.js"
          defer
        ></script>

        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"
          integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ=="
          data-cf-beacon='{"rayId":"9182da72793b4597","version":"2025.1.0","r":1,"serverTiming":{"name":{"cfExtPri":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}},"token":"c03d73d886ea46889d6a7e86d4969deb","b":1}'
          crossOrigin="anonymous"
        ></script>

        <script
          src="/scripts/ff11fa7a-1ea7-4020-9e47-e35780491aee.js"
          defer
        ></script>
      </body>
    </html>
  );
}

export default RootLayout;
