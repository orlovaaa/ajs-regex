export default class Validator {
  static validateUsername(username) {
    const ifMistake = [
      /[^A-Za-z0-9_-]/.test(username), // проверка на на наличие других символов кроме латинских букв, -, _ и цифр (0-9)
      /\d{3}/.test(username), // проверка на наличие 3х цифр подряд
      /^(\d|_|-)/.test(username), // проверка на цифру, -, _ в начале
      /(\d|_|-)$/.test(username), // проверка на цифру, -, _ в конце
    ];

    if (ifMistake.includes(true)) {
      return false;
    }
    return true;
  }
}
