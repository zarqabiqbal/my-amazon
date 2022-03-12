import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>My Amazon</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>amazon</Typography>
        </Toolbar>
      </AppBar>
      <Container>
          {children}
      </Container>
      <footer>
          <Typography>
              All right reserved. Next Js App Developed by Zarqab
          </Typography>
      </footer>
    </div>
  );
}
