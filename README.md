# polyline-midpoint

A NodeJS package that takes an encoded polyline and returns the midpoint in geoJSON format.

## Usage

Install with npm:

  `npm install polyline-midpoint --save`

Example:

  ```javascript
  var midpoint = require('polyline-midpoint');

  var encodedPolyline = 'yhg~FzrmvOkuAo~GkEg{Aer@mlB';

  var polylineMidpoint = midpoint(encodedPolyline);

  console.log(polylineMidpoint);
  ```

Result:

  ```javascript
  { 
  type: 'Feature',
  properties: {},
  geometry: 
    { type: 
    'Point',
    coordinates: [ -87.68980233194598, 41.83358593924626 ] 
    } 
  }

## License

MIT