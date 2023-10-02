
function scuberGreetingForFeet(ride){
  if (ride<=400){
    return 'This one is on me!'
  } else if (ride<=2000){
    return 'That will be twenty bucks.'
  } else if (ride >= 2500){
    return 'No can do.'
  } else {
    return 'I will gladly take your thirty bucks.'
  }
  // Write your code here!
}

function ternaryCheckCity(city){
  return city==="NYC"? "Ok, sounds good." : "No go."
  // Write your code here!
}

function switchOnCharmFromTip(tips){
  switch(tips){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous' :
      return "Thank you.";
      break;
    default:
      return 'Bye.'
  }
  // Write your code here!
}