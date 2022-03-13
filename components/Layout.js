import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import my_style from '../utils/style';
import NextLink from 'next/link';

export default function Layout({ children }) {
  const classes = my_style();
  return (
    <div>
      <Head>
        <title>My Amazon</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>amazon</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>
          All right reserved. Next Js App Developed by Zarqab
        </Typography>
      </footer>
    </div>
  );
}
