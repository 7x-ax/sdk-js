# A JavaScript SDK for 7x APIs

To use this SDK, you will need an API Key. Sign up on https://7x.ax to get started.

## Install

```php
npm i 7x-sdk
```

## Usage

### Timezone API

```javascript
import Timezone from "../src/SDK/Timezone";
import TimezoneDTO from "../DTO/Timezone/Timezone";

let tz = new Timezone(API_KEY);
let data = tz.get(30.0444, 31.2357);
// data is an instance of TimezoneDTO
console.log(data.timezones);
```

### Distance API

#### Distance by Coordinates
```javascript
import Distance from "../src/SDK/Distance";
import DistanceDTO from "../DTO/Distance/Distance";

let d = new Distance(API_KEY);
let data = d.getByCoordinates(22.22, 33.33, 44.44, 55.55, 'km');
// data is an instance of DistanceDTO.
data.distance;
data.unit; // km if you specified km, or mi if you specified mi. Defaults to km if not specified.
```

#### Distance by Address
```javascript
import Distance from "../src/SDK/Distance";
import DistanceDTO from "../DTO/Distance/Distance";

let d = new Distance(API_KEY);
let data = d.getByAddress('London, UK', 'Paris, France', 'km');
// data is an instance of DistanceDTO.
$data.distance;
$data.unit; // km if you specified km, or mi if you specified mi. Defaults to km if not specified.
```

### Geocoding API

#### Geocode by City / Address String
```javascript
import Geocode from "../src/SDK/Geocode";
import GeocodeCollection from "../DTO/Geocode/GeocodeCollection";
import GeocodeDTO from "../DTO/Geocode/Geocode";
import Coordinates from "../DTO/Common/Coordinates";
import Location from "../DTO/Geocode/Location";

let g = new Geocode(API_KEY);
let data = g.get('Trafalgar Square, London, UK');
// data is an instance of GeocodeCollection. This contains an array of objects.
for (let obj of data.objects) {
    var_dump(obj.coordinates); // Instance of Coordinates
    var_dump(obj.location); // Instance of Location}
}
```

#### Geocode Search (to build search suggest / autocomplete functionality)
```javascript
import Geocode from "../src/SDK/Geocode";
import GeocodeCollection from "../DTO/Geocode/GeocodeCollection";
import GeocodeDTO from "../DTO/Geocode/Geocode";
import Coordinates from "../DTO/Common/Coordinates";
import Location from "../DTO/Geocode/Location";

let g = new Geocode(API_KEY);
let data = g.search('Lon');
// data is an instance of GeocodeCollection. This contains an array of objects.
for (let obj of data.objects) {
    var_dump(obj.coordinates); // Instance of Coordinates
    var_dump(obj.location); // Instance of Location
}
```

#### Reverse Geocoding by Coordinates
```javascript
import Geocode from "../src/SDK/Geocode";
import GeocodeCollection from "../DTO/Geocode/GeocodeCollection";
import GeocodeDTO from "../DTO/Geocode/Geocode";
import Coordinates from "../DTO/Common/Coordinates";
import Location from "../DTO/Geocode/Location";

let g = new Geocode(API_KEY);
let data = g.get('Trafalgar Square, London, UK');
// data is an instance of GeocodeCollection. This contains an array of objects.
for (let obj of data.objects) {
    var_dump(obj.coordinates); // Instance of Coordinates
    var_dump(obj.location); // Instance of Location
}
```
