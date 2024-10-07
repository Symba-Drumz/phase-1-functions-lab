const ScubaHQandStreet = 42;

function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - ScubaHQandStreet);
}


function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264;
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
  const blocksTraveled = Math.abs(destinationBlock - startBlock);
  return blocksTraveled * 264;
}

const freeRideDistanceInFeet = 400;
const baseFarePerFoot = 0.02;
const maxRideDistanceInFeet = 2500;
const flatFareOver2000Feet = 25;

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet > maxRideDistanceInFeet) {
    return "cannot travel that far";
  }

  if (distanceInFeet <= freeRideDistanceInFeet) {
    return 0;
  }

  if (distanceInFeet > freeRideDistanceInFeet && distanceInFeet <= 2000) {
    const chargeableDistance = distanceInFeet - freeRideDistanceInFeet;
    return chargeableDistance * baseFarePerFoot;
  }

  return flatFareOver2000Feet;
}
