import React from 'react';

function applyAccent(text, highlight, style) {

    let parts = text.split(new RegExp(`\w*(${highlight})\w*`, 'gi'));
    return parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <span style={style}>{part}</span> : part);
}

export default applyAccent;