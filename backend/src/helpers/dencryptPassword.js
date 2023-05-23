const CryptoJS = require('crypto-js');

const encryptPassword = (password) => {
  let iv = CryptoJS.enc.Base64.parse('')
  let key = CryptoJS.SHA256('password')
  
  let decrypted = CryptoJS.AES.decrypt(password, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8)
}

module.exports = encryptPassword