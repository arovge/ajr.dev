import React from 'react';

export default function ExternalAnchorTag({ href, children }) {
    return (
        <a rel='noopener noreferrer' target='_blank' {...{href}}>{children}</a>
    );
}
