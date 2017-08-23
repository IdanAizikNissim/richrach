const commandLineArgs = require('command-line-args');
const optionDefinitions = [
  { name: 'a', type: Number },
  { name: 'b', type: Number }
];

const numOfDigits = (num) => {
  let length = 0;
  
  while (num > 0) {
    num = parseInt(num / 10);
    length++;
  }
  
  return length;
};

const getLongerNumIndex = (a, b) => {
  const aLength = numOfDigits(a);
  const bLength = numOfDigits(b);
  
  return (aLength > bLength) ? 0 : 1;
};

const zip = (numbers, iterator) => {
  if (numOfDigits(numbers[0]) == 0 && 
      numOfDigits(numbers[1]) == 0) {
    return 0;
  }
  
  const longerIndex = getLongerNumIndex(numbers[0], numbers[1]);
  const digit = parseInt(numbers[longerIndex] % 10);
  numbers[longerIndex] = parseInt(numbers[longerIndex] / 10);
  
  return zip(numbers, iterator + 1) + (digit * (Math.pow(10, iterator)));
};

const run = ({a, b}) => {
  const zipped = zip([a, b], 0);
  console.log(zipped);
};


let args = commandLineArgs(optionDefinitions);

if (args.a && args.b) {
  run(args);
};
