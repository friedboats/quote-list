/** @jsx jsx */ /** @jsxRuntime classic */
import React from "react";
import Head from "next/head";
import CustomButton from "@components/CustomButton";
import Header from "@components/Header";
import Quote from "@components/Quote";
import { css, jsx } from "@emotion/react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { StylesProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#00e676" },
    secondary: green,
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Quote List</title>
          <link rel='icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;400;500&display=swap'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
        </Head>

        <main>
          <section>
            <Header
              cssProps={css`
                text-align: center;
              `}
              title='Welcome.'
            />
            <CustomButton
              color='primary'
              variant='contained'
              label='Add a quote'
            />
          </section>

          <section
            css={css`
              margin-top: 80px;
            `}>
            <Header
              cssProps={css`
                text-align: center;
              `}
              size='small'
              title='Quote of the Day'
            />

            <Quote
              cssProps={css`
                position: relative;
                padding: 0 20px 20px;
                font-style: italic;
                max-width: 350px;
              `}
              copy='And you get a bone job!'
            />
          </section>
        </main>
      </>
    </ThemeProvider>
  );
}
