// JS Goes here - ES6 supported

import "./css/main.scss";

// Say hello
// console.log("🦊 Hello! Edit me in src/index.js");
// ^^^ cute and helpful ^^^




/**
 * target=_blank all External Links via JS
 * #thankyou author below...
 *
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/external-links-blank
 * License: MIT, see file 'LICENSE'
 */
;(function () {
  documentReady(function () {
      const links = document.links
      for (let i = 0, linksLength = links.length; i < linksLength; i++) {
          if (links[i].hostname !== window.location.hostname) {
              links[i].target = '_blank'
          }
      }
  })

  function documentReady(fn) {
      if (document.readyState !== 'loading') {
          fn()
      } else {
          document.addEventListener('DOMContentLoaded', fn)
      }
  }
})()