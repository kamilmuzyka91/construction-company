## Construction-company website

Chceck demo page: [demo](https://tomaszkaleta.netlify.app/)

- This site is write in mobile first conception.
- Written in scss and pure javascript only.

## This App uses:

- [Gulp](https://gulpjs.com/)
- [Pure JavaScript](https://www.javascript.com/)
- [SASS](https://www.npmjs.com/package/sass)
- [Browserslist](https://www.npmjs.com/package/browserslist) - optimization for all browsers

# Speed up the website

## Before

There are 25 photos on the website weighing 4.3 MB.
This slowed down the gallery loading time to 7.21s.
As a result, it is 71 points in Page Speed ​​Insights.

## After

After optimization, the page loads in 2.5s in the mobile version (94 point Page Speed ​​Insights) and 0.7s in the desktop version (99 point Page Speed ​​Insights). Now 25 photos weigh 2MB. I chose to use the webp format and 93% of web browsers now support it.

- [Can I use](https://caniuse.com/?search=webp)

This is a 65% gain in the loading time of the mobile version to the initial state. I plan to improve this result.

- [Images are optimized in tinypng.com](https://tinypng.com/)
- [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Markup Validation](https://validator.w3.org/)

# How to use ?

- first clone repo to Your machine git clone
- run npm i
- start dev server npm start
