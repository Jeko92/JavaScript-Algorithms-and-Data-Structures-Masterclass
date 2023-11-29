const onlyElementsAtEvenIndex = (array) => {
  var newArray = Array(Math.ceil(array.length / 2));
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
};

const artists = [
  "Pink Floyd",
  "Queen",
  "Rolling Stones",
  "Beatles",
  "The Who",
  "The National",
  "AC/DC",
  "Led Zeppelin",
  "Strokes",
  "Libertines",
  "R.E.M",
];

console.log(onlyElementsAtEvenIndex(artists));

/*
Big O of this approach is O(n)
 */
