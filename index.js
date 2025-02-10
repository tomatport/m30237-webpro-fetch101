/* eslint-disable no-unused-vars */
/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// 1. Create a function `showMessage` that takes two parameters: an element and a string that is a URL. The function will fetch the URL and put the response text into the text content of the provided element.
async function showMessage(elem, url) {
  const response = await fetch(url);
  const text = await response.text();
  elem.innerHTML = text;
}

// 2. Create a function `showList` that takes two parameters: an element and a string that is a URL. The function will fetch the URL, parse the retrieved data as JSON; the data is guaranteed to be an array of strings. The function will then, like the `filler` function in `dom101`, put the contents of the array as list items into the provided element.
async function showList(elem, url) {
  const rep = await fetch(url);
  const json = await rep.json();

  for (const text of json) {
    const li = document.createElement('li');
    li.innerHTML = text;
    elem.append(li);
  }
}
