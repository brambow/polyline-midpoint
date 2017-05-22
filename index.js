/*polyline-midpoint
* Takes an encoded polyline and returns midpoint as geoJSON
*/

var polylineUtils = require('@mapbox/polyline');
var along = require('@turf/along');
var lineDistance = require('@turf/line-distance');
var helpers = require('@turf/helpers');


module.exports = function(encodedPolyline){
  var polylineArray = polylineUtils.decode(encodedPolyline);

  for(i=0;i<polylineArray.length;i++){
    polylineArray[i].reverse();
  }
  var lineString = helpers.lineString(polylineArray);
  var distance = lineDistance(lineString) / 2;
  var midpoint = along(lineString, distance);

  return midpoint;
};