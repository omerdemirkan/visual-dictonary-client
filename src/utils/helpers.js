import React from 'react';

export function applyAccent(text, highlight, style) {
  let parts = text.split(new RegExp(`\w*(${highlight})\w*`, 'gi'));
  return parts.map((part, idx) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <span key={idx} style={style}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}