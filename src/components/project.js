import React from 'react';
import ExternalAnchorTag from './externalAnchorTag';
import * as styles from './project.module.scss';

export default function Project({ href, language, name, description, color, tags }) {
    return (
        <div className={styles.project}>
            <div className={styles.header}>
                <ExternalAnchorTag {...{href}}>{name}</ExternalAnchorTag>
                {color &&
                    <span>
                        <span className={styles.text}>{language}</span>
                        <span className={styles.indicator} style={{ backgroundColor: color }} />
                    </span>
                }
            </div>
            <p>{description}</p>
            {tags && tags.length > 0 &&
                <span className={styles.tags}>
                    {tags.map(tag => <span key={tag}>{tag}</span>)}
                </span>
            }
        </div>
    );
}
