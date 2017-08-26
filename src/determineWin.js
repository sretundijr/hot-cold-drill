
// determine if the user guessed correctly and output hot and cold

const getInputAndRandomFromComponent = (input, random) => {
  return compare(input, random);
}

const compare = (input, random) => {
  const difference = Math.abs(input - random);
  if (input === random) {
    return 'Winner';
  } else if (difference <= 10) {
    return withinTen();
  } else if (difference <= 20) {
    return withinTwenty();
  } else if (difference <= 30) {
    return withinThirty();
  } else {
    return cold();
  }
}

const withinTen = () => {
  return "Super Hot";
};

const withinTwenty = () => {
  return 'Hot'
};

const withinThirty = () => {
  return 'Warm';
};

const cold = () => {
  return 'Cold';
};

module.exports = getInputAndRandomFromComponent;