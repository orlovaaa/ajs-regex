export default class Validator {
  static validateUsername(username) {
    const ifMistake = [
      /[^A-Za-z0-9_-]/.test(username),
      /\d{3}/.test(username),
      /^(\d|_|-)/.test(username),
      /(\d|_|-)$/.test(username),
    ];

    if (ifMistake.includes(true)) {
      return false;
    }
    return true;
  }
}
