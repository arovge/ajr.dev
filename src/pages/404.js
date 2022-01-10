import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function NotFound() {
    return (
        <Layout>
            <SEO title='Not Found' />
            <h1>404s and heartbreaks.</h1>
            <p>Looks like this page wasn't found.</p>
            <p>You'll find some great content if you go back to <Link to='/'>the about page!</Link></p>
        </Layout>
    );
}
