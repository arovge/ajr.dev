import React from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <h1>Austin Rovge</h1>
                <nav className={styles.links}>
                    <Link to='/'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/photography'>Photography</Link>
                </nav>
            </div>
        </header>
    );
}
