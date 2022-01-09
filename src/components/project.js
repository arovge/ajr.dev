import React from "react";
import ExternalAnchorTag from "./externalAnchorTag";
import "./project.scss";

export default function Project({ href, language, name, description, color }) {
    return (
        <div className="project">
            <ExternalAnchorTag {...{href}}>{name}</ExternalAnchorTag>
            {color &&
                <span className="language">
                    <span className="text">{language}</span>
                    <span className='indicator' style={{ backgroundColor: color }} />
                </span>
            }
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
}
