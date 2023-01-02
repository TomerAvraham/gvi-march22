/**
 * To check a password between 6 to 20 characters which contain at
 * least one numeric digit, one uppercase and one lowercase letter
 */
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

// function isPasswordValid(password) {
//   console.log(password);
//   return Boolean(passwordRegex.test(password));
// }

module.exports = { passwordRegex };
