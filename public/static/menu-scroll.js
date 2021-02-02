/*!
 * Run a callback after the user scrolls, calculating the distance and direction scrolled
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The callback function to run
 * @param  {Integer}  refresh  How long to wait between scroll events [optional]
 */
var scrollDistance = function (callback, refresh) {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return;

  // Variables
  var isScrolling, start, end, distance;

  // Listen for scroll events
  window.addEventListener(
    'scroll',
    function (event) {
      //console.log('window.pageYOffset', window.pageYOffset);
      // Set starting position
      if (!start) {
        start = window.pageYOffset;
      }
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);
      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function () {
        // Calculate distance
        end = window.pageYOffset;
        distance = end - start;
        console.log('distance:' + distance);
        // Run the callback
        callback(distance, start, end);
        // Reset calculations
        start = null;
        end = null;
        distance = null;
      }, refresh || 66);
    },
    false,
  );
};

var globalHeader = document.querySelector('.header');
scrollDistance(function (distance) {
  if (distance > 0) {
    globalHeader.classList.remove('show-header');
    globalHeader.classList.add('hide-header');
    return;
  }

  globalHeader.classList.remove('hide-header');
  globalHeader.classList.add('show-header');
}, 75);
