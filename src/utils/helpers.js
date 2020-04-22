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

export function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}