import flatMap from 'lodash.flatmap';

export default function () {
  // use flatMap just to increase bundle size
  flatMap([2], (a) => a * a);

  console.log('chunk', new Date().getMilliseconds());
}
