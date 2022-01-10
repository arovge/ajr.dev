import React, { Fragment } from 'react';
import Header from './header';
import Footer from './footer';
import './layout.scss';
import * as styles from './content.module.scss';

export default function Layout({ children }) {
    return (
        <Fragment>
            <Header/>
            <main className={styles.content}>
                {children}
            </main>
            <Footer/>
        </Fragment>
    );
}
