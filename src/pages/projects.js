import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Project from '../components/project';
import Layout from '../components/layout';
import SEO from '../components/seo';
import * as styles from './projects.module.scss';

export default function Projects() {
    const { github: { viewer: { pinnedItems }}, allMarkdownRemark: { edges }} = useStaticQuery(projectsQuery);
    const projects = useMemo(() => selectProjectsFromRepositories(pinnedItems), [pinnedItems]);

    return (
        <Layout>
            <SEO title='Projects' />
            <h1>Here's some stuff I've worked on.</h1>
            <div>
                <p>This isn't all of my projects that I've worked on, just some that I like!</p>
            </div>
            <div className={styles.projects}>
                {projects.map(({ name, description, url, language, color, tags }) => (
                    <Project
                        key={name}
                        href={url}
                        {...{name, description, language, color, tags}}
                    />
                ))}
                {edges.map(({ node: { rawMarkdownBody, frontmatter: { link, title, language }}}, i) => (
                    <Project
                        key={i}
                        href={link}
                        name={title}
                        description={rawMarkdownBody}
                        {...{language}}
                    />
                ))}
            </div>
        </Layout>
    );
}

const projectsQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                rawMarkdownBody
                frontmatter {
                    title
                    link
                }
                }
            }
        }
        
        github {
            viewer {
                pinnedItems(first: 6) {
                    edges {
                        node {
                            ... on GitHub_Repository {
                                name
                                url
                                description
                                primaryLanguage {
                                    name
                                    color
                                }
                                repositoryTopics(first: 10) {
                                    edges {
                                        node {
                                            topic {
                                                name
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const selectProjectsFromRepositories = (items) => items.edges.reduce((acc, current) => [
    ...acc,
    {
        name: current.node.name,
        description: current.node.description,
        url: current.node.url,
        language: current.node.primaryLanguage.name,
        color: current.node.primaryLanguage.color,
        tags: current.node.repositoryTopics.edges.map(edge => edge.node.topic.name)
    }
], []);
