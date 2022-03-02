let string = "C;V;mobile phone";

const main = (input) => {
  let arr = input.split(";");
  switch (arr[0]) {
    case "S": {
      switch (arr[1]) {
        case "M": {
          arr[2] = arr[2].slice(0, arr[2].length - 2);
          return splitWord(arr[2]);
          break;
        }
        case "C": {
          return splitWord(arr[2]);
          break;
        }
        case "V": {
          return splitWord(arr[2]);
          break;
        }
        default:
          break;
      }
      break;
    }
    case "C": {
      switch (arr[1]) {
        case "M": {
          let result = combineWord(arr[2]) + "()";
          return result;
          break;
        }
        case "C": {
          let result = combineWord(arr[2]).split("");
          result[0] = result[0].toUpperCase();
          return result.join("");
          break;
        }
        case "V": {
          return combineWord(arr[2]);
          break;
        }
        default:
          break;
      }
      break;
    }
    default:
      break;
  }
};

const splitWord = (s) => {
  let newS = s.split("");
  let result = [];
  for (let i of newS) {
    if (i == i.toUpperCase()) {
      result.push(" ");
    }
    result.push(i);
  }
  return result.join("").trim().toLocaleLowerCase();
};

const combineWord = (s) => {
  let arrCharacter = s.split("");
  for (let i = 0; i < arrCharacter.length; i++) {
    if (arrCharacter[i] === " ") {
      i++;
      arrCharacter[i] = arrCharacter[i].toUpperCase();
    }
  }
  return arrCharacter.join("").split(" ").join("");
};

console.log(main(string));
