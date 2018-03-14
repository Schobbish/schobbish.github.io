/* Nathaniel Adam's Favicon Linker
 * jQuery edition
 *
 * For use with http://www.favicon-generator.org/
 * (when generating icons for Web, Android, Microsoft, and iOS Apps)
 *
 * Requires jQuery.
 *
 * Usage: faviconLinker(path);
 * where path is the path to the folders with your favicons
 *
 * Example: if your favicons are in a folder named 'favicons' in a folder
 * named 'images', path should be 'images/favicons/'.
 * Add a slash (/) at the end of your path.
 * If your favicons are in your root directory path should be just ''.
 * I recommend checking that every favicon is used in my script below.
 * I also recommend using the PHP edition (except for local testing)
 * because it doesn't rely on JavaScript.
 */
var faviconLinker = function(path) {
   $('head').append('<link rel="apple-touch-icon" sizes="57x57" href="'
      + path + 'apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="'
      + path + 'apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="'
      + path + 'apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="'
      + path + 'apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="'
      + path + 'apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="'
      + path + 'apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="'
      + path + 'apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="'
      + path + 'apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="'
      + path + 'apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192"  href="'
      + path + 'android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="'
      + path + 'favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="'
      + path + 'favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="'
      + path + 'favicon-16x16.png"><link rel="manifest" href="'
      + path + 'manifest.json"><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="'
      + path + 'ms-icon-144x144.png"><meta name="theme-color" content="#ffffff">')
}
