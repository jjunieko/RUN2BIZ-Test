class PasswordValidator {
  static isValidPasswordPart1(password) {
    const passwordString = password.toString();
    let hasAdjacentDigits = false;
    let isIncreasing = true;

    for (let i = 0; i < passwordString.length - 1; i++) {
      if (passwordString[i] === passwordString[i + 1]) {
        hasAdjacentDigits = true;
      }
      if (parseInt(passwordString[i]) > parseInt(passwordString[i + 1])) {
        isIncreasing = false;
        break;
      }
    }

    return hasAdjacentDigits && isIncreasing;
  }

  static countValidPasswordsPart1(min, max) {
    let count = 0;

    for (let password = min; password <= max; password++) {
      if (PasswordValidator.isValidPasswordPart1(password)) {
        count++;
      }
    }

    return count;
  }

  static isValidPasswordPart2(password) {
    const passwordString = password.toString();
    let hasAdjacentDigits = false;
    let isIncreasing = true;

    for (let i = 0; i < passwordString.length - 1; i++) {
      if (passwordString[i] === passwordString[i + 1]) {
        hasAdjacentDigits = true;

        if (
          i === 0 ||
          (i > 0 && passwordString[i - 1] !== passwordString[i]) ||
          (i < passwordString.length - 2 && passwordString[i + 2] !== passwordString[i])
        ) {
          return true;
        }
      }
      if (parseInt(passwordString[i]) > parseInt(passwordString[i + 1])) {
        isIncreasing = false;
        break;
      }
    }

    return false;
  }

  static countValidPasswordsPart2(min, max) {
    let count = 0;

    for (let password = min; password <= max; password++) {
      if (PasswordValidator.isValidPasswordPart2(password)) {
        count++;
      }
    }

    return count;
  }
}

module.exports = PasswordValidator;
