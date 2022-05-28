// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length != 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (let index in numbers) {
      if (numbers[index] < 0 || numbers[index] > 9) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    for (let index in numbers) {
      let counter = 0;
      for (let index2 in numbers) {
        if (numbers[index2] === numbers[index]) {
          counter += 1;
          if (counter >= 3) {
            return "não é possível gerar um número de telefone com esses valores";
          }
        }
      }
    }
    return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(str) {
  let num = str.match(/\d+/g);

   let cupsOfWater = 0;

  for (let index in num) {
    cupsOfWater += parseInt(num[index]);
  }
  if (cupsOfWater === 1) {
    return num + ' copo de água';
  } else {
    return cupsOfWater + " copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
