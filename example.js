/*polyline midpoint example*/

var midpoint = require('./index.js');

var encodedPolyline = 'yhg~FzrmvOkuAo~GkEg{Aer@mlB';

var polylineMidpoint = midpoint(encodedPolyline);

console.log(polylineMidpoint);