import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import * as styles from './photography.module.scss';

export default function Photography() {
    const { photos: { edges }} = useStaticQuery(graphql`
        query {
            photos: allFile(filter: { relativeDirectory: {regex: "/([a-zA-Z])/" }}) {
                edges {
                    node {
                        name
                        relativePath
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <SEO title='Photography' />
            <h1>I like taking pictures.</h1>
            <p>I've been busy working on other projects and features, so there isn't much here. I'll be able to add more content soon, but here are my two dogs in the meantime!</p>
            <div className={styles.photos}>
                {edges.map(({ node }, i) => (
                    <div key={i}>
                        <GatsbyImage image={getImage(node.childImageSharp)} alt={node.name} />
                        <h2>{node.name}</h2>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
