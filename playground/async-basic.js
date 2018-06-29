console.log('starting app...');

setTimeout(() => {
  'use strict';
  console.log('inside the callback');
} , 4000);

setTimeout(() => {
  "use strict";
  console.log('No delay at all');
} , 0);

console.log('finishing app');