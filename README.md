# polyline-midpoint

A NodeJS package that takes an encoded polyline and returns the midpoint in geoJSON format.

## Usage

Install with npm:

  npm install polyline-midpoint --save

Example:

  var midpoint = require('polyline-midpoint');

  var encodedPolyline = 'yhg~FzrmvOkuAo~GkEg{Aer@mlB';

  var polylineMidpoint = midpoint(encodedPolyline);

  console.log(polylineMidpoint);

## License

MIT