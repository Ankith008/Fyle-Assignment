function check(validincome, validextra, validage, validdeduction) {
  const total = validincome + validextra - validdeduction;
  if (total < 800000) {
    result = total;
  } else if (total >= 800000) {
    if (validage < 40) {
      result = 0.3 * total;
    } else if (validage >= 40 && validage < 60) {
      result = 0.4 * total;
    } else {
      result = 0.1 * total;
    }
  }
  return result;
}

module.exports = check;
