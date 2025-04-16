# A JavaScript SDK for 7x APIs

## This repo has now moved to https://1x.ax/7x/sdks/js.

To use this SDK, you will need an API Key. Sign up on https://7x.ax to get started.

## Install

```php
npm i 7x-sdk
```

## Usage

### Timezone API

```javascript
const Timezone = require('7x-sdk').Timezone;

let tz = new Timezone(API_KEY);
let data = tz.get(30.0444, 31.2357);
// data is an instance of the Timezone DTO
console.log(data.timezones);
```

### Distance API

#### Distance by Coordinates
```javascript
const Distance = require('7x-sdk').Distance;

let d = new Distance(API_KEY);
let data = d.getByCoordinates(22.22, 33.33, 44.44, 55.55, 'km');
// data is an instance of the Distance DTO.
data.distance;
data.unit; // km if you specified km, or mi if you specified mi. Defaults to km if not specified.
```

#### Distance by Address
```javascript
const Distance = require('7x-sdk').Distance;

let d = new Distance(API_KEY);
let data = d.getByAddress('London, UK', 'Paris, France', 'km');
// data is an instance of the Distance DTO.
$data.distance;
$data.unit; // km if you specified km, or mi if you specified mi. Defaults to km if not specified.
```

### Geocoding API

#### Geocode by City / Address String
```javascript
const Geocode = require('7x-sdk').Geocode;

let g = new Geocode(API_KEY);
let data = g.get('Trafalgar Square, London, UK');
// data is an instance of GeocodeCollection. This contains an array of objects.
for (let obj of data.objects) {
    obj.coordinates; // Instance of Coordinates
    obj.location; // Instance of Location}
}
```

#### Geocode Search (to build search suggest / autocomplete functionality)
```javascript
const Geocode = require('7x-sdk').Geocode;

let g = new Geocode(API_KEY);
let data = g.search('Lon');
// data is an instance of the GeocodeCollection DTO. This contains an array of objects.
for (let obj of data.objects) {
    obj.coordinates; // Instance of Coordinates
    obj.location; // Instance of Location
}
```

#### Reverse Geocoding by Coordinates
```javascript
const Geocode = require('7x-sdk').Geocode;

let g = new Geocode(API_KEY);
let data = g.reverse(22.223232, 33.343443);
// data is an instance of the GeocodeCollection DTO. This contains an array of objects.
for (let obj of data.objects) {
    obj.coordinates; // Instance of Coordinates
    obj.location; // Instance of Location
}
```

#### Numbers
```javascript
const Numbers = require('7x-sdk').Numbers;

let g = new Numbers(API_KEY);
let data = g.latinToArabic(22.223232);
// data is an instance of the Arabic DTO. This contains an array of objects.
data.arabic;
data.latin

let data = g.arabicToLatin('١٢٣٤٥٦٧٨٩٠');
// data is an instance of the Arabic DTO. This contains an array of objects.
data.arabic;
data.html

let data = g.arabicToHtml('١٢٣٤٥٦٧٨٩٠');
// data is an instance of the Arabic DTO. This contains an array of objects.
data.arabic;
data.html
```

#### Date and Time
```javascript
const Dt = require('7x-sdk').DateAndTime;

let g = new Dt(API_KEY);
let data = g.byTimezone('Africa/Cairo');
// or 
let data = g.byCoordinates(22.223232, 33.343443);
// or
let data = g.byAddress('Trafalgar Square, London, UK');
// data is an instance of the DateAndTime DTO.
data.time;
data.timezone;
```
