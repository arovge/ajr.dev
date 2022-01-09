import React from "react";
import ExternalAnchorTag from "./externalAnchorTag";
import * as styles from "./project.module.scss";

export default function Project({ href, language, name, description, color }) {
    return (
        <div className={styles.project}>
            <ExternalAnchorTag {...{href}}>{name}</ExternalAnchorTag>
            {color &&
                <span>
                    <span className={styles.text}>{language}</span>
                    <span className={styles.indicator} style={{ backgroundColor: color }} />
                </span>
            }
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
}
