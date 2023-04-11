function arrayObjectToString(arr, key, signParam) {
    if (arr.length < 0) {
      return '';
    }
    const sign = signParam ? signParam : '; ';
    const arrKey = arr.map((item) => item[key]);
    return arrKey.join(sign);
}


module.exports = arrayObjectToString