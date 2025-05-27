import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/images/face.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/images/face.png" sizes="64x64" />
        <link rel="icon" type="image/png" href="/images/face.png" sizes="180x180" />
        <link rel="icon" type="image/png" href="/images/face.png" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YZJLY1EXTG"></script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        {/* Google Analytics Inline Config */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YZJLY1EXTG');
        `}} />
      </body>
    </Html>
  );
}
