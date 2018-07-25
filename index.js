// Code your solution in this file!
function distanceFromHqInBlocks(blocksFromFourtySecond) {
  if (blocksFromFourtySecond > 42) {
  return blocksFromFourtySecond - 42;
  } else if (blocksFromFourtySecond < 42) {
  return 42 - blocksFromFourtySecond;
  }
}

function distanceFromHqInFeet(feetFromFourtySecond) {
  if (feetFromFourtySecond > 42) {
    return (feetFromFourtySecond - 42) * 264;
  } else if (feetFromFourtySecond < 42);
  return (42 - feetFromFourtySecond) * 264;
}

function distanceTravelledInFeet(starting, ending) {
  if (starting > ending) {
  return (starting - ending) * 264;
  } else if (starting < ending);
  return (ending - starting) * 264;
}

function calculatesFarePrice(start, destination) {
  let uptownDistance = (start - destination) * 264;
  let downtownDistance = (destination - start) * 264;
  if ((uptownDistance < 400) && (downtownDistance < 400)) {
  return 0;
  } else if ((uptownDistance > 400) && (uptownDistance < 2000)){
  return (uptownDistance - 400) * 0.02;
  } else if ((downtownDistance > 400) && (downtownDistance < 2000)){
  return (downtownDistance - 400) * 0.02;
  } else if ((uptownDistance > 2000) && (uptownDistance < 2500) || ((downtownDistance > 2000) && (downtownDistance < 2500))) {
  return 25;
  } else if (((uptownDistance) > 2500) || ((downtownDistance) > 2500)){
  return 'cannot travel that far';
  }
}