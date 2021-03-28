import { Global, css } from "@emotion/react";

function Application({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            font-family: "Kiwi Maru", serif;
            font-weight: 400;
          }

          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }

          main {
            padding: 5rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
          }

          section {
            margin-bottom: 2rem;
          }

          h1 {
            margin-bottom: 1rem;
            line-height: 1rem
            font-weight: 300;
          }

          h2 {
            margin-bottom: 1rem;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
