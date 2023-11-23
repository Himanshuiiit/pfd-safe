const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotallySecretKey");

function encryptedPassword(password) {
  return cryptr.encrypt(password);
}

function decryptPassword(cypher) {
  return cryptr.decrypt(cypher);
}

export { encryptedPassword, decryptPassword };
