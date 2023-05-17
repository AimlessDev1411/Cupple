const CryptoJS = require('crypto-js');

const encryptPassword = (password) => {
  const hash = CryptoJS.SHA256(password).toString();
  return hash;
}

module.exports = encryptPassword