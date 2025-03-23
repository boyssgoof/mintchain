"use client";
import "./globals.css";

import React, { useEffect } from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {}, []);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Mint Blockchain</title>
        <meta name="keywords" content="NFT | Layer2" />
        <meta
          name="description"
          property="og:description"
          content="Mint is the L2 blockchain for NFT Industry."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Mint Blockchain" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta content="website" property="og:type" />
        <meta content="Mint" property="og:site_name" />
        <meta content="Mint" name="apple-mobile-web-app-title" />
        <meta content="Mint" name="application-name" />
        <meta content="#30bf54" name="msapplication-TileColor" />
        <meta content="release" name="202410281624" />
        <meta property="og:image" content="images/airdrop-claim-og-image.png" />
        <meta name="next-head-count" content="14" />

        <link href="/css/03ccc20be64f85af.css" as="style" crossOrigin="" />

        <noscript data-n-css=""></noscript>
      </head>

      <body className="">
        <div id="__next">{children}</div>

        <script
          src="/scripts/fb91303c-3084-4437-9962-57523ebb031d.js"
          defer
        ></script>
      </body>
    </html>
  );
}
export default RootLayout;
