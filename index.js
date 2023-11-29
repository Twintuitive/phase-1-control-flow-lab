// Function to determine the greeting based on ride distance
function scuberGreetingForFeet(feet) {
  // If the ride is less than or equal to 400 feet
  if (feet <= 400) {
    return 'This one is on me!';
  }
  // If the ride is more than 400 feet but less than or equal to 2000 feet
  else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  }
  // If the ride is more than 2000 feet but less than or equal to 2500 feet
  else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  // If the ride is more than 2500 feet
  else {
    return 'No can do.';
  }
}

// Function to check if the city is NYC
function ternaryCheckCity(city) {
  // Using ternary operator to decide the return value
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function to respond based on the tip given
function switchOnCharmFromTip(tip) {
  // Using a switch statement to handle different tip scenarios
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

// Exporting the functions - remove this part if not using Node.js
module.exports = {
  scuberGreetingForFeet,
  ternaryCheckCity,
  switchOnCharmFromTip
};
