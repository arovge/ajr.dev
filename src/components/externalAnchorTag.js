import React from 'react';

export default function ExternalAnchorTag({ href, children, className }) {
    return (
        <a rel='noopener noreferrer' target='_blank' {...{href, className}}>{children}</a>
    );
}
