// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } if (param1 === false && param2 === false) {
    return false;
  }
  return false;
}

function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let word = string.split(' ');
  return word;
}

// Desafio 4
function concatName(string) {
  let firstItem = string.reverse().shift();
  let secondItem = string.pop();
  let result = firstItem + ', ' + secondItem;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;
  let pointsResult = pointsWins + pointsTies;
  return pointsResult;
}

// Desafio 6
function highestCount(numbers) {
  let biggestNumber = numbers[0];
  let counter = 1;

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] === biggestNumber) {
      counter += 1;
    } else if (numbers[index] > biggestNumber) {
      biggestNumber = numbers[index];
      counter = 1;
    }
  }
  return counter;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancecat1 = Math.abs(cat1 - mouse);
  let distancecat2 = Math.abs(cat2 - mouse);

  if (distancecat1 < distancecat2) {
    return 'cat1';
  } if (distancecat1 > distancecat2) {
    return 'cat2';
  } if (distancecat1 === distancecat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      result.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case 'a':
      result += '1';
      break;
    case 'e':
      result += '2';
      break;
    case 'i':
      result += '3';
      break;
    case 'o':
      result += '4';
      break;
    case 'u':
      result += '5';
      break;
    default:
      result += string[index];
    }
  }
  return result;
}

function decode(string) {
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case '1':
      result += 'a';
      break;
    case '2':
      result += 'e';
      break;
    case '3':
      result += 'i';
      break;
    case '4':
      result += 'o';
      break;
    case '5':
      result += 'u';
      break;
    default:
      result += string[index];
    }
  }
  return result;
}

// Desafio 10
function techList(tech, name) {
  let ordered = tech.sort();
  let listReturn = [];
  if (tech.length > 0) {
    for (let index in ordered) {
      listReturn.push({ tech: ordered[index], name: name });
    }
    return listReturn;
  } else {
    return 'Vazio!';
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
