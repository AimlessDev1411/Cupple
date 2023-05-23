const CryptoJS = require('crypto-js');

const encryptPassword = (password) => {
  let iv = CryptoJS.enc.Base64.parse('')
  let key = CryptoJS.SHA256('password')

  if(typeof password == "string"){
    password = password.slice();
    encryptedString = CryptoJS.AES.encrypt(password, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
  }else{
    encryptedString = CryptoJS.AES.encrypt(JSON.stringify(password), key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });  
  }
  return encryptedString.toString();
}

module.exports = encryptPassword