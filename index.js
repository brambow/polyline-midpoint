/*polyline-midpoint
* Takes an encoded polyline and returns midpoint as geoJSON
*
* @name polyine-midpoint
* @param encoded polyline
* @returns {geojson} point at midpoint
* @example 
* var encodedPolyline = 'yhg~FzrmvOkuAo~GkEg{Aer@mlB';
* var midpoint = midpoint(encodedPolyline)
*/

var polylineUtils = require('@mapbox/polyline');
var along = require('@turf/along');
var lineDistance = require('@turf/line-distance');
var helpers = require('@turf/helpers');

//function to get polyline and midpoint geometry using Turf.js
module.exports = function(encodedPolyline){
  var polylineArray = polylineUtils.decode(encodedPolyline);
  //turf needs coords in lon/lat not lat/lng
  // var turfArray = JSON.parse(JSON.stringify(polylineArray));;
  // if(turfArray.length === polylineArray.length){
  //   for (i=0;i<turfArray.length;i++){
  //     turfArray[i].reverse();
  //   }
  // }

  for(i=0;i<polylineArray.length;i++){
    polylineArray[i].reverse();
  }
  var lineString = helpers.lineString(polylineArray);
  var distance = lineDistance(lineString) / 2;
  var midpoint = along(lineString, distance);

  return midpoint;
};