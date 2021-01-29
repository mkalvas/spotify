import Document, { Html, Head, Main, NextScript } from 'next/document';

const themeScript = `(function () {
  try {
    var query = window.matchMedia('(prefers-color-scheme: dark)');
    var preference = window.localStorage.getItem('spotify-controls-theme');
    if (!preference) window.localStorage.setItem('spotify-controls-theme', 'system');

    if (
      preference === 'dark' ||
      (preference === 'system' && query.matches) ||
      (!preference && query.matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  } catch (e) {}
})();`;

const styles = (
  <style jsx global>{`
    :root,
    :root.light {
      --background: white;
      --foreground: rgb(55, 53, 47);
    }

    :root.dark {
      --foreground: rgba(255, 255, 255, 0.9);
      --background: rgb(47, 52, 55);
    }

    html,
    body,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      background-color: var(--background);
      color: var(--foreground);
    }

    * {
      box-sizing: border-box;
    }
  `}</style>
);

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {styles}
        <Head>
          <link rel="icon" href="https://www.scdn.co/i/_global/favicon.png" />
          <meta name="theme-color" content="#2f3437"></meta>
          <meta name="description" content="Spotify Controls" />
          <meta name="color-scheme" content="dark light" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
