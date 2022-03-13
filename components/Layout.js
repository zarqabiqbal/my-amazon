import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import my_style from '../utils/style';

export default function Layout({children}) {
  const classes = my_style();
  return (
    <div>
      <Head>
        <title>My Amazon</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazon</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
          {children}
      </Container>
      <footer className={classes.footer}>
          <Typography>
              All right reserved. Next Js App Developed by Zarqab
          </Typography>
      </footer>
    </div>
  );
}
